import { Addrecord } from "../need/Addrecord";

export const RecordSVG = () => {
  return (
    <div>
      <button
        className=" bg-[#0166FF] w-[100px] h-[32px] rounded-xl text-white "
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        + Record
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-[792px] w-full p-0">
          <Addrecord />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
