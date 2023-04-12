const pool = require('../db');

const getWax = (req, res) => {
    pool.query('SELECT * FROM wax', (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getWax,
}