const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// const cohortName = process.argv[2]
// const lim = process.argv[3];

pool.query(`
SELECT students.id as student_id, students.name as student_name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5} ; 
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(res.rows);
  })
})
.catch(err => console.error('query error', err.stack));