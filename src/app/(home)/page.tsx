"use client";
import Image from "next/image";
import SelectAll from "@/components/atoms/SelectAll";

export default function Test() {
  return (
    <>
      <h1 className="text-2xl	my-3">Image to code</h1>
      <div className="border-b-2 pb-5">
        <p className="bg-blue-200 font-medium rounded my-2 p-3">Select</p>
        <Image
          width={600}
          height={0}
          src="/../../../public/images/select.png"
          alt={""}
        />
        <SelectAll />
      </div>
      <div>
        <p className="bg-blue-200 font-medium rounded my-2 p-3">Input</p>
        <Image
          width={600}
          height={0}
          src="/../../../public/images/select.png"
          alt={""}
        />
        <SelectAll />
      </div>
    </>
  );
}
