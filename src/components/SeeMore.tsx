import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";

export const SeeMore = ({ genre }) => {
  return (
    <div className="flex w-full h-[36px] justify-between items-center">
      <div className="text-[24px] font-semibold">{genre}</div>
      <div className="flex">
        <Button className="flex text-Black items-center  gap-2 w-[120px] h-[36px] bg-transparent shadow-none">
          See More
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};
