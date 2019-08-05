import { series, parallel } from 'gulp';
import { spy } from './gulp/taskspy';
import html from './gulp/html';
import styles from './gulp/styles';
import scripts from './gulp/scripts';
import build from './gulp/build';
import upload from './gulp/remote';

export const dev = series(parallel(html, styles, scripts), spy);

export const deploy = build;
export const remote = series(build, upload);

export default dev;
