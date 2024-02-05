import React, { useState } from "react";

const CalendarSelector = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedDate(event.target.value);
  };

  const handleInputClick = () => {
    setIsCalendarOpen((prevIsCalendarOpen) => !prevIsCalendarOpen);
  };

  const handleDateSelect = (date: React.SetStateAction<string>) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  return (
    <article className="item-card items-stretch bg-slate-100 flex justify-between gap-5 px-3 rounded-xl">
      <time className="text-gray-400 text-xs" dateTime="2023-12-12">
        {selectedDate || "2023-12-12"}
      </time>
      <input
        type="text"
        value={selectedDate}
        onChange={handleInputChange}
        className="aspect-[0.87] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
        onClick={handleInputClick}
      />
      {isCalendarOpen && (
        <div className="mini-calendar">
          {/* Render the mini calendar here */}
        </div>
      )}
    </article>
  );
};
export default CalendarSelector;
