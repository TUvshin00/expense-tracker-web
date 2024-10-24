export const ExpenseCard = () => {
  return (
    <div>
      <div className="card bg-white  w-96 shadow-xl">
        <div className="card-body">
          <div>
            <div className=""></div>
            <h2 className="card-title text-base font-semibold text-[#000000]">
              Total Expenses
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-4xl text-[#000000]">-120000$</h2>
            <p className="font-normal text-lg text-[#64748B]">
              Your expence Amount
            </p>
          </div>
          <div>
            <p className="text-lg font-normal text-[#000000]">
              32% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
