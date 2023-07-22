"use client";
import { useEffect, useState } from "react";
import HistoryItem from "./card/historyItem";
import { academicList, formationList } from "@/content/lists";
import { SwitchIconSvg } from "@/icons/svg/general";

export default function HistorySection() {
  const [list, setList] = useState(academicList);
  const [active, setActive] = useState("academic");
  return (
    <section className="my-60">
      <h1 className="text-5xl font-bold mb-40 text-center">
        {active === "academic"
          ? "Formación académica"
          : "Formación profesional"}
      </h1>
      <div className="flex flex-col items-center w-11/12 mx-auto relative">
        <div className="absolute right-[-20px] top-[-100px]">
          <button
            className="bg-[var(--bg-300)] font-extrabold text-2xl p-3 rounded-md transition-all duration-300 hover:bg-[var(--bg-200)]"
            onClick={() => {
              if (active === "academic") {
                setList(formationList);
                setActive("formation");
              } else {
                setList(academicList);
                setActive("academic");
              }
            }}
          >
            <SwitchIconSvg />
          </button>
        </div>
        <div
          id="divider"
          className="absolute top-[-50px] left-[50%] right-0 h-[calc(100%+100px)] rounded-full w-[4px] bg-[var(--primary-200)]"
        ></div>

        {list.map((item) => {
          const direction =
            list.indexOf(item) % 2 === 0
              ? { className: "self-start pe-5 text-right", to: "right" }
              : { className: "self-end ps-5 text-left", to: "left" };
          return (
            <HistoryItem
              key={`${item.event}${list.indexOf(item)}`}
              {...item}
              className={direction.className}
              to={direction.to}
            />
          );
        })}
      </div>
    </section>
  );
}
