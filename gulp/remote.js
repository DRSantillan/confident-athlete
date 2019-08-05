import { src, dest } from 'gulp';
import ftp from 'vinyl-ftp';
import gutil from 'gulp-util';

const serverPath = '/home2/deansant/public_html/';
const user = process.env.FTP_USER;
const pass = process.env.FTP_PWD;
const dir = process.env.FTP_DIR;
const host = 'ftp.deansantillan.com';
const port = 21;
const remoteFolder = process.env.FTP_FLD;
const localFolder = 'dist/**/*';

const connection = () => {
	return ftp.create({
		host: host,
		port: port,
		user: user,
		password: pass,
		parallel: 3,
		log: gutil.log
	});
};

const upload = cb => {
	const connect = connection();

	connect.rmdir(dir, err => {
		if (err) {
			return cb(err);
		} else {
			src(localFolder, { base: './dist', buffer: false })
				.pipe(connect.newer(dir))
				.pipe(connect.dest(dir));
		}
	});
	cb();
};

export default upload;
