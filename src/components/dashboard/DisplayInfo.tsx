import { displayInfos } from "@/app/dashboard-data";
import Image from "next/image";

export default function DisplayInfo() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4">
      {displayInfos.map((info) => {
        return (
          <div
            className="grid grid-cols-2 shadow py-3 px-2 w-full"
            key={info.description}
          >
            <div className="md:col-span-2">
              <Image height={150} width={150} src={info.image} alt="info.png" />
            </div>
            <p className="md:col-span-2 text-sm font-light text-left text-white py-4">
              {info.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
