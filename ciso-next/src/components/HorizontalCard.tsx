import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

import React from "react";
export interface horizontalCardInterface {
    pic: string,
    subtitle: string,
    title: string,
    description: string,
}
export function HorizontalCard(params: horizontalCardInterface) {
    const truncatedDescription = truncateDescription(params.description, 35);

    return (
        <Card className="w-full max-w-[48rem] flex-row">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={params.pic}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {params.subtitle}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {params.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    {truncatedDescription}
                </Typography>
                <DialogDefault pic={params.pic} subtitle={params.subtitle} description={params.description} title={params.title}/>
            </CardBody>
        </Card>
    );
}

export function DialogDefault(params: horizontalCardInterface) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Learn More
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{params.title}</DialogHeader>
                <DialogBody divider>
                    {params.description}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
function truncateDescription(description: string, maxLength: number): string {
    if (description.length <= maxLength) {
        return description;
    }
    // Split the description into words
    const words = description.split(" ");
    let truncatedDescription = words.slice(0, maxLength).join(" ");
    // Add trailing periods
    truncatedDescription += "...";
    return truncatedDescription;
}