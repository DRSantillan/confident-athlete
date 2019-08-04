import { series, parallel } from 'gulp';
import { spy } from './gulp/taskspy';
import html from './gulp/html';
import styles from './gulp/styles';
import scripts from './gulp/scripts';
import build from './gulp/build';

export const dev = series(parallel(html, styles, scripts), spy);

export const deploy = build;

export default dev;
