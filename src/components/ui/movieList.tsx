import { Button } from "./button";

export const MovieList = (title) => {
  return (
    <div className="w-full h-[978px]">
      <div className="w-full h-[36px] justify-around">
        <h1>{title}</h1>
        <Button className="flex gap-2 w-[120px] h-[36px] ">
          <p className="text-black text-[14px] leading-[20px]">See More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33301 8.00016H12.6663M12.6663 8.00016L7.99967 3.3335M12.6663 8.00016L7.99967 12.6668"
              stroke="#18181B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
      <div></div>
    </div>
  );
};
