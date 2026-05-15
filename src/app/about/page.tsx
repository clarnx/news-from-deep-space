"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container">
      <div
        className="hero-card"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            style={{
              color: "#bbbdf6",
              marginBottom: "0.5rem",
              fontSize: "2.5rem",
            }}
          >
            About NFDS
          </h1>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              backgroundColor: "#7a5980",
              color: "white",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            News From Deep Space
          </div>
          <p style={{ color: "#d1d5db", fontSize: "1.125rem" }}>
            Your daily gateway to the wonders of the universe
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#bbbdf6",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          >
            🚀 Our Mission
          </h2>
          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
            NFDS (News From Deep Space) is dedicated to bringing the latest and
            most exciting discoveries from the cosmos directly to you. We
            believe that space exploration and astronomical discoveries should
            be accessible to everyone, regardless of their background or
            expertise.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
            Our mission is to inspire curiosity, foster learning, and share the
            breathtaking beauty of our universe through daily space content,
            breaking news, and in-depth articles about humanity's greatest
            adventures beyond Earth.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#bbbdf6",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          >
            🌟 What We Do
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                background: "rgba(59, 59, 88, 0.5)",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📰</div>
              <h3
                style={{
                  color: "#bbbdf6",
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                Daily Space News
              </h3>
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                Curated articles and breaking news from space agencies, research
                institutions, and space companies worldwide.
              </p>
            </div>

            <div
              style={{
                background: "rgba(59, 59, 88, 0.5)",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🪐</div>
              <h3
                style={{
                  color: "#bbbdf6",
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                Daily Space Photos
              </h3>
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                Stunning astronomical images captured by NASA, ESA, and other
                space observatories from around the globe.
              </p>
            </div>

            <div
              style={{
                background: "rgba(59, 59, 88, 0.5)",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔭</div>
              <h3
                style={{
                  color: "#bbbdf6",
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                Educational Content
              </h3>
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                In-depth articles explaining complex space phenomena in an
                accessible and engaging way for all learning levels.
              </p>
            </div>

            <div
              style={{
                background: "rgba(59, 59, 88, 0.5)",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🤖</div>
              <h3
                style={{
                  color: "#bbbdf6",
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                AI-Powered Assistant
              </h3>
              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                }}
              >
                Smart chatbot to help you find relevant space content and answer
                your questions about the cosmos.
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#bbbdf6",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          >
            💫 Why Choose NFDS?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "#7a5980",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                }}
              >
                ✓ Curated Content
              </p>
              <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                Hand-picked articles and images
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#7a5980",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                }}
              >
                ✓ Daily Updates
              </p>
              <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                Fresh content delivered every day
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#7a5980",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                }}
              >
                ✓ Free Access
              </p>
              <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                No subscription or payment required
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#7a5980",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                }}
              >
                ✓ User-Friendly
              </p>
              <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                Simple and intuitive interface
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#bbbdf6",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          >
            🌌 Our Vision
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
            We envision a world where everyone has access to the latest space
            discoveries and can share in the excitement of humanity's expansion
            into the cosmos. Whether you're a student, educator, space
            enthusiast, or just curious about the universe, NFDS is your trusted
            companion on this incredible journey of exploration.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#bbbdf6",
              marginBottom: "1rem",
              fontSize: "1.5rem",
            }}
          ></h2>
          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
            NFDS is powered by a passionate team of space enthusiasts, writers,
            and developers who are dedicated to making space exploration
            accessible to everyone. We work tirelessly to bring you the most
            accurate, up-to-date, and engaging space content from around the
            world.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem" }}>👨‍🚀</div>
              <p
                style={{
                  color: "#bbbdf6",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Space Writers
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem" }}>💻</div>
              <p
                style={{
                  color: "#bbbdf6",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Developers
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem" }}>🔬</div>
              <p
                style={{
                  color: "#bbbdf6",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Science Advisors
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            padding: "1.5rem",
            background: "rgba(122, 89, 128, 0.2)",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#bbbdf6", marginBottom: "0.5rem" }}>
            Ready to Explore the Universe?
          </h3>
          <p
            style={{
              color: "#d1d5db",
              marginBottom: "1rem",
              fontSize: "0.875rem",
            }}
          >
            Join us on our journey through the cosmos
          </p>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <Link href="/" className="button-primary">
              Start Exploring
            </Link>
            <Link href="/article" className="button-secondary">
              Read Daily Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
