import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import React from "react";

export function HomeSignUpForm() {
    return (
        <Card color="white" shadow={true}>
            <Typography variant="h4" color="blue-gray" className="mt-4 text-center">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 text-center font-normal">
                Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 ml-8 mr-8 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" crossOrigin={undefined} />
                    <Input size="lg" label="Email" crossOrigin={undefined} />
                    <Input type="password" size="lg" label="Password" crossOrigin={undefined} />
                </div>
                <Checkbox
                    label={<Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                    >
                        I agree the
                        <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                        >
                            &nbsp;Terms and Conditions
                        </a>
                    </Typography>}
                    containerProps={{className: "-ml-2.5"}} crossOrigin={undefined}                />
                <Button className="mt-6" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 mb-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}