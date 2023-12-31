"use client"

import React from "react";
import Image from "next/image";
import type { NavbarProps } from "@material-tailwind/react";
import Link from "next/link"
import {competitionNavListMenuItems, megaMenuInterface, officersnNavListMenuItems} from "../"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ProfileMenu from "./ProfileMenu";


import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Avatar,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// import CISOLogo from 'public/ciso_logo.png'

type ColorsType = {
  [key: string]: string; // Define keys as strings and values as strings
};

const colors: ColorsType = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

function NavListMenu ({ data, itemName }: megaMenuInterface) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = data.map(
      ({ icon, title, description, color, href }, key) => (
          <a href={href} key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
              <div className={`rounded-lg p-5 ${colors[color]}`}>
                {React.createElement(icon, {
                  strokeWidth: 2,
                  className: "h-6 w-6",
                })}
              </div>
              <div>
                <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm"
                >
                  {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  {description}
                </Typography>
              </div>
            </MenuItem>
          </a>
      )
  );

  return (
      <React.Fragment>
        <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            offset={{ mainAxis: 20 }}
            placement="bottom"
            allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-normal" color="blue-gray">
              <ListItem
                  className="flex items-center gap-2 py-2 pr-4"
                  selected={isMenuOpen || isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <Square3Stack3DIcon className="h-[18px] w-[18px]" />
                  {itemName}
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`hidden h-3 w-3 transition-transform lg:block ${
                        isMenuOpen ? "rotate-180" : ""
                    }`}
                />
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
  );
}

function NavList() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null

  return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 flex items-center justify-center">

        <Typography
            as="a"
            href="/"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <CubeTransparentIcon className="h-[18px] w-[18px]" />
            Home
          </ListItem>
        </Typography>

        <NavListMenu
            data={competitionNavListMenuItems}
            itemName="Competitions"
        />

        <NavListMenu
            data={officersnNavListMenuItems}
            itemName="Officers"
        />

        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >

          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Projects
          </ListItem>
        </Typography>

        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >

          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Events
          </ListItem>
        </Typography>

        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >

          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Mentorship
          </ListItem>
        </Typography>

        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >

          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            CyberSquad
          </ListItem>
        </Typography>

        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >

          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            GenCyber
          </ListItem>
        </Typography>

          <NavListMenu
              data={competitionNavListMenuItems}
              itemName="WiCyS"
          />

        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
        >

          <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            About
          </ListItem>
        </Typography>
      </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
      <Navbar fullWidth={true} color={"transparent"} className="max-w-screen sticky top-0 left-0 z-10 justify-center">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <Image
              src='/assets/ciso_logo.png'
              alt="CISO"
              width={70}
              height={70}
          />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex text-white">
            <Button variant="gradient" size="sm">
              Sign In
            </Button>
          </div>
          <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Sign In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Sign Up
            </Button>
          </div>
        </Collapse>
      </Navbar>
  );
}