import RadarChart from "@/components/radar-chart";
import { getFlyingMachineById } from "@/lib/api";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const machine = await getFlyingMachineById(id);
  console.log(machine);

  return (
    <div className="max-w-screen-md m-auto bg-slate-200 p-5 my-5">
      <h2 className="font-bold">{machine.data.attributes.Name}</h2>
      <div className="grid grid-cols-3 gap-5">
        <Image
          src={
            process.env.STRAPI_BASE_URL +
            machine.data.attributes.Image.data.attributes.formats.small.url
          }
          width={500}
          height={500}
          alt={machine.data.attributes.Name}
          className="col-span-2"
        />
        <div className="col-span-1 flex flex-col gap-5">
          {machine.data.attributes.Description}
          <RadarChart attrs={machine.data.attributes} />
        </div>
      </div>
    </div>
  );
}
