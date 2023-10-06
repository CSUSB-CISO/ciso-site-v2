"use client"
import {Typography} from "@material-tailwind/react";
import {HomeSignUpForm} from "@/components/HomeSignUpForm";

export default function NewHome() {
    return (
        <div className="relative">
            <img src="/assets/ezgif-frame-009.png" alt="Background Image" />

            <div className="absolute top-28 left-28">
                <div>
                    <Typography variant="h1" color="blue" className="text-9xl">Cyber</Typography>
                    <Typography variant="h1" color="blue" className="text-9xl">Intelligence</Typography>
                    <Typography variant="h1" color="blue" className="text-9xl">Security</Typography>
                    <Typography variant="h1" color="blue" className="text-9xl">Organization</Typography>
                </div>
            </div>

            <div className="absolute top-40 right-96">
                <HomeSignUpForm/>
            </div>
        </div>
    )
}
