import { FlyingMachineSearchParams } from "./types";

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

export async function getFlyingMachines(
  searchParams: FlyingMachineSearchParams
) {
  let url = new URL(API_URL + "/flying-machines?populate=Image");

  for (let key in searchParams) {
    if (key === "page") {
      url.searchParams.set("pagination[page]", searchParams["page"].toString());
    } else if (key === "pageSize") {
      url.searchParams.set(
        "pagination[pageSize]",
        searchParams["pageSize"].toString()
      );
    }
  }

  const res = await fetch(url, {
    headers: HEADERS,
  });

  const json = await res.json();
  return json;
}
