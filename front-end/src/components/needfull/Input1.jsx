export const Input1 = ({ type, name, placeholder }) => {
  return (
    <div className="text-base not-italic font-normal rounded-lg border border-[#D1D5DB] py-2 px-4 flex items-center self-stretch bg-[#F3F4F6] text-[#A3A3A3]">
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#F3F4F6] w-full outline-none"
        name={name}
      />
    </div>
  );
};
