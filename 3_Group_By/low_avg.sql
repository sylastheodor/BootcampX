SELECT students.name as student, 
avg(assignments.duration) as average_estimated_duration, 
AVG(assignment_submissions.duration) as average_assignment_duration
FROM students 
JOIN assignment_submissions ON students.id = student_id
JOIN assignments ON assignments.id = assignment_id
WHERE end_date IS NULL
GROUP BY students.name
ORDER BY average_assignment_duration;
