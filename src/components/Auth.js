import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signin, signup } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../utils/context/user/UserContext";

import yumyumLogo from "../../assets/yumyum-background.svg";
import toast from "react-hot-toast";


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const { saveUser } = useContext(UserContext)
    const navigate = useNavigate();


    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    const onSubmit = async (formData) => {
        try {
            if (isSignup) {
                const { data } = await signup(formData);
                saveUser(data)
                toast.success("Sign up successfully");
                navigate("/");
            } else {
                const { data } = await signin(formData);
                saveUser(data)
                toast.success("Sign in successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex p-8">
            <div className="container mt-24 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <img src={yumyumLogo} alt="YumYum Logo" className="w-20 h-20 mx-auto mb-4" />
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {isSignup && (
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-2 rounded mb-4"
                                    placeholder="Full Name*"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Please enter your name",
                                        },
                                    })}
                                />
                                <p className="text-xs text-red-500">{errors.name?.message}</p>
                            </div>
                        )}
                        <div className="mb-4">
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-2 rounded mb-4"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Please enter your email",
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="Email*"
                            />
                            <p className="text-xs text-red-500">{errors.email?.message}</p>
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-2 rounded mb-4"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Please enter your password",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters",
                                    },
                                })}
                                placeholder="Password*"
                            />
                            <p className="text-xs text-red-500">{errors.password?.message}</p>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary w-full text-center py-3 rounded text-secondary focus:outline-none my-1"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : isSignup
                                    ? "Create Account"
                                    : "Sign in"}
                        </button>
                    </form>
                </div>
                <div className="text-grey-dark mt-6">
                    {isSignup ? "Already have an account?" : "Don't have an account?"}
                    <button
                        onClick={switchMode}
                        className="no-underline border-b border-blue text-blue ml-2"
                    >
                        {isSignup ? "Sign in" : "Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;