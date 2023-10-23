"use client"
import {Typography} from "@material-tailwind/react";
import {HomeSignUpForm} from "@/components/HomeSignUpForm";

import Image from "next/image";
import { useState } from "react";
import HomeSection from "./HomeSection";
import TempSection from "./TempSection";

export default function NewHome() {

    return (
        <main className="flex flex-col gap-y-96 snap-mandatory snap-y items-center bg-site bg-no-repeat bg-cover overflow-hidden">
            <HomeSection />
            <TempSection />
            <div className='h-[4000px]'></div>
        </main>
    )
}
