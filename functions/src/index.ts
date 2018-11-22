import * as functions from "firebase-functions";
import { getDocumentFromPrismic } from "./prismic";
import { Event } from "./model/event";
import { postToEventbrite } from "./eventbrite";
import { postToFacebook } from "./facebook";
import { postToInstagram } from "./instagram";

const publishEvent = (event: Event) => {
  postToFacebook(event);
  postToEventbrite(event);
  postToInstagram(event);
};

// Set up webhook with Prismic.io
// The function will be called when any action happends on Prismic.io
export const prismic = functions.https.onRequest(async (req, res) => {
  const { type, apiUrl, masterRef } = req.body;
  // Investigate on what type will match
  if (type == "api-update") {
    const eventManifest: Event = await getDocumentFromPrismic(
      apiUrl,
      masterRef
    ); // Get event from prismic.
    publishEvent(eventManifest); // Publish Event to various platform
    res.json({ message: "Automation Completed" });
  } else {
    res.json({ message: "Skip Automation" });
  }
});
