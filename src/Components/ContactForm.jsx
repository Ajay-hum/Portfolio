import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_mdbf3ac", // Replace with your EmailJS service ID
          "template_2gkkq8m", // Replace with your EmailJS template ID
          form.current,
          "qBuZmdax8FCHb5g-6" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            alert("Email sent successfully!");
            form.current.reset(); // Reset the form after successful submission
          },
          (error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
          }
        );
    }
  };

  return (
    <div className="p-8 w-full max-w-3xl">
      <h2 className="text-2xl font-semibold mb-6">Send me an email</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Alex Smith"
            className="bg-white border border-gray-400 rounded-md p-2 focus:ring focus:ring-black focus:outline-none"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="alexsmith@gmail.com"
            className="bg-white border border-gray-300 rounded-md p-2 focus:ring focus:ring-black focus:outline-none"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message"
            className="bg-white border border-gray-300 rounded-md p-2 focus:ring focus:ring-black focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Send email
          </button>
        </div>
      </form>
    </div>
  );
}

