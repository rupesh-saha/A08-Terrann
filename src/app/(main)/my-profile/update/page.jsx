"use client"
import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client"
import { useForm } from 'react-hook-form';


const UpdatePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleUpdate = async (data) => {

    const info = await authClient.updateUser({
      image: data.url,
      name: data.name,
    })

    alert("Information Updated")

  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
            Update Information.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Modify your display name or profile image URL below.
          </p>
        </div>

        <form className="space-y-6 bg-white p-8 border border-gray-100 shadow-sm" onSubmit={handleSubmit(handleUpdate)}>


          <div className=" w-full">
            <label className="label px-0">
              <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
              {...register("name", { required: "Name is required" })}
            />
          </div>


          <div className="w-full">
            <label className="label px-0">
              <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                Image URL
              </span>
            </label>
            <input
              type="url"
              placeholder="Enter your URL"
              className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
              {...register("url", { required: "Photo URL is required" })}
            />
          </div>

          <div className="pt-4">
            <button className="btn w-full bg-[#141311] text-white hover:bg-gray-800 border-none rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300">
              Update Information
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default UpdatePage;