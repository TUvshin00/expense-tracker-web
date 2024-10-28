import { BlueButton } from "./BlueButton";

export const Addrecord = ({ text }) => {
  return (
    <div className="w-[798px] bg-white ">
      <div>
        <div className="flex items-center justify-between px-[24px] py-5">
          <div>
            <h3>Add Record</h3>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5459 17.9541C19.7572 18.1654 19.876 18.4521 19.876 18.751C19.876 19.0499 19.7572 19.3365 19.5459 19.5479C19.3346 19.7592 19.0479 19.8779 18.749 19.8779C18.4501 19.8779 18.1635 19.7592 17.9521 19.5479L12 13.5938L6.0459 19.546C5.83455 19.7573 5.54791 19.8761 5.24902 19.8761C4.95014 19.8761 4.66349 19.7573 4.45215 19.546C4.2408 19.3346 4.12207 19.048 4.12207 18.7491C4.12207 18.4502 4.2408 18.1636 4.45215 17.9522L10.4062 12L4.45402 6.04598C4.24268 5.83464 4.12395 5.54799 4.12395 5.2491C4.12395 4.95022 4.24268 4.66357 4.45402 4.45223C4.66537 4.24089 4.95201 4.12215 5.2509 4.12215C5.54978 4.12215 5.83643 4.24089 6.04777 4.45223L12 10.4063L17.954 4.45129C18.1654 4.23995 18.452 4.12122 18.7509 4.12122C19.0498 4.12122 19.3364 4.23995 19.5478 4.45129C19.7591 4.66264 19.8778 4.94928 19.8778 5.24817C19.8778 5.54705 19.7591 5.8337 19.5478 6.04504L13.5937 12L19.5459 17.9541Z"
                fill="#0F172A"
              />
            </svg>
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
                  <button className="bg-muted text-muted-foreground rounded-full bg-[#cccfd1]  px-4 py-2 focus:outline-none">
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
                  <h3>Category</h3>
                  <input
                    type="button"
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
                <BlueButton text="Add record" />
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
