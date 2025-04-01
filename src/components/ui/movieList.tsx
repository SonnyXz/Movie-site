import { Button } from "./button";
import { Movie } from "./movie";

export const MovieList = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[978px] px-[80px] pt-[24px]">
      <div className="flex w-full h-[36px] justify-between">
        <h1 className="text-[24px] font-semibold">{title}</h1>
        <Button className="flex gap-2 w-[120px] h-[36px] bg-transparent shadow-none">
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
