"use client";

import { useEffect, useState } from "react";

export const AddrecordText = () => {
  const [recordText, setRecordText] = useState([]);
  const [error, setError] = useState(null);

  const addRecordText = async () => {
    try {
      const response = await fetch(`http://localhost:8000/record`);
      if (!response.ok) throw new Error(`HTPP error ${response.status}`);
      const responseData = await response.json();

      setRecordText(responseData);
      console.log(setRecordText);
    } catch (error) {
      console.log(error);
      setError("category backend-ees avhd aldaa garlaa");
    }
  };
  useEffect(() => {
    addRecordText();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <div>
          <h3>Last 30 Days</h3>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 bg-white">
            Newest fisrt
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>7 week ago</a>
            </li>
            <li>
              <a>14 week ago</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center gap-5">
          {recordText.length > 0 ? (
            recordText.map((record, index) => (
              <div key={index} className=" gap-3 w-[867px] h-16 border-2 ">
                <div className="flex justify-between items-center px-6 py-1 gap-3">
                  <div>
                    <h3 className="font-normal">{record.name}</h3>
                    <h3>{record.created_at}</h3>
                  </div>
                  <div>
                    <h3>{record.amount}</h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
