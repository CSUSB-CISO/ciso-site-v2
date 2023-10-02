"use client"

import {Typography} from "@material-tailwind/react";

export default function OfficerElection() {
    return (
        <>
            <div className='flex justify-center mt-20'>
                {/*<img src='/assets/ciso_current_officers_logo.png' alt='Current Officers'/>*/}
                <Typography variant="h1">Officer Elections</Typography>
            </div>
            <div className="flex justify-center mt-10 mb-20 ml-20 mr-20">
                <Typography variant="lead">
Elections for officer positions are typically held every year or every other year depending on the graduation date of the current officer in that position. Information about available positions and candidates will be posted here when the time comes. For more information about becoming an officer, feel free to speak with any current officer at the Cyber Intelligence & Security Organization. 
                </Typography>
            </div>
            <div className="flex justify-center">
                <img src='/assets/ciso_logo_circle.png' alt="ciso logo" width="500" height="500"/>
            </div>
        </>
    )


}
