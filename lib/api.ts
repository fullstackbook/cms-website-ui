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
  let url = new URL(
    API_URL + "/flying-machines?populate=Image&populate[0]=weapons"
  );

  for (let key in searchParams) {
    if (key === "page") {
      url.searchParams.set("pagination[page]", searchParams["page"].toString());
    } else if (key === "pageSize") {
      url.searchParams.set(
        "pagination[pageSize]",
        searchParams["pageSize"].toString()
      );
    } else if (
      ["Attack", "Defense", "Agility", "Speed", "Capacity"].indexOf(key) !== -1
    ) {
      url.searchParams.set(
        `filters[${key}][$gte]`,
        searchParams[key as keyof FlyingMachineSearchParams].toString()
      );
    } else if (key === "weapons") {
      const str = searchParams["weapons"];
      if (!str) {
        continue;
      }
      const arr = str.split(",");
      for (let i = 0; i < arr.length; i++) {
        let id = arr[i];
        url.searchParams.set(`filters[weapons][id][$in][${i}]`, id);
      }
    }
  }

  const res = await fetch(url, {
    headers: HEADERS,
  });

  const json = await res.json();
  return json;
}

export async function getWeapons() {
  const res = await fetch(API_URL + "/weapons", {
    headers: HEADERS,
  });
  const json = await res.json();
  return json;
}

export async function createContactMessage(data: {
  Name: string;
  Email: string;
  Message: string;
}) {
  try {
    const res = await fetch(API_URL + "/contact-messages", {
      headers: HEADERS,
      method: "POST",
      body: JSON.stringify({ data: data }),
    });
    if (!res.ok) {
      const json = await res.json();
      console.error(json);
      throw new Error("Failed to create contact message: " + json);
    }
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
