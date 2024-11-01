export const AddrecordText = () => {
  return (
    <div>
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
    </div>
  );
};
