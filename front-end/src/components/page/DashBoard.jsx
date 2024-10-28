"use client";
import { IncomeCard } from "../needfull/IncomeCard";
import { ExpenseCard, GeldCard } from "../needfull/idnex";
import { Header } from "../needfull/Header";

export const DashBoard = () => {
  return (
    <main className="">
      <Header />
      <div className="bg-[#F3F4F6] w-full h-screen  ">
        <div className="py-20">
          <div className=" flex flex-col items-center md:flex md:flex-row  md:justify-center gap-6">
            <GeldCard />
            <IncomeCard />
            <ExpenseCard />
          </div>
        </div>
      </div>
    </main>
  );
};
