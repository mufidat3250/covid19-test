import React from "react";

const StatCard = ({
  title,
  value,
  date,
}: {
  title: string;
  value?: string;
  date: string;
}) => {
  return (
    <div className=" bg-white py-4 pl-4 space-y-6 shadow-xl cursor-pointer">
      <p>{title}</p>
      <h1 className="font-[900] text-[30px]">{value}</h1>
      <p>{date}</p>
    </div>
  );
};

export default StatCard;
