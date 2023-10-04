"use client"

import {Typography} from "@material-tailwind/react";


export default function CCDC() {
    return (
        <>
            <div className="flex justify-center">
                <Typography variant="h1">Cyber Collegiate Defense Competition</Typography>
            </div>
            <div className="mr-20 ml-20">
                <img className="float-right ..." src="/assets/competition_pics/ccdc/wrccdclogo.png"/>
                    <Typography variant="lead">For years, there has been a gap between the skills of graduating students and the skills companies need in entry-level cybersecurity professionals. The Collegiate Cyber Defense Competition (CCDC) bridges that gap.</Typography>
            </div>
        </>
    )
}

// /assets/competition_pics/ccdc/wrccdclogo.png