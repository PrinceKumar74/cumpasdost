import React, { useEffect, useState } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    const target = targetDate.getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/\S+@\S+\.\S+/.test(email)) {
      setStatus("You're on the list! 🎉");
      setEmail("");
    } else {
      setStatus("Please enter a valid email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full cd-gradient blur-3xl opacity-20" />
        <div className="absolute -bottom-24 left-1/2 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,var(--cd-accent3),var(--cd-accent2))] blur-3xl opacity-10" />
      </div>

      <div className="cd-card p-8 rounded-3xl shadow-lg max-w-lg w-full text-center relative">
        <p className="cd-gradient-text text-xs font-semibold uppercase tracking-wider mb-3">Coming soon</p>
        <h1 className="text-3xl font-bold mb-4 text-[var(--cd-text)]">We’re Launching Soon</h1>
        <p className="text-[var(--cd-muted)] mb-6">Sign up to get notified when we go live.</p>

        <div className="flex justify-center gap-4 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 cd-input"
            required
          />
          <button
            type="submit"
            className="cd-gradient text-white px-5 py-3 rounded-xl hover:opacity-95 transition shadow-lg shadow-indigo-600/15"
          >
            Notify Me
          </button>
        </form>

        {status && <p className="mt-3 text-sm text-[var(--cd-muted)]">{status}</p>}
      </div>
    </div>
  );
}
