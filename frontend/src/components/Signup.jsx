import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const payload = {
      name: data.name,
      emailid: data.email,
      password: data.password
    };

    const res = await axios.post("http://localhost:4001/user/signup", payload);
    console.log("Server Response:", res.data);
     toast.success("Logout Successful");
    localStorage.setItem("User",JSON.stringify(res.data.user));
    window.location.reload();
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Signup failed!");
  }
};

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto mt-6"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-7">
          <legend className="fieldset-legend text-lg font-bold">Signup</legend>

          <label className="label" htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your full name"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

          <label className="label mt-4" htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

          <label className="label mt-4" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="input input-bordered w-full"
            placeholder="Create a password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

          <label className="label mt-4" htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="input input-bordered w-full"
            placeholder="Re-enter your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: value =>
                value === watch("password") || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}

          <div className="flex items-center gap-2 mt-4 text-sm">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              {...register("terms", { required: "You must agree to the terms" })}
            />
            <label>
              I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a>
            </label>
          </div>
          {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}

          <button type="submit" className="btn btn-primary w-full mt-4">Sign Up</button>

          <p className="text-xs text-center mt-4">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_1")?.showModal()}
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
