import { Event } from "./model/event";
import https from "https";

export const postToFacebook = (event: Event): void => {
  return null;
  https.get(
    "graph.facebook.com",
    "/your-user-id/accounts",
    "POST",
    {
      name: "Maggie's Test Blog",
      category_enum: "PERSONAL_BLOG",
      about: "Just trying the API",
      picture: "https://your-picture.com/pic.jpg",
      cover_photo: '{"url":"https://your-cover-picture.com/pic.jpg"}'
    },
    function(response) {
      // Insert your code here
    }
  );
  FB.api;
};
