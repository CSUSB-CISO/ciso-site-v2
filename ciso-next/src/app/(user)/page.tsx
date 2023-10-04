"use client"

import { HomeCarousel} from "@/components/HomeCarousel";
import {Typography} from "@material-tailwind/react";

export default function Home() {
    return (
            <div className="flex flex-col items-center h-screen max-w-screen overflow-x-auto">
                <div className=" h-1/2">
                    <HomeCarousel/>
                </div>
                <div className="mt-20 mb-10 overflow-x-clip">
                    <Typography variant="h1">Welcome to CISO</Typography>
                </div>
                <div className="pr-20 pl-20 overflow-x-clip" >
                    <Typography variant="lead">The Cyber Intel & Security Organization at California State University, San Bernardino is devoted to the art and science of information security. We are a diverse, welcoming group of students passionate about breaking, hacking, and fixing things. We are open to everyone, and we encourage you to join the organization! Check back here for updates on projects and events! Visit cyber.csusb.edu for information on scholarships and academic programs. Feel free to explore the site to learn about ongoing projects and activities. We strive to provide a variety of projects that involve hardware, software, electronics, and competitions. Our projects allow students to build skills that go beyond traditional classroom learning. We highly encourage everyone to get involved with different projects. </Typography>
                </div>
            </div>
    );
}