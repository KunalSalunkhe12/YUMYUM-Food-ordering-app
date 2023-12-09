import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signin, signup } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../utils/context/user/UserContext";

import yumyumLogo from "../../assets/yumyum-background.png";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const { saveUser } = useContext(UserContext)
    const navigate = useNavigate();
    const { state: locationState } = useLocation()

    useEffect(() => {
        if (locationState) {
            toast.error(locationState?.message)
        }
    }, [])

    const switchPasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState)
    }

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
            <div className="container lg:mt-14 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <h2 className="my-2 lg:my-6 text-xl font-medium">{isSignup ? "Sign Up" : "Sign In"}</h2>
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <img src={yumyumLogo} alt="YumYum Logo" className="w-14 h-14 lg:w-20 lg:h-20 mx-auto mb-4" />
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
                            <div className="flex relative">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
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
                                {
                                    isPasswordVisible ? <FaEyeSlash onClick={switchPasswordVisibility} className="absolute right-3 bottom-1/2 cursor-pointer" /> :
                                        <FaEye onClick={switchPasswordVisibility} className="absolute right-3 bottom-1/2 cursor-pointer" />
                                }
                            </div>
                            <p className="text-xs text-red-500">{errors.password?.message}</p>
                        </div>
                        <button
                            type="submit"
                            className="btn_primary w-full focus:outline-none my-1"
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