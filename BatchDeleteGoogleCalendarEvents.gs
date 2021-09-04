function deletePastEventsBetweenDates() {
  var startDate = new Date('2019-01-01T00:00:00');
  var endDate = new Date('2019-12-31T23:59:59');
  var events = CalendarApp.getDefaultCalendar().getEvents(startDate, endDate);
  
  while (events.length > 0) {
    try {
      events.forEach(event => event.deleteEvent());
    } catch (e) {
      Logger.debug("Reached Google Calendar batch delete limits. Continuing.");
      events = CalendarApp.getDefaultCalendar().getEvents(startDate, endDate);
    }
  }

  Logger.log('Completed.');
}
