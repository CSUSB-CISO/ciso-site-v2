import { pool } from '/home/hunte/Documents/repos/ciso-site-v2/ciso-next/src/db.js'



export default function yuh() {
    const request = pool.request();
    const result = request.query('SELECT * FROM your_table');
}