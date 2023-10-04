'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";


export default function ThemeSwitcher() 
{
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null

    return (
        <>
            <button
                aria-label="Toggle Light Mode"
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}   
                className="flex items-center h-full w-full" 
            >
                {
                    theme === 'dark' ? 
                        <SunIcon className=" text-deep-orange-400 mr-3 h-[18px] w-[18px]" /> 
                    :
                        <MoonIcon className=" text-gray-700 mr-3 h-[18px] w-[18px]" />
                }
                <Typography color='inherit' variant='small' className='font-normal  '>
                    {
                        theme === 'dark' ? 
                            'Light Mode' 
                        :
                            'Dark Mode'
                    }
                </Typography>
            </button>

        </>
    )

}