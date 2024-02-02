"use client";

import { RecoilRoot } from "recoil";

import SelectAll from "@/components/atoms/SelectAll";

export default function Test(props: any) {
  const typeNumber = props.params.typeId;

  const renderComponent = (typeNumber: string) => {
    switch (typeNumber) {
      case "1":
        return <SelectAll />;
      case "2":
        return <SelectAll />;
      case "3":
        return <SelectAll />;
      case "4":
        return <SelectAll />;
      case "5":
        return <SelectAll />;
      case "6":
        return <SelectAll />;
      default:
        break;
    }
  };

  return <RecoilRoot>{renderComponent(typeNumber)}</RecoilRoot>;
}
