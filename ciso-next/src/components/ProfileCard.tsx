import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

import Image from "next/image"

interface officerProfileCard {
    position: string,
    name: string,
    pic: string,

}
export function ProfileCard(params: officerProfileCard) {
    return (
        <Card className="w-64">
            <CardHeader floated={false} className="h-48 flex">
                <img src={params.pic} alt="profile-picture" className="h-full w-full object-cover"/>
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {params.name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {params.position}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <i className="fab fa-twitter" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}