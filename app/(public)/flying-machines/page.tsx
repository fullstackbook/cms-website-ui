import Pagination from "@/components/pagination";
import { getFlyingMachines } from "@/lib/api";
import { FlyingMachineSearchParams, Machine } from "@/lib/types";
import Image from "next/image";

export default async function Page({
  searchParams,
}: {
  searchParams: FlyingMachineSearchParams;
}) {
  const flyingMachines = await getFlyingMachines(searchParams);

  console.log(flyingMachines.data);

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-3 bg-gray-100 p-5">sidebar</div>
      <div className="col-span-9">
        <div className=" p-5 grid grid-cols-3 gap-5">
          {flyingMachines.data.map((machine: Machine) => (
            <div
              key={machine.id}
              className="bg-zinc-100 flex flex-col gap-5 items-center py-5"
            >
              <Image
                src={
                  process.env.STRAPI_BASE_URL +
                  machine.attributes.Image.data.attributes.formats.thumbnail.url
                }
                height={156}
                width={156}
                alt={machine.attributes.Name}
              />
              <div>{machine.attributes.Name}</div>
              <div className="grid grid-cols-3 gap-5">
                <div>⚔️ {machine.attributes.Attack}</div>
                <div>🛡️ {machine.attributes.Defense}</div>
                <div>🚀 {machine.attributes.Speed}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5">
          <Pagination pagination={flyingMachines.meta.pagination} />
        </div>
      </div>
    </div>
  );
}
