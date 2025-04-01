export const Movie = ({ source, score, mName }) => {
  return (
    <div className="flex flex-col items-start mt-5 gap-3 w-[230px] h-[349px] bg-[#F4F4F5]">
      <img src={source} alt="" />
      <div className="flex flex-col px-4  gap-3">
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.99967 1.3335L10.0597 5.50683L14.6663 6.18016L11.333 9.42683L12.1197 14.0135L7.99967 11.8468L3.87967 14.0135L4.66634 9.42683L1.33301 6.18016L5.93967 5.50683L7.99967 1.3335Z"
              fill="#FDE047"
              stroke="#FDE047"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-black">{score}/10</p>
        </div>
        <p className="text-black">{mName}</p>
      </div>
    </div>
  );
};
