SELECT cohort_id as cohort, count(assignment_submissions.student_id) as total_submissions
FROM assignment_submissions
JOIN students ON students.cohort_id =  student_id
GROUP BY cohort_id
ORDER BY count(assignment_submissions.student_id);
