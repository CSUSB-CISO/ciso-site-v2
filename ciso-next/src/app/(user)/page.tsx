"use client"

import {CarouselDefault} from "@/components/HomeCarousel";

export default function Home() {
    return (
    <main className='flex flex-col items-center h-full'>
        <div className="w-3/4 h-1/8">
            <CarouselDefault/>
        </div>
    </main>
    );
}