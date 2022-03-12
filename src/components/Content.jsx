import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";

const Content = ({ allData }) => {
  const [isCurrentDate, setIsCurrentDate] = useState(false);

  const dateToday = new Date();
  const horoscopeDate = allData.date_range.split("-");
  const formatfromDate = horoscopeDate[0].split(" ").filter((arr) => arr);
  const formatToDate = horoscopeDate[1].split(" ").filter((arr) => arr);

  const fromDate = new Date(`${formatfromDate.join(" ")}, 2022`);
  const toDate = new Date(`${formatToDate.join(" ")}, 2022`);

  useEffect(() => {
    if (dateToday > fromDate && dateToday < toDate) setIsCurrentDate(true);
  }, [fromDate, toDate]);

  return (
    <div className={`${styles.card} mt-5`}>
      <div className={`flex justify-content-between ${styles.content_head}`}>
        <p className="pl-3 capitalize">Hi {allData.name}</p>
        <p className="pr-3">{allData.current_date}</p>
      </div>
      <div className={isCurrentDate ? `bg-yellow-400` : ""}>
        <h1 className="text-center capitalize">{allData.sign}</h1>
        <p className="pl-4 pr-4 text-center">{allData.description}</p>
        <p className="pl-4 pr-4 text-center font-bold text-indigo-900">
          Lucky Number :{" "}
          <span className="text-gray-900">{allData.lucky_number}</span>
        </p>
      </div>
    </div>
  );
};

export default Content;
