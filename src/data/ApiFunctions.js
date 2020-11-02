export function findValueAttributes(attributes, valueCode) {
  return attributes.find((item) => item.code === valueCode)
    ? attributes.find((item) => item.code === valueCode).value
    : "None";
}

function sliceDate(date) {
  return date.slice(0, 10);
}

export function findValueEnrollments(item, fromDay, toDay, value) {
  let filteredEvents = item.events.filter(
    (event) =>
      event.status != "COMPLETED" &&
      sliceDate(event.dueDate) >= fromDay &&
      sliceDate(event.dueDate) <= toDay
  );

  if (value == "item") {
    if (filteredEvents[0] && item.status != "COMPLETED") return item;
  }
  if (value == "dueDate") {
    return filteredEvents[0] ? sliceDate(filteredEvents[0].dueDate) : "None";
  }
  if (value == "status") {
    return filteredEvents[0] ? sliceDate(filteredEvents[0].status) : "None";
  }
}
