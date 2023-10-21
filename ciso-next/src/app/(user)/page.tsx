"use client"
import {Typography} from "@material-tailwind/react";
import {HomeSignUpForm} from "@/components/HomeSignUpForm";

import Image from "next/image";
import { useState } from "react";
import HomeSection from "./HomeSection";

export default function NewHome() {

    return (
        <main className="flex flex-col w-full h-full items-center  bg-gradient-to-t from-blue-gray-50 to-blue-gray-600">
            <HomeSection />
        </main>
    )
}
