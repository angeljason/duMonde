INSERT INTO `#__eb_messages` (`id`, `message_key`, `message`) VALUES
(1, 'option', 'com_eventbooking'),
(2, 'view', 'message'),
(3, 'admin_email_subject', 'New Registration For Event : [EVENT_TITLE]'),
(4, 'admin_email_body', '<p>Dear administrator</p>\r\n<p>User [FIRST_NAME] [LAST_NAME] has just registered for event <strong>[EVENT_TITLE]</strong>. The registration detail is as follow :</p>\r\n<p>[REGISTRATION_DETAIL]</p>\r\n<p>Regards,</p>\r\n<p>Events management team</p>\r\n<p> </p>'),
(5, 'user_email_subject', 'Event registration confirmation'),
(6, 'user_email_body', '<p>Dear <strong>[FIRST_NAME] [LAST_NAME]</strong></p>\r\n<p>You have just registered for event <strong>[EVENT_TITLE]</strong>. The registration detail is as follow :</p>\r\n<p>[REGISTRATION_DETAIL]</p>\r\n<p>Regards,</p>\r\n<p>Events management Team</p>'),
(7, 'user_email_body_offline', '<p>Dear <strong>[FIRST_NAME] [LAST_NAME]</strong></p>\r\n<p>You have just registered for event <strong>[EVENT_TITLE]</strong>. The registration detail is as follow :</p>\r\n<p>[REGISTRATION_DETAIL] .</p>\r\n<p>Please send the offline payment via our bank account . Information of our bank account is as follow :</p>\r\n<p>Tuan Pham Ngoc, Ngan Hang Ngoai Thuong Vietcombank, Account Number XXX045485467</p>\r\n<p>If we don''t receive your payment within 3 days, we will cacel the registration and you cannot attend to this event .</p>\r\n<p>Regards,</p>\r\n<p>Events management Team</p>'),
(8, 'group_member_email_subject', 'Event registration confirmation'),
(9, 'group_member_email_body', '<p>Dear <strong>[FIRST_NAME] [LAST_NAME]</strong></p>\r\n<p>You have just been registered for event <strong>[EVENT_TITLE] </strong>as a group member. Your registration details is as follow:</p>\r\n<p>[MEMBER_DETAIL]</p>\r\n<p>Regards,</p>\r\n<p>Events management Team</p>'),
(10, 'registration_form_message', '<p>Please enter information in the form below to process registration for event <strong>[EVENT_TITLE]</strong>.</p>'),
(11, 'registration_form_message_group', '<p>Please enter information in the form below to complete group registration for event <strong>[EVENT_TITLE]</strong>.</p>'),
(12, 'number_members_form_message', '<p>Please enter number of members for your group registration. Number of members need to be greater than or equal 2. You can enter detail information of these members in the next step.</p>'),
(13, 'member_information_form_message', '<p>Please enter information of this member in the form below . All fields marked with (<span class="required">*</span>) is required .</p>'),
(14, 'confirmation_message', '<p>Please review your registration information for event <strong>[EVENT_TITLE]</strong>. If they are correct, please press Complete Registration Button to process the registration.</p>'),
(15, 'thanks_message', '<p>Thanks for registering for event <strong>[EVENT_TITLE]</strong>. Your registration detail is as follow :</p>\r\n<p>[REGISTRATION_DETAIL]</p>\r\n<p>Regards,</p>\r\n<p>Events management Team</p>'),
(16, 'thanks_message_offline', '<p>Thanks for registering for event <strong>[EVENT_TITLE]</strong>. Your registration detail is as follow :</p>\r\n<p>[REGISTRATION_DETAIL]</p>\r\n<p>Please send the offline payment via our bank account . Information of our bank account is as follow :</p>\r\n<p>Tuan Pham Ngoc, Ngan Hang Ngoai Thuong Vietcombank, Account Number XXX045485467</p>\r\n<p>If we don''t receive your payment within 3 days, we will cancel the registration and you cannot attend to this event .</p>\r\n<p>Regards,</p>\r\n<p>Events management Team</p>'),
(17, 'cancel_message', '<p>Your registration for event [EVENT_TITLE] was cancelled.</p>'),
(18, 'registration_cancel_message_free', '<p>You have just cancel your registration for event [EVENT_TITLE]</p>\r\n<p>Thanks,</p>\r\n<p>Event Registration Team</p>'),
(19, 'registration_cancel_message_paid', '<p>Your registration for event <strong>[EVENT_TITLE]</strong> has successfully cancelled. Our event registration team will check your registration and process the refund within 24 hours from now .</p>\r\n<p>Thanks,</p>\r\n<p>Registration Team</p>\r\n<p> </p>'),
(20, 'invitation_form_message', '<p>Please enter information in the form below to send invitation to your friends to invite them to register for the event <strong>[EVENT_TITLE]</strong></p>'),
(21, 'invitation_email_subject', 'Invitation to register for event [EVENT_TITLE]'),
(22, 'invitation_email_body', '<p>Dear <strong>[NAME]</strong></p>\r\n<p>Your friend <strong>[SENDER_NAME]</strong> has suggested you to view and register for the event <strong>[EVENT_TITLE]</strong> in our site. Please access to <strong>[EVENT_DETAIL_LINK]</strong> to view and register for the event.</p>\r\n<p>Note from [SENDER_NAME] :</p>\r\n<p><em>[PERSONAL_MESSAGE]</em></p>\r\n<p>Regards,</p>\r\n<p>Events manager team</p>\r\n<p> </p>'),
(23, 'invitation_complete', '<p>The invitation was sent to your friends. Thank you !</p>'),
(24, 'reminder_email_subject', 'Reminder for event [EVENT_TITLE]'),
(25, 'reminder_email_body', '<p>Dear <strong>[FIRST_NAME] [LAST_NAME]</strong></p>\r\n<p>This email is used to remind you that you have registered for event [EVENT_TITLE]. The event will occur on <strong>[EVENT_DATE]</strong>, so please come and attend the event on time.</p>\r\n<p>Regards,</p>\r\n<p>Website administrator tea</p>'),
(26, 'registration_cancel_email_subject', 'Registration Cancel for even [EVENT_TITLE]'),
(27, 'registration_cancel_email_body', '<p>Dear administrator</p>\r\n<p>User <strong>[FIRST_NAME] [LAST_NAME]</strong> has just cancel their registration for event <strong>[EVENT_TITLE]</strong> . You can login to back-end of your site to see the detail and process the refund if needed .</p>\r\n<p>Regards,</p>\r\n<p>Administrator Team</p>'),
(28, 'registration_approved_email_subject', 'Your registration for event [EVENT_TITLE] approved'),
(29, 'registration_approved_email_body', '<p>Dear [FIRST_NAME] [LAST_NAME]</p>\r\n<p>Your registration for event [EVENT_TITLE] has just approved by our administrator team. Your registration details is as follow:</p>\r\n<p>[REGISTRATION_DETAIL]</p>\r\n<p>Regards,</p>\r\n<p>Website Administrator Team</p>'),
(30, 'waitinglist_complete_message', '<p>Thanks for joiing waitinglist of event <strong>[EVENT_TITLE] . </strong>We will email you if there is anyone cancel their registration.</p>'),
(31, 'watinglist_confirmation_subject', 'Waitinglist confirmation'),
(32, 'watinglist_confirmation_body', '<p>Dear <strong>[FIRST_NAME] [LAST_NAME]</strong></p>\r\n<p>Thanks for joining waitinglist of our event [EVENT_TITLE] . We will inform you as if there is someone cancel their registration and you can attend the event.</p>\r\n<p>Regards,</p>\r\n<p>Events management team</p>'),
(33, 'watinglist_notification_subject', 'Waitinglist Notification'),
(34, 'watinglist_notification_body', '<p>Dear Administrator</p>\r\n<p>User <strong>[FIRST_NAME] [LAST_NAME] </strong>has just joined waitinglist for event <strong>[EVENT_TITLE] . </strong></p>\r\n<p>Regards,</p>\r\n<p>Events management team</p>'),
(35, 'registrant_waitinglist_notification_subject', 'Someone cancel the registration'),
(36, 'registrant_waitinglist_notification_body', '<p>Dear <strong>[FIRST_NAME] [LAST_NAME]</strong></p>\r\n<p>The registrant <strong>[REGISTRANT_FIRST_NAME] [REGISTRANT_LAST_NAME]</strong> has just cancelled his registration for the event <strong>[EVENT_TITLE]</strong></p>\r\n<p>If you still want to attend to this event, please click on the link below to view and register for the event.</p>\r\n<p><strong>[EVENT_LINK]</strong></p>\r\n<p>Regards,</p>\r\n<p>Website Administrator Team</p>'),
(37, 'task', 'save');