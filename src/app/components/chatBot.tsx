"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  links?: { text: string; url: string }[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your space assistant. I can help you find space photos, articles, and information. What would you like to explore today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("recent picture") ||
      lowerMessage.includes("recent photo") ||
      lowerMessage.includes("latest photo")
    ) {
      return {
        id: Date.now(),
        text: "Here are the most recent space photos:",
        isUser: false,
        links: [
          { text: "View Recent Photos", url: "/recent-photos" },
          { text: "Daily Space Photo", url: "/" },
        ],
      };
    }

    if (
      lowerMessage.includes("recent article") ||
      lowerMessage.includes("latest article") ||
      lowerMessage.includes("news")
    ) {
      return {
        id: Date.now(),
        text: "Check out these recent space articles:",
        isUser: false,
        links: [
          { text: "Recent Articles", url: "/recent-articles" },
          { text: "Featured Article", url: "/article/1" },
        ],
      };
    }

    if (lowerMessage.includes("mars")) {
      return {
        id: Date.now(),
        text: "Here's some information about Mars:",
        isUser: false,
        links: [
          { text: "Mars Photos", url: "/search?q=mars" },
          { text: "Mars Articles", url: "/recent-articles" },
          { text: "NASA Mars Mission", url: "https://mars.nasa.gov/" },
        ],
      };
    }

    if (lowerMessage.includes("jupiter")) {
      return {
        id: Date.now(),
        text: "Here's some information about Jupiter:",
        isUser: false,
        links: [
          { text: "Jupiter Photos", url: "/search?q=jupiter" },
          {
            text: "Juno Mission",
            url: "https://www.nasa.gov/mission_pages/juno/main/index.html",
          },
        ],
      };
    }

    if (lowerMessage.includes("login") || lowerMessage.includes("sign in")) {
      return {
        id: Date.now(),
        text: "You can log in to your account here:",
        isUser: false,
        links: [{ text: "Go to Login Page", url: "/login" }],
      };
    }

    if (
      lowerMessage.includes("help") ||
      lowerMessage.includes("what can you do")
    ) {
      return {
        id: Date.now(),
        text: "I can help you with:\n• Finding recent space photos\n• Reading latest space articles\n• Information about planets (Mars, Jupiter)\n• Navigating to different pages\n• Logging into your account\n\nWhat would you like to explore?",
        isUser: false,
      };
    }

    return {
      id: Date.now(),
      text: "I can help you find recent space photos, articles, or information about planets like Mars and Jupiter. Try asking me something like 'Show me recent photos' or 'Tell me about Mars'!",
      isUser: false,
    };
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages((prev) => [...prev, response]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#7a5980",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.backgroundColor = "#9b73a3";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.backgroundColor = "#7a5980";
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "380px",
            height: "500px",
            backgroundColor: "#2a2a42",
            borderRadius: "12px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            border: "1px solid rgba(187, 189, 246, 0.2)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#3b3b58",
              borderBottom: "1px solid #7a5980",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "24px" }}>🚀</span>
            <div>
              <h3 style={{ color: "#bbbdf6", margin: 0, fontSize: "1rem" }}>
                Space Assistant
              </h3>
              <p style={{ color: "#d1d5db", margin: 0, fontSize: "0.75rem" }}>
                Online • Ready to help
              </p>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent: message.isUser ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "0.75rem",
                    borderRadius: "12px",
                    backgroundColor: message.isUser ? "#7a5980" : "#3b3b58",
                    color: message.isUser ? "white" : "#e0e0e0",
                    border: message.isUser
                      ? "none"
                      : "1px solid rgba(187, 189, 246, 0.2)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {message.text}
                  </p>
                  {message.links && (
                    <div
                      style={{
                        marginTop: "0.75rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {message.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href={link.url}
                          style={{
                            color: message.isUser ? "#bbbdf6" : "#9b73a3",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            display: "inline-block",
                          }}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.text} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "0.75rem",
                    borderRadius: "12px",
                    backgroundColor: "#3b3b58",
                    display: "flex",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#bbbdf6",
                      animation: "bounce 1.4s infinite ease-in-out both",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#bbbdf6",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "-0.32s",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#bbbdf6",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "-0.16s",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              padding: "1rem",
              borderTop: "1px solid rgba(187, 189, 246, 0.2)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about space..."
              style={{
                flex: 1,
                padding: "0.5rem 0.75rem",
                backgroundColor: "#3b3b58",
                border: "1px solid #7a5980",
                borderRadius: "8px",
                color: "white",
                fontFamily: "inherit",
                fontSize: "0.875rem",
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#7a5980",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                opacity: isLoading || !input.trim() ? 0.5 : 1,
                transition: "all 0.2s ease",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
