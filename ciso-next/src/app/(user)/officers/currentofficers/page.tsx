"use client"
import {ProfileCard} from "@/components/ProfileCard";
import {Typography} from "@material-tailwind/react";


export default function Officers() {
    const profiles = [
        { name: 'Hunter Pittman', position: 'President', pic: '/assets/officer_pics/Hunta_352x320.jpg' },
        { name: 'Shakeh Ghazaryan', position: 'Vice President', pic: '/assets/officer_pics/profile_blank_352x320.png' },
        { name: 'Jason Handen', position: 'Treasurer', pic: '/assets/officer_pics/profile_blank_352x320.png' },
        { name: 'Christian Magana', position: 'Outreach', pic: '/assets/officer_pics/sexychristian_352x320.png' },
        { name: 'Melani Martin Gonzalez', position: 'Secretary', pic: '/assets/officer_pics/profile_blank_352x320.png' },
        { name: 'Friday Kriedeman', position: 'Communications', pic: '/assets/officer_pics/profile_blank_352x320.png' },
        { name: 'Jaylon Ignacio', position: 'Chief Information Officer', pic: '/assets/officer_pics/daddyjaylon_352x320.jpg' },
        { name: 'Dr. Vincent Nestler', position: 'CISO Advisor', pic: '/assets/officer_pics/nestler_352x320.jpg' },
        // Add more profiles here as needed
    ];

    return (
        <main>
            <div className='flex justify-center mt-20'>
                {/*<img src='/assets/ciso_current_officers_logo.png' alt='Current Officers'/>*/}
                <Typography variant="h1">Current Officers</Typography>
            </div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="grid grid-cols-4 gap-4">
                    {profiles.map((profile, index) => (
                        <ProfileCard key={index} {...profile} />
                    ))}
                </div>
            </div>
        </main>

    );
}