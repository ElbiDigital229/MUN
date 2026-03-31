"use client";

import { useState } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Your Personal Virtual Tutor",
    description:
      "Creates personalized study plans, provides interactive lessons, and offers tools to monitor academic progress.",
  },
  {
    title: "Your Academic Advisor",
    description:
      "Assists in university selection through aptitude tests, admission simulations, and support for cover letter analysis.",
  },
  {
    title: "International Career Center (ICC)",
    description:
      "Optimizes CVs, identifies job opportunities, and prepares students for job interviews.",
  },
];

export default function CWAPlusSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#dce3ec]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-24 text-center">
        <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
          Change the world academy <em className="italic">Plus</em>
        </h2>
        <p className="text-primary/70 text-base mb-12">
          Because Changing the World Should Happen Anytime and Anywhere
        </p>

        {/* CWA Plus logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/logo-cwa-plus.png"
            alt="Change the World Academy Plus"
            width={200}
            height={96}
            className="h-24 w-auto"
          />
        </div>

        <p className="text-primary/70 text-base leading-relaxed max-w-3xl mx-auto">
          Change the World Academy Plus allows our students to continue their
          life-long learning journey beyond the CWMUN conferences. The platform
          combines the functionalities of LMS (Learning Management System) with
          advanced artificial intelligence tools, resulting in an innovative and
          personalized learning experience.
        </p>
      </div>

      {/* Feature cards + screenshot */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Feature cards */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <button
                key={feature.title}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left rounded-lg p-6 transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-primary shadow-sm hover:shadow-md"
                }`}
              >
                <h3
                  className={`text-xl font-light mb-2 ${
                    activeIndex === i ? "text-cta" : "text-primary"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    activeIndex === i ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Screenshot placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-6 min-h-[350px]">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Dashboard
            </div>
            <h4 className="text-primary font-bold text-lg mb-1">
              {activeIndex === 0
                ? "Study Plans"
                : activeIndex === 1
                  ? "University Match"
                  : "Career Goals"}
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              {activeIndex === 0
                ? "Your personalized learning path"
                : activeIndex === 1
                  ? "Find your perfect university"
                  : "Set and track your professional goals"}
            </p>

            {/* Mock UI */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                  <span className="text-sm text-gray-600">
                    {activeIndex === 0
                      ? "Active Courses"
                      : activeIndex === 1
                        ? "Active Applications"
                        : "Active Goals"}
                  </span>
                </div>
                <span className="text-xs bg-cta text-primary px-3 py-1 rounded-full font-medium">
                  {activeIndex === 0
                    ? "+ Add Course"
                    : activeIndex === 1
                      ? "+ Add University"
                      : "+ Add Goal"}
                </span>
              </div>

              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">
                    {activeIndex === 0
                      ? "Model United Nations Preparation"
                      : activeIndex === 1
                        ? "Sciences Po Paris"
                        : "Become a Senior Machine Learning Engineer"}
                  </span>
                  <span className="text-xs text-gray-400">
                    {activeIndex === 0
                      ? "⏱ Due 15/04/2026"
                      : activeIndex === 1
                        ? "⏱ Deadline 01/03/2026"
                        : "⏱ Due 31/12/2025"}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    activeIndex === 0
                      ? "Complete diplomatic protocol module"
                      : activeIndex === 1
                        ? "Complete aptitude assessment"
                        : "Complete Advanced ML Certification",
                    activeIndex === 0
                      ? "Practice resolution drafting"
                      : activeIndex === 1
                        ? "Write personal statement"
                        : "Build 3 production ML projects",
                    activeIndex === 0
                      ? "Review committee positions"
                      : activeIndex === 1
                        ? "Prepare for interview"
                        : "Contribute to open-source ML libraries",
                    activeIndex === 0
                      ? "Join mock debate session"
                      : activeIndex === 1
                        ? "Submit application"
                        : "Present at 2 ML conferences",
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          j === 1
                            ? "bg-primary border-primary"
                            : "border-gray-200"
                        }`}
                      >
                        {j === 1 && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          j === 1
                            ? "line-through text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
