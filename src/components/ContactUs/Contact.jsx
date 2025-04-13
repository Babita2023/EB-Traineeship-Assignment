import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({ mode: "onChange" });

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // You get full valid form including phone
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-[#F7F7FA] py-16 px-4 sm:px-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-xl">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only alphabets are allowed",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
              placeholder="Your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Phone (with Controller) */}
          <div>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                validate: (value) =>
                  isValidPhoneNumber(value || "") || "Invalid phone number",
              }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  defaultCountry="NP"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 py-3 rounded-lg"
                />
              )}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 outline-none"
              placeholder="Your message..."
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-10 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit
            </button>
            {success && (
              <p className="text-green-600 mt-4 font-medium">
                ✅ Message sent successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
