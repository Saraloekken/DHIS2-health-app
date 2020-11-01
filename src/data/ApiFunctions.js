export function findValue(attributes, valueCode) {
  return attributes.find((item) => item.code === valueCode)
    ? attributes.find((item) => item.code === valueCode).value
    : "None";
}

function sliceDate(date) {
  return date.slice(0, 10);
}

export function filterTable(item, fromDay, toDay) {
  let filteredEvents = item.events.filter(
    (event) =>
      event.status != "COMPLETED" &&
      sliceDate(event.dueDate) >= fromDay &&
      sliceDate(event.dueDate) <= toDay
  );
  if (filteredEvents[0] && item.status != "COMPLETED") return item;
}

export function findDueDate(item) {
  let earliestDueDate;

  for (let i = 0, len = item.events.length; i < len; i++) {
    let event = item.events[i];

    if (
      event.status != "COMPLETED" &&
      (event.dueDate < earliestDueDate || typeof earliestDueDate == "undefined")
    ) {
      earliestDueDate = event.dueDate;
    }
  }
  return earliestDueDate ? earliestDueDate.substring(0, 10) : "None";
}

export function findStatus(item) {
  let earliestDueDate;
  let checkStatus;

  for (let i = 0, len = item.events.length; i < len; i++) {
    let event = item.events[i];

    if (
      event.status != "COMPLETED" &&
      (event.dueDate < earliestDueDate || typeof earliestDueDate == "undefined")
    ) {
      earliestDueDate = event.dueDate;
      checkStatus = event.status;
    }
  }
  return checkStatus ? checkStatus.substring(0, 10) : "None";
}
