"use client";

import React from "react";
import { FaLeaf, FaFire } from "react-icons/fa";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3c6e38] to-[#d8e3a6] flex flex-col items-center justify-center text-[#084C20]">
      <h1 className="text-5xl font-extrabold text-center mb-12">Explore Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Flora & Fauna Section */}
        <Link href="/features/florafauna/form" passHref>
          <div className="relative group cursor-pointer">
            <div className="relative p-8 bg-white rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:scale-105">
              <div className="relative z-10 flex flex-col items-center text-center">
                <FaLeaf className="text-6xl text-[#6DBE47] mb-4 animate-spin-slow" />
                <h2 className="text-3xl font-bold mb-4">Flora & Fauna</h2>
                <p className="text-lg text-gray-600">
                  Dive into the world of plants and animals. Learn about their
                  habitats, significance, and conservation efforts.
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Wildfire Section */}
        <Link href="/features/wildfire/camera" passHref>
          <div className="relative group cursor-pointer">
            <div className="relative p-8 bg-white rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:scale-105">
              <div className="relative z-10 flex flex-col items-center text-center">
                <FaFire className="text-6xl text-[#FF6B6B] mb-4 animate-pulse" />
                <h2 className="text-3xl font-bold mb-4">Wildfire</h2>
                <p className="text-lg text-gray-600">
                  Discover the causes and impact of wildfires. Learn how we can
                  detect and mitigate them effectively.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
