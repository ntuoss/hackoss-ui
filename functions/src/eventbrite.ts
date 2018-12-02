import { Event } from "./model/event";
const https = require("https");

const buildEvent = (res): Event => {
  return null;
};

export const getDocumentFromEventbrite = async (
  apiUrl: String
): Promise<Event> => {
  const res = await https.get(apiUrl + "?token=$EVENTBRITE_TOKEN");
  const event = buildEvent(res);
  return event;
};
