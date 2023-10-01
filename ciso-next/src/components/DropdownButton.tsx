import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Card,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import {buttonItems} from "@/data/PreviousOfficersPageData";

export interface buttonItemsInterface {
    data: {
        title: string,
        description: string,
    }[],
    buttonName: string
}
export function MenuCustomList(params: buttonItemsInterface) {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
                >
                    {params.buttonName}{" "}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                            openMenu ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                <Card
                    color="gray"
                    shadow={false}
                    variant="gradient"
                    className="col-span-3 grid h-full w-full place-items-center rounded-md"
                >
                    <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                </Card>
                <ul className="col-span-4 flex w-full flex-col gap-1">
                    {buttonItems.map(({ title, description }) => (
                        <a href="#" key={title}>
                            <MenuItem>
                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                    {title}
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="font-normal"
                                >
                                    {description}
                                </Typography>
                            </MenuItem>
                        </a>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    );
}