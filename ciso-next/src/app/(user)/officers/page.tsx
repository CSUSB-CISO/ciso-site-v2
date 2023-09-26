"use client"
import {ProfileCard} from "@/components/OfficersCard";


export default function Officers()
{
    return (
        <>
            <h1>Yuh we doin it</h1>

            <div className='flex items-center justify-center'>
                <ProfileCard name='Hunter Pittman' position="President" pic='/assets/Hunta_352x320.jpg' />
            </div>
        </>
    );
}