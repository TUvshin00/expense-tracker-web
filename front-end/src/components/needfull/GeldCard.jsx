import { Chip, WhiteGeld, WhiteText } from "../svg";

export const GeldCard = () => {
  return (
    <div>
      <div className="card bg-blue-600 w-96 shadow-xl">
        <div className="card-body flex flex-col gap-12">
          <div className="flex items-center gap-1">
            <WhiteGeld />
            <WhiteText />
          </div>
          <div className="flex flex-col  justify-start ">
            <h3 className="text-gray-400">cash</h3>
            <div className="flex justify-between items-center">
              <p className="text-lg font-normal text-white">1000000₮</p>
              <Chip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
