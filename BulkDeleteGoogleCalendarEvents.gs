function bulkDeleteEventsBetweenDates() {
  var startDate = new Date('1970-01-01T00:00:00');
  var endDate = new Date('1970-01-01T23:59:59');
  var events = CalendarApp.getDefaultCalendar().getEvents(startDate, endDate);
  
  while (events.length > 0) {
    try {
      events.forEach(event => event.deleteEvent());
    } catch (e) {
      Logger.log("Reached Google Calendar bulk delete limits. Continuing.");
      events = CalendarApp.getDefaultCalendar().getEvents(startDate, endDate);
    }
  }

  Logger.log('Completed.');
}
