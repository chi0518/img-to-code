"use client";
import Accordion from "@/components/template/Accordion";
import Table from "@/components/atoms/Table";

export default function Test() {
  const Tags = [
    "Input",
    "Select",
    "Checkbox",
    "Radio",
    "Textarea",
    "Button",
    "Pagination",
    "Calendar",
  ];

  return (
    <>
      <h1 className="container mx-auto p-1 text-2xl">Image to code</h1>
      {Tags.map((tag: string, tagNumber: number) => {
        return (
          <div className="container mx-auto p-1" key={tagNumber}>
            <Accordion question={tag} answer={() => <Table tag={tag} />} />
          </div>
        );
      })}
    </>
  );
}
