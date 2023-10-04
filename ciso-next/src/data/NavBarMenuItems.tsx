import {ChatBubbleOvalLeftIcon, FlagIcon, FolderIcon} from "@heroicons/react/24/outline";
import { IconType } from "react-icons";
import {ForwardRefExoticComponent, RefAttributes, SVGProps} from "react";

export interface megaMenuInterface {
    data: {
        color: string,
        icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & {         title?: string | undefined;         titleId?: string | undefined;     } & RefAttributes<SVGSVGElement>>,
        title: string,
        description: string,
        href: string,
    }[]
    itemName?: string;
}

export const competitionNavListMenuItems = [
    {
        color: "blue",
        icon: FlagIcon,
        title: "CCDC",
        description: "Cyber Collegiate Defense Competition",
        href: "/competitions/ccdc"
    },
    {
        color: "orange",
        icon: ChatBubbleOvalLeftIcon,
        title: "NCL",
        description: "National Cyber League",
        href: "#"
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "ITC",
        description: "Information Technology Competition",
        href: "#"
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "CPTC",
        description: "Information Technology Competition",
        href: "#"
    },
];

export const officersnNavListMenuItems = [
    {
        color: "blue",
        icon: FlagIcon,
        title: "Current Officers",
        description: "",
        href: "/officers/currentofficers"
    },
    {
        color: "orange",
        icon: ChatBubbleOvalLeftIcon,
        title: "Previous Officers",
        description: "",
        href: "/officers/previousofficers"
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "Officer Election",
        description: "",
        href: "/officers/officerelection"
    },
    {
        color: "blue-gray",
        icon: FolderIcon,
        title: "Cyber Security Center",
        description: "",
        href: "/officers/cybersecuritycenter"
    },
];

