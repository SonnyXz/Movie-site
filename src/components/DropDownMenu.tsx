import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { MdOutlineKeyboardArrowDown } from "react-icons/md";
  import { Input } from "@/components/ui/input";




export const DropDownMenu = () =>{
    return (
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
    )
} 