import React, { useState } from "react";
import GooeyNav from "@/components/reactBits/GooeyNav";
import SplitText from "@/components/reactBits/SplitText";
import {
  educationData,
  experienceNavItems,
  workExperienceData,
} from "@/constant/workExperience";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedEducation, setSelectedEducation] = useState<number | null>(1);
  const [selectedWork, setSelectedWork] = useState<number | null>(1);

  // const handleTabChange = (index: number) => {
  //   setActiveTab(index)
  //   setSelectedEducation(null)
  //   setSelectedWork(null)
  //   console.log(index);
  // }

  console.log(selectedEducation);
  console.log(activeTab);

  return (
    <section
      id="experience"
      className="min-h-screen bg-sky-900 p-20 pt-35 pb-30"
    >
      <div className="flex justify-center mt-5 mb-7">
        <SplitText
          text="My Experience"
          className="text-5xl pb-3 font-bold text-sky-50 flex justify-center"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div className="flex justify-center mb-5">
        <GooeyNav
          items={experienceNavItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {activeTab === "education" ? (
          // Education Tab
          <>
            <h3 className="text-2xl font-bold text-sky-50 mb-6">
              Education History
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education List */}
              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    onClick={() => setSelectedEducation(edu.id)}
                    className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 ${
                      selectedEducation === edu.id
                        ? "bg-sky-50 text-sky-900 shadow-lg"
                        : "bg-sky-800 text-sky-50 hover:bg-sky-700"
                    }`}
                  >
                    <h4 className="text-xl font-semibold mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-lg mb-1">{edu.major}</p>
                    <p className="text-sm opacity-80">{edu.yearRange}</p>
                  </div>
                ))}
              </div>

              {/* Education Details */}
              <div className="bg-sky-50 rounded-4xl p-8">
                {selectedEducation ? (
                  (() => {
                    const edu = educationData.find(
                      (e) => e.id === selectedEducation
                    );
                    return edu ? (
                      <div>
                        <h3 className="text-2xl font-bold text-sky-900 mb-4">
                          {edu.institution}
                        </h3>
                        <div className="space-y-3 mb-6">
                          <p>
                            <span className="font-semibold">Major:</span>{" "}
                            {edu.major}
                          </p>
                          <p>
                            <span className="font-semibold">Years:</span>{" "}
                            {edu.yearRange}
                          </p>
                          <p>
                            <span className="font-semibold">Location:</span>{" "}
                            {edu.city}, {edu.country}
                          </p>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {edu.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-sky-900 mb-3">
                            Skills Acquired:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-sky-200 text-sky-800 rounded-full text-sm font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()
                ) : (
                  <div className="text-center text-gray-500 py-20">
                    <p className="text-lg">
                      Select an education item to view details
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          // Work Experience Tab
          <>
            <h3 className="text-2xl font-bold text-sky-50 mb-6">
              Work Experience
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Work Experience List */}
              <div className="space-y-4">
                {workExperienceData.map((work) => (
                  <div
                    key={work.id}
                    onClick={() => setSelectedWork(work.id)}
                    className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 ${
                      selectedWork === work.id
                        ? "bg-sky-50 text-sky-900 shadow-lg"
                        : "bg-sky-800 text-sky-50 hover:bg-sky-700"
                    }`}
                  >
                    <h4 className="text-xl font-semibold mb-2">
                      {work.company}
                    </h4>
                    <p className="text-lg mb-1">{work.position}</p>
                    <p className="text-sm opacity-80">{work.yearRange}</p>
                  </div>
                ))}
              </div>

              {/* Work Experience Details */}
              <div className="bg-sky-50 rounded-4xl p-8">
                {selectedWork ? (
                  (() => {
                    const work = workExperienceData.find(
                      (w) => w.id === selectedWork
                    );
                    return work ? (
                      <div>
                        <h3 className="text-2xl font-bold text-sky-900 mb-4">
                          {work.company}
                        </h3>
                        <div className="space-y-3 mb-6">
                          <p>
                            <span className="font-semibold">Position:</span>{" "}
                            {work.position}
                          </p>
                          <p>
                            <span className="font-semibold">Duration:</span>{" "}
                            {work.yearRange}
                          </p>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {work.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-sky-900 mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {work.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="text-gray-700">
                                    {responsibility}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    ) : null;
                  })()
                ) : (
                  <div className="text-center text-gray-500 py-20">
                    <p className="text-lg">
                      Select a work experience to view details
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;
