'use client'
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({

      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",

    })

    console.log(error);

    if (error) {
      toast(
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <div>
            <span className="block text-gray-900">Access Denied</span>
            <span className="block text-[10px] text-gray-500 mt-1 tracking-wide normal-case font-medium">
              Invalid credentials provided.
            </span>
          </div>
        </div>
      );;
    }

    if (res) {
      toast(
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
          <div>
            <span className="block text-gray-900">Authentication Successful</span>
            <span className="block text-[10px] text-gray-500 mt-1 tracking-wide normal-case font-medium">
              Welcome back to your curated space.
            </span>
          </div>
        </div>);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }


  return (
    <div className="flex flex-col lg:flex-row bg-[#fcfcfc] lg:min-h-screen">

      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto hidden md:block">
        <Image
          src="/logincover.jpg"
          alt="cover"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-32 lg:p-24 lg:pt-40">
        <div className="w-full max-w-md">

          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Welcome Back.
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sign in to access detailed collections and manage your profile.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>

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
                Sign In
              </button>
            </div>

          </form>

          <button className="btn w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 rounded-none text-xs font-bold uppercase transition-all duration-300 h-14 flex items-center justify-center gap-3 shadow-sm mt-6" onClick={handleGoogleSignIn}>
            <FcGoogle size={20} />  Continue with Google
          </button>

          <div className="mt-10 text-center lg:text-left">
            <p className="text-sm text-gray-500">
              Donot have an account?
              <Link href="/register" className="font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors ml-2">
                Create one
              </Link>
            </p>
          </div>



        </div>
      </div>

    </div>
  );
};

export default LoginPage;