SELECT a.*,b.* FROM dumonde14.e27rt_rsform_submissions a
LEFT JOIN dumonde14.e27rt_rsform_submission_values b ON a.SubmissionId=b.SubmissionId;


SELECT distincta.*,b.* FROM dumonde14.e27rt_rsform_submissions a
LEFT JOIN dumonde14.e27rt_rsform_submission_values b ON a.SubmissionId=b.SubmissionId
WHERE b.FieldValue LIKE '%test%';