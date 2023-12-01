import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";

const LoginForm = () => {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <Card className="h-auto w-80">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="email1" value="Email" />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="name@yourmail.com"
                                required
                            />
                        </div>
                        <div>
                            <div className="block mb-2">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit" color="purple">
                            Login
                        </Button>
                        <p className="text-center">
                            Don't have an account?{" "}
                            <a className="text-blue-700" href="/register">
                                Register
                            </a>
                        </p>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default LoginForm;