"use client";
import { useEffect, useState } from "react";
import { BlueButton } from "./BlueButton";

export const Addrecord = () => {
  const [typeTransaction, setTypeTransaction] = useState("EXP");
  const [error, setError] = useState(null);

  const [records, setRecords] = useState({
    name: "",
    amount: "",
    transaction_type: typeTransaction,
    creadet_at: "",
    category_id: "",
  });

  const fetchRecord = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/record`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(records),
      });
      if (!response.ok) throw new Error(`HTPP error ${response.status}`);
      console.log("record added ", data);
      setRecords({
        name: "",
        amount: "",
        transaction_type: typeTransaction,
        creadet_at: "",
        category_id: "",
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  // useEffect(() => {
  //   fetchRecord();
  // }, []);
  return (
    <div className="w-[798px] bg-white ">
      <div>
        <div className="flex items-center justify-between px-[24px] py-5">
          <div>
            <h3>Add Record</h3>
          </div>
          <div>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
        <div className="flex">
          <div className="flex px-6 py-5 flex-col">
            <div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start  rounded-full">
                  <button className="bg-[#0166FF] text-white rounded-full px-4 py-2 focus:outline-none">
                    Expense
                  </button>
                  <button
                    id="green"
                    className=" bg-muted text-muted-foreground rounded-full bg-[#cccfd1]  px-4 py-2 focus:outline-none"
                  >
                    Income
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h3>Amount</h3>
                  <input
                    className="bg-[#D1D5DB] w-[348px] h-[76px] text-gray-400 rounded-lg "
                    placeholder="$000"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Choose"
                    className="bg-[#D1D5DB] text-gray-400 w-[348px] rounded-lg h-[24px] text-left"
                  />
                </div>
                <div>
                  <h3>Date</h3>
                  <div className="flex gap-[10px]">
                    <input
                      type="date"
                      className="bg-[#D1D5DB] text-gray-400 rounded-lg w-[168px] h-11"
                    />
                    <input
                      type="time"
                      className="bg-[#D1D5DB] text-gray-400 rounded-lg w-[168px] h-11"
                    />
                  </div>
                </div>
                <button className="h-10 w-full rounded-lg bg-blue-600 text-xl text-white">
                  <p>add</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6 py-5 gap-6 w-full">
            <div>
              <h3>Name</h3>
              <input
                type="text"
                placeholder="Write here"
                className="bg-[#D1D5DB] w-[292px] h-6 text-gray-400 rounded-lg  text-start"
              />
            </div>
            <div>
              <h3>Note</h3>
              <input
                type="text"
                className="bg-[#D1D5DB] w-[292px] h-[200px] text-gray-400 rounded-lg text-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
