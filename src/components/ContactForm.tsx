"use client";

import React, { useState } from "react";

import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(""); // delete previous massage
    setError(""); // delete previous error

    const phoneRegex = /^09\d{9}$/;

    if (!formData.name || !formData.phone || !formData.message) {
      setError("لطفاً تمامی فیلدها را پر کنید.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setError("شماره تماس باید با 09 شروع شود و 11 رقم باشد.");
      return;
    }

    try {
      await axios.post("/api/contact", formData);
      setSuccess("پیام شما با موفقیت ارسال شد."); // ok
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("خطایی در ارسال پیام رخ داده است.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="نام و نام خانوادگی"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-12 px-4 mb-4 text-gray-900 rounded-md focus:outline-none"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="شماره تماس"
          value={formData.phone}
          onChange={handleChange}
          className="w-full h-12 px-4 mb-4 text-[#56464d] rounded-md focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="متن پیام"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-24 px-4 mb-4 text-[#56464d] rounded-md focus:outline-none"
          required
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <button
          type="submit"
          className="bg-green-800 text-white py-2 px-6 rounded-md"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
