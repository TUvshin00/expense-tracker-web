export const BlueButton = ({ text }) => {
  return (
    <button>
      <div className="flex  w-[300px] justify-center items-center gap-4 rounded-[20px] bg-[#0166FF] text-[#fff] p-2 h-[48px]">
        <p className="text-xl not-italic font-normal">{text}</p>
      </div>
    </button>
  );
};
