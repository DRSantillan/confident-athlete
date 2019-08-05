import { src, dest } from 'gulp';
import ftp from 'vinyl-ftp';
import gutil from 'gulp-util';

const user = process.env.user;
const pass = process.env.pass;
const dir = process.env.dir;
const host = process.env.host;
const port = 21;
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

const upload = done => {
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
	done();
};

export default upload;
