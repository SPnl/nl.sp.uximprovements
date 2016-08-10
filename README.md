nl.sp.uximprovements
====================

Keyboard shortcut handling voor SP CiviCRM, and more!

***Note to future developers and/or archaeologists:***

- It seems the shortcut handling JS functions don't work properly with CiviCRM 4.6 / 4.7, only with version 4.4.
- Also, the input validation in this extension can probably be handled better using [CiviDesk Normalize](https://github.com/cividesk/com.cividesk.normalize).
- I added a check so all the javascript code isn't loaded with every XHR request as well (for instance, it was also loaded for each dashboard widget and each inline form).


