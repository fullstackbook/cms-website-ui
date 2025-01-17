import Pagination from "@/components/pagination";
import ScoreFilter from "@/components/score-filter";
import SortByAttribute from "@/components/sort-by-attribute";
import WeaponFilter from "@/components/weapon-filter";
import { getFlyingMachines, getWeapons } from "@/lib/api";
import { FlyingMachineSearchParams, Machine, Weapon } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: FlyingMachineSearchParams;
}) {
  const flyingMachines = await getFlyingMachines(searchParams);
  const weapons = await getWeapons();

  console.log(flyingMachines.data);

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-3 bg-gray-100 p-5 flex flex-col gap-5">
        <h2 className="font-bold">Attributes</h2>
        <Suspense>
          <ScoreFilter attr="Attack" />
          <ScoreFilter attr="Defense" />
          <ScoreFilter attr="Speed" />
          <ScoreFilter attr="Agility" />
          <ScoreFilter attr="Capacity" />
          <WeaponFilter weapons={weapons.data} />
          <SortByAttribute />
        </Suspense>
      </div>
      <div className="col-span-9">
        <div className=" p-5 grid grid-cols-3 gap-5">
          {flyingMachines.data.map((machine: Machine) => (
            <div
              key={machine.id}
              className="bg-zinc-100 flex flex-col gap-5 items-center py-5"
            >
              <Link href={`/flying-machines/${machine.id}`}>
                <Image
                  src={
                    process.env.IMAGE_URL +
                    machine.attributes.Image.data.attributes.formats.thumbnail
                      .url
                  }
                  height={156}
                  width={156}
                  alt={machine.attributes.Name}
                />
              </Link>
              <div>{machine.attributes.Name}</div>
              <div className="grid grid-cols-3 gap-5">
                <div>⚔️ {machine.attributes.Attack}</div>
                <div>🛡️ {machine.attributes.Defense}</div>
                <div>🚀 {machine.attributes.Speed}</div>
              </div>
              <div className="flex gap-5">
                {machine.attributes.weapons.data.map((weapon: Weapon) => (
                  <div
                    key={weapon.id}
                    className="bg-green-200 rounded-lg p-1 text-sm font-bold"
                  >
                    {weapon.attributes.Name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-5">
          <Suspense>
            <Pagination pagination={flyingMachines.meta.pagination} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
