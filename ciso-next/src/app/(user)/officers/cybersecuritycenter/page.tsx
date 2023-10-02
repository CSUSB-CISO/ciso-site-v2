"use client"

import {Typography} from "@material-tailwind/react";
import {HorizontalCard} from "@/components/HorizontalCard";
import {ProfileCard} from "@/components/ProfileCard";
import {cyberSecurityCenterMembers} from "@/data/CyberSecurityCenterData";


export default function CyberSecurityCenter() {
    return (
        <>
            <div className="flex justify-center">
                <Typography variant="h1">Cyber Security Center</Typography>
            </div>
            <div className="flex justify-center mt-5">
                <Typography variant="h3">Meet the Team</Typography>
            </div>

            <div className="flex justify-center items-center min-h-screen">
                <div className="grid grid-cols-2 gap-4">
                    {cyberSecurityCenterMembers.map((data, index) => (
                        <HorizontalCard key={index} {...data} />
                    ))}
                </div>
            </div>
        </>
    )
}
