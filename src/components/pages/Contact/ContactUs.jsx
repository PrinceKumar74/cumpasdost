import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🎉 Confetti animation
  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    if (!formData.agree) {
      setStatus("Please agree to the privacy policy.");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phoneNumber || "N/A",
      message: formData.message,
    };

    emailjs
      .send(
        "service_ezu7fen",
        "template_l30ocjw",
        templateParams,
        "0D_AHMz8LHFv3tVWw"
      )
      .then(() => {
        setStatus("🎉 Message sent successfully!");
        fireConfetti();

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
          agree: false,
        });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 animate-fadeUp">

        <h2 className="text-4xl font-bold text-white text-center mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Let’s build something amazing 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name *"
              required
              className="input-style"
            />

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name *"
              required
              className="input-style"
            />
          </div>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="input-style"
          />

          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className="input-style"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message *"
            required
            className="input-style h-32 resize-none"
          />

          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-orange-500"
            />
            I agree to the privacy policy *
          </label>

          <button
            disabled={isLoading}
            className="w-full py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-orange-500 to-red-500
            hover:scale-[1.02] transition-all duration-300
            disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm mt-3 text-green-400">
              {status}
            </p>
          )}
        </form>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.12);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          transition: 0.3s;
        }
        .input-style::placeholder { color: #d1d5db; }
        .input-style:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 2px rgba(249,115,22,0.4);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
