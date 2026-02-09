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
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl cd-card p-8">
        <h2 className="text-4xl font-bold text-[var(--cd-text)] text-center mb-2">
          Get in Touch
        </h2>
        <p className="text-[var(--cd-muted)] text-center mb-8">
          Let’s build something amazing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name *"
              required
              className="cd-input"
            />

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name *"
              required
              className="cd-input"
            />
          </div>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="cd-input"
          />

          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className="cd-input"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message *"
            required
            className="cd-input h-32 resize-none"
          />

          <label className="flex items-center gap-2 text-sm text-[var(--cd-muted)]">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-[var(--cd-accent)]"
            />
            I agree to the privacy policy *
          </label>

          <button
            disabled={isLoading}
            className="w-full py-4 rounded-xl font-semibold text-white cd-gradient shadow-lg shadow-indigo-600/15 hover:opacity-95 transition-all duration-300 disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm mt-3 text-[var(--cd-muted)]">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
