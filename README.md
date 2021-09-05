# batch-delete-google-calendar-events

Bulk delete of Google Calendar's default calendar events given a date range.

## Running the script

1. Create a new [Google Apps Script](https://developers.google.com/apps-script). At your Google Drive: right-click --> click "More" --> click "Google Apps Script" (a new Apps Script tab will be launched).
1. Rename your project from "Untitled project" to "BulkDeleteGoogleCalendarEvents".
1. Replace the existing source code (typically an empty function) with the contents of `BulkDeleteGoogleCalendarEvents.gs`. Modify `startDate` and `endDate` to your needs.
1. Save the modified function.
   1. Before saving, ensure `startDate` and `endDate` values are correct.
1. Click "Run".
   1. The first execution requires authorization: "This project requires permission to access your data". Click "Review permissions" --> select the Google account whose calendar you want to delete events.
   1. In case Google displays a message requesting access to sensitive info ("Google hasn't verified this app"), click "Advanced" --> "Go to BulkDeleteGoogleCalendarEvents (unsafe)" --> click "Allow".
1. Wait until the script execution is completed.
1. Check your Google Calendar. All events between `startDate` and `endDate` will have been deleted.

## Improvements

- Use [Google Drive REST API](https://developers.google.com/apps-script/guides/import-export) or [clasp](https://developers.google.com/apps-script/guides/clasp) to simplify the deployment process to Google Drive.

##

**Note:** this repository should have been called `bulk-delete-google-calendar-events`, but I mistakenly used the term "*batch*" instead. As it had already been shared with the wrong name, I just decided to let it be :slightly_smiling_face:
