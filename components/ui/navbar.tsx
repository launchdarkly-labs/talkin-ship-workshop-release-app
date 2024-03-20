//@ts-nocheck
import * as React from "react";
import { useContext } from "react";
import { Search, PanelTopOpen } from "lucide-react";
import { Avatar, AvatarImage } from "./avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import LoginContext from "@/utils/contexts/login";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
} from "./dropdown-menu";
import QRCodeImage from "./QRCodeImage";
import { PersonaContext } from "../personacontext";
import { QuickLoginDialog } from "../quicklogindialog";

interface NavBarProps {
  cart: InventoryItem[];
  setCart: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  variant: string;
  personas: Persona[];
}

interface Persona {
  id: string | number;
  personaname: string;
  personatype: string;
  personaimage: string;
  personaemail: string;
}

const NavBar = React.forwardRef<any, NavBarProps>(
  ({ launchClubLoyalty, cart, setCart, className, variant, handleLogout, ...props }, ref) => {
    const { isLoggedIn, user } = useContext(LoginContext);
    let navChild, navLogo, navLinkMobileDropdown, navLinksGroup;
    const navLinkStyling =
      "hidden sm:block pb-12 pt-1.5 bg-transparent mr-4 flex items-start text-sm font-sohnelight font-medium transition-colors bg-no-repeat bg-bottom";

    const { personas } = useContext(PersonaContext);

    navChild = (
      <>
        {!isLoggedIn ? null : (
          <div className="flex space-x-6 ml-auto mr-4 items-center">
            <Search color={"white"} className="hidden sm:block" />
            <div className="text-white hidden sm:block">
              <QRCodeImage />
            </div>

            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage
                    src={
                      personas.find((persona) => persona.personaname === user)?.personaimage ||
                      "ToggleAvatar.png"
                    }
                    className=""
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] h-[440px]">
                <>
                  <div className="mx-auto flex place-content-center w-full">
                    <img
                      src={
                        personas.find((persona) => persona.personaname === user)?.personaimage ||
                        "ToggleAvatar.png"
                      }
                      className="rounded-full h-48"
                    />
                  </div>
                  <div className="mx-auto text-center align-center flex text-black font-sohnelight pt-4  text-xl items-center align-center">
                    <p className="pt-4">
                      Thank you{" "}
                      {personas.find((persona) => persona.personaname === user)?.personaname ||
                        user}{" "}
                      for banking with us as a<br></br>
                      <span className="text-2xl">Platinum Member!</span>
                    </p>
                  </div>
                  <div className="mx-auto text-center">
                    <Button
                      onClick={handleLogout}
                      className=" bg-red-700 font-audimat text-white items-center my-2 w-full bg-gradient-to-tr from-banklightblue to-bankdarkblue text-xl rounded-none"
                    >
                      Logout
                    </Button>
                    <QuickLoginDialog personas={personas} variant={variant} />
                  </div>
                </>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </>
    );

    navLogo = (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" height="28" width="174" className="pr-2">
          <image href="/toggle-bank.svg" height="28" width="174" alt="Toggle Bank" />
        </svg>
      </>
    );

    navLinkMobileDropdown = (
      <>
        {isLoggedIn ? (
          <>
            <DropdownMenuItem href="/bank">Book</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Transfers</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Deposits</DropdownMenuItem>
            <DropdownMenuItem href="/bank">External Accounts</DropdownMenuItem>
            <DropdownMenuItem href="/bank">Statements</DropdownMenuItem>
          </>
        ) : null}

        <div className="flex justify-between">
          <DropdownMenuItem>
            <Search className="cursor-pointer" />
          </DropdownMenuItem>
          <div className="cursor-pointer">
            <QRCodeImage />
          </div>
        </div>
      </>
    );

    navLinksGroup = (
      <>
        <button
          href="/bank"
          className={`${navLinkStyling} ml-12 text-white hover:text-white focus:text-airlinetext bg-gradient-to-r from-banklightblue to-bankdarkblue bg-[length:100%_3px]`}
        >
          Summary
        </button>
        <button
          href="/bank"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-banklightblue to-bankdarkblue bg-[length:100%_3px]`}
        >
          Transfers
        </button>
        <button
          href="/bank"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-banklightblue to-bankdarkblue bg-[length:100%_3px]`}
        >
          Deposits
        </button>
        <button
          href="/bank"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-banklightblue to-bankdarkblue bg-[length:100%_3px]`}
        >
          External Accounts
        </button>
        <button
          href="/bank"
          className={`${navLinkStyling} text-airlineinactive focus:text-airlinetext hover:text-white hover:bg-gradient-to-r from-banklightblue to-bankdarkblue bg-[length:100%_3px]`}
        >
          Statements
        </button>
      </>
    );

    return (
      <nav className="sticky w-full flex top-0 bg-black z-40 font-audimat transition-all duration-150 h-full sm:h-20 p-4 sm:p-6">
        <div className="ml-2 sm:ml-8 flex items-center">{navLogo}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2 cursor-pointer block lg:hidden text-white">
              <PanelTopOpen size={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>{navLinkMobileDropdown}</DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
        {isLoggedIn ? (
          <div className="hidden lg:flex sm:gap-x-2 lg:gap-x-6">{navLinksGroup}</div>
        ) : null}
        {navChild}
      </nav>
    );
  }
);

export default NavBar;
