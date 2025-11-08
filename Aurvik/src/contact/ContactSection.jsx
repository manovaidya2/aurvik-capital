import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import axiosInstance from "../utils/axiosInstance";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    annualTurnover: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/contact", formData);
      alert("✅ Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        annualTurnover: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ===== Left Form Section ===== */}
        <div>
          <h2 className="text-2xl font-semibold text-[#123E73] mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will reach out to you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#123E73] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#1E4D8E] focus:outline-none"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#123E73] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#1E4D8E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#123E73] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#1E4D8E] focus:outline-none"
                />
              </div>
            </div>

            {/* Company + Turnover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#123E73] mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#1E4D8E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#123E73] mb-1">
                  Annual Turnover
                </label>
                <select
                  name="annualTurnover"
                  value={formData.annualTurnover}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#1E4D8E] focus:outline-none"
                >
                  <option value="">Select range</option>
                  <option>Below ₹1 Cr</option>
                  <option>₹1–10 Cr</option>
                  <option>Above ₹10 Cr</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#123E73] mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business and goals..."
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#1E4D8E] focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-[#1E4D8E] hover:bg-[#173E73]"
              } text-white font-semibold py-3 rounded-md shadow-md transition-all`}
            >
              {loading ? "Submitting..." : "Book Free Orientation →"}
            </button>
          </form>
        </div>

        {/* ===== Right Info Section ===== */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#123E73] mb-4">
              Contact Information
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Mail className="text-[#1E4D8E] w-5 h-5 mt-1" />
                <div>
                  <strong className="text-[#123E73]">Email Us</strong>
                  <p>info@manovaidya.in</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="text-[#1E4D8E] w-5 h-5 mt-1" />
                <div>
                  <strong className="text-[#123E73]">Call Us</strong>
                  <p>+91 98765 43210</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="text-[#1E4D8E] w-5 h-5 mt-1" />
                <div>
                  <strong className="text-[#123E73]">Visit Us</strong>
                  <p>
                    <b>Clinic:</b> Noida & Gurugram, India
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageSquare className="text-[#1E4D8E] w-5 h-5 mt-1" />
                <div>
                  <strong className="text-[#123E73]">WhatsApp</strong>
                  <a
                    href="https://wa.me/918000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E4D8E] hover:underline"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Hours Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#123E73] mb-3">
              Office Hours
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>
                <strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM
              </li>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
            </ul>
            <p className="text-sm text-[#D79D3B] mt-2">
              *Consultations available by prior booking only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
