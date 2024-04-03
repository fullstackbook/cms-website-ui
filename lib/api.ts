const API_URL = process.env.STRAPI_API_URL;

const HEADERS = {
  Authorization: "bearer " + process.env.STRAPI_API_TOKEN,
  "Content-Type": "application/json",
};

export async function getHeroText() {
  const res = await fetch(API_URL + "/hero-text", {
    headers: HEADERS,
  });
  const json = await res.json();
  return json;
}