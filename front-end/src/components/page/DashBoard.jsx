"use client";
import Link from "next/link";
import { Icon1, RecordSVG } from "../svg";
import { IncomeCard } from "../needfull/IncomeCard";
import { ExpenseCard, GeldCard } from "../needfull/idnex";
import { Header } from "../needfull/Header";

export const DashBoard = () => {
  return (
    <main>
      <Header />
      <div className="bg-[#F3F4F6] ">
        <div className=" flex flex-col items-center md:flex md:flex-row  md:justify-center gap-6">
          <GeldCard />
          <IncomeCard />
          <ExpenseCard />
        </div>
      </div>
    </main>
  );
};
