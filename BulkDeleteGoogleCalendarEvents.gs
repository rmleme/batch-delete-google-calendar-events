function bulkDeleteEventsBetweenDates() {
  var startDate = new Date('2019-01-01T00:00:00');
  var endDate = new Date('2019-12-31T23:59:59');
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
