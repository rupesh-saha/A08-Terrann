"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const handleLogin = async (data) => {
    console.log(data);
    const { name, url, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({

      name: name, // required
      email: email, // required
      password: password, // required
      image: url,
      callbackURL: "/login",

    })

    console.log(error);

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("SignUp successful");
      router.push("/login");
    }

  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#fcfcfc] lg:min-h-screen">

      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto hidden md:block">
        <Image
          src="/signupcover.jpg"
          alt="cover"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-32 lg:p-24 lg:pt-36">
        <div className="w-full max-w-md">

          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Create Account.
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Register to curate your favorite collections, track your orders, and manage your design profile.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>

            <div className="w-full">
              <label className="label px-0">
                <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Jhankar Mahbub"
                className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
                {...register("name", { required: "Name is required" })}
              />
              {
                errors.name && (
                  <p className="text-red-500 font-medium">{errors.name.message}</p>
                )
              }
            </div>

            <div className="w-full">
              <label className="label px-0">
                <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
                {...register("email", { required: "Email is required" })}
              />
              {
                errors.email && (
                  <p className="text-red-500 font-medium">{errors.email.message}</p>
                )
              }
            </div>

            <div className="w-full">
              <label className="label px-0">
                <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Photo URL (link)
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter the URL (link)"
                className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
                {...register("url", { required: "Photo URL is required" })}
              />
              {
                errors.url && (
                  <p className="text-red-500 font-medium">{errors.url.message}</p>
                )
              }
            </div>

            <div className="w-full">
              <label className="label px-0">
                <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Password
                </span>

              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
                {...register("password", { required: "Password is required" })}
              />
              {
                errors.password && (
                  <p className="text-red-500 font-medium">{errors.password.message}</p>
                )
              }
            </div>

            <div className="pt-6">
              <button className="btn w-full bg-[#141311] text-white hover:bg-gray-800 border-none rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 h-14">
                Register
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default SignUpPage;