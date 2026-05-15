"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LogoutPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    window.dispatchEvent(new Event("authChange"));

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="container">
      <div
        className="hero-card"
        style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}
      >
        {/* Logout Icon */}
        <div style={{ fontSize: "80px", marginBottom: "1rem" }}>👋</div>

        <h1
          className="text-3xl font-bold"
          style={{ color: "#bbbdf6", marginBottom: "1rem" }}
        >
          Logged Out Successfully
        </h1>

        <p style={{ color: "#d1d5db", marginBottom: "0.5rem" }}>
          You have been successfully logged out of your account.
        </p>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "0.875rem",
            marginBottom: "2rem",
          }}
        >
          Redirecting to home page in {countdown} seconds...
        </p>

        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "rgba(187, 189, 246, 0.2)",
            borderRadius: "2px",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${(countdown / 3) * 100}%`,
              height: "100%",
              backgroundColor: "#7a5980",
              borderRadius: "2px",
              transition: "width 1s linear",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="button-primary">
            Go to Home Now
          </Link>
          <Link href="/login" className="button-secondary">
            Login Again
          </Link>
        </div>
      </div>
    </div>
  );
}
