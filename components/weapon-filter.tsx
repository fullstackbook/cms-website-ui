"use client";

import { Weapon } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function WeaponFilter({ weapons }: { weapons: Weapon[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const weaponsSelected = searchParams.get("weapons")?.split(",") || [];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    const value = e.target.value;
    const checked = e.target.checked;
    const params = new URLSearchParams(searchParams);
    const str = params.get("weapons");
    let set;
    if (str) {
      set = new Set(str.split(","));
    } else {
      set = new Set();
    }
    if (checked) {
      set.add(value);
    } else {
      set.delete(value);
    }
    let arr = Array.from(set);
    params.set("weapons", arr.join(","));
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <label className="font-bold">Weapons</label>
      {weapons.map((weapon) => (
        <div key={weapon.id} className="flex justify-between my-5">
          <label>{weapon.attributes.Name}</label>
          <input
            type="checkbox"
            value={weapon.id}
            onChange={handleChange}
            checked={weaponsSelected.indexOf(String(weapon.id)) !== -1}
          />
        </div>
      ))}
    </div>
  );
}
