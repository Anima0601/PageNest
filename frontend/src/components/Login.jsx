import React, { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const [alertMessage,setAlertMessage]= useState("");
        const [alertType,setAlertType]= useState("");

    const onSubmit = async (data) => {
        try {
            const payload = {
                emailid: data.email,
                password: data.password
            };

            const res = await axios.post("http://localhost:4001/user/login", payload);
            console.log("Server Response:", res.data);
            setAlertMessage("Login successful!");
            setAlertType("success");

        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            setAlertMessage(error.response?.data?.message || "Login failed!");
            setAlertType("error");
        }
    };


    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <form
                    method="dialog"
                    className="modal-box relative w-full max-w-xs mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <button
                        type="button"
                        onClick={() => document.getElementById("my_modal_1").close()}
                        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black hover:bg-red-500 hover:text-white active:scale-95 transition duration-200"
                    >
                        <span className="text-xl font-bold">×</span>
                    </button>

                    <h3 className="font-bold text-lg text-center mb-4">Login</h3>

                    <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full mt-2"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                        <br/>
                        <label className="label mt-3">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full mt-2"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500 text-sm">This field is required</span>}

                        <button type="submit" className="btn btn-neutral w-full mt-4">Login</button>

                        <p className="text-xs mt-2 text-center">
                            Haven't registered yet?{' '}
                            <Link to="/signin">
                                <span className="text-blue-500 hover:underline">Signup</span>
                            </Link>
                        </p>

                        {alertMessage && <Alert message={alertMessage} type={alertType} />}

                    </fieldset>
                </form>
            </dialog>
        </div>

    );
}

export default Login;

