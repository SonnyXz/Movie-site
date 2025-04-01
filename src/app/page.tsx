import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MyImage } from "@/components/MyImage";

export default function Home() {
  return (
    <div className="">
      <div className="flex w-full h-[59px] justify-center items-center ">
        <div className="w-[1280px] h-[36px] flex justify-between items-center px-4">
          <div className="w-[92px] h-[20px] flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5.83366 2.1665V18.8332M14.167 2.1665V18.8332M1.66699 10.4998H18.3337M1.66699 6.33317H5.83366M1.66699 14.6665H5.83366M14.167 14.6665H18.3337M14.167 6.33317H18.3337M3.48366 2.1665H16.517C17.5203 2.1665 18.3337 2.97985 18.3337 3.98317V17.0165C18.3337 18.0198 17.5203 18.8332 16.517 18.8332H3.48366C2.48034 18.8332 1.66699 18.0198 1.66699 17.0165V3.98317C1.66699 2.97985 2.48034 2.1665 3.48366 2.1665Z"
                stroke="#4338CA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="w-[64px] h-[20px] text-[#4338CA] font-semibold italic">
              Movie Z
            </p>
          </div>
          <div className="flex w-[488px] h-[36px] gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 border rounded-md px-3">
                {" "}
                <MdOutlineKeyboardArrowDown />
                Genre
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input />
          </div>
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M8 2.5C7.20435 3.29565 6.75736 4.37478 6.75736 5.5C6.75736 6.62522 7.20435 7.70435 8 8.5C8.79565 9.29565 9.87478 9.74264 11 9.74264C12.1252 9.74264 13.2044 9.29565 14 8.5C14 9.68669 13.6481 10.8467 12.9888 11.8334C12.3295 12.8201 11.3925 13.5892 10.2961 14.0433C9.19975 14.4974 7.99335 14.6162 6.82946 14.3847C5.66558 14.1532 4.59648 13.5818 3.75736 12.7426C2.91825 11.9035 2.3468 10.8344 2.11529 9.67054C1.88378 8.50666 2.0026 7.30026 2.45673 6.2039C2.91085 5.10754 3.67989 4.17047 4.66658 3.51118C5.65328 2.85189 6.81331 2.5 8 2.5Z"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="h-[600px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="relative">
              <MyImage
                imge={
                  "https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
                }
              />
              <div className="absolute top-[170px] left-[200px]">
                <p className="text-white text-[16px]">Now playing:</p>
                <h1 className="text-white font-bold text-[36px]">Wicked</h1>
                <p className="flex items-center gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M13.9997 2.3335L17.6047 9.63683L25.6663 10.8152L19.833 16.4968L21.2097 24.5235L13.9997 20.7318L6.78967 24.5235L8.16634 16.4968L2.33301 10.8152L10.3947 9.63683L13.9997 2.3335Z"
                      fill="#FDE047"
                      stroke="#FDE047"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-white">6.9/10</p>
                </p>
                <p className="text-white w-[605px] text-3 h-[80px] leading-4 font-light py-4">
                  Elphaba, a misunderstood young woman because of her green
                  skin, and Glinda, a popular girl, become friends at Shiz
                  University in the Land of Oz. After an encounter with the
                  Wonderful Wizard of Oz, their friendship reaches a crossroads.
                </p>
                <Button className="bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33301 2L12.6663 8L3.33301 14V2Z"
                      stroke="#18181B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-black">Watch Trailer</p>
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-20" />
          <CarouselNext className="mr-20" />
        </Carousel>
      </div>
    </div>
  );
}
