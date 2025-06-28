// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link, useLoaderData } from "react-router";
import { GoDotFill } from "react-icons/go";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const LiveButton = ({ liveLink }) => (
  <a
    href={liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group"
  >
    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500/10 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500/10 rounded-full blur-md"></span>
      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400/30 rounded-full blur-md"></span>
    </span>
    <span className="relative text-white z-10">Live</span>
  </a>
);

const RepoButton = ({ repoLink }) => (
  <a
    href={repoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group"
  >
    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-rose-500/10 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-rose-500/10 rounded-full blur-md"></span>
      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-purple-400/30 rounded-full blur-md"></span>
    </span>
    <span className="relative text-white z-10">Repo</span>
  </a>
);

const DetailsButton = ({ to }) => (
  <Link
    to={to}
    className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group"
  >
    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-teal-500/10 rounded-full blur-md ease"></span>
    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
      <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500/10 rounded-full blur-md"></span>
      <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-yellow-300/30 rounded-full blur-md"></span>
    </span>
    <span className="relative text-white z-10">Back to Projects</span>
  </Link>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = useLoaderData();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center flex flex-col items-center justify-center gap-6 text-blue-500 font-bold text-xl mt-10">
        <img src="/empty.svg" className="w-40" alt="" />
        Project not found!
        <span>
          <DetailsButton to="/" />
        </span>
      </div>
    );
  }

  const { details, liveLink, repoLink, bestFeatures, badge, images } = project;

  return (
    <div
      className="container mx-auto p-8  max-w-7xl w-full
                    bg-gradient-to-r from-blue-900/20 to-green-950/20
                    rounded-lg shadow-lg overflow-hidden space-y-6 px-5 roboto text-gray-300"
    >
      <div>
        {/* Carousel here */}
        {images && images.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-md"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Project Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-blue-300">
        {project.title}
      </h1>
      <p className="text-base mb-6 text-gray-300">{project.description}</p>

      {/* About Section */}
      <div className="bg-white/5 p-6 rounded-lg shadow-inner">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
          About the Project
        </h2>
        <p className="text-base text-gray-300">{details.about}</p>
      </div>

      {/* Key Features Section */}
      {bestFeatures && bestFeatures.length > 0 && (
        <div className="bg-white/5 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
            Key Features
          </h2>
          <ul className="list-none space-y-1">
            {bestFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-1 text-blue-300/60 text-sm"
              >
                <GoDotFill /> {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Detailed Features */}
      {details.features && (
        <div className="bg-white/5 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
            Comprehensive Features
          </h2>
          <p className="text-base text-gray-300">{details.features}</p>
        </div>
      )}

      {/* Areas for Improvement */}
      {details.improvement && (
        <div className="bg-white/5 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
            Areas for Improvement
          </h2>
          <p className="text-base text-gray-300">{details.improvement}</p>
        </div>
      )}

      {/* Challenges Faced */}
      {details.challenges && (
        <div className="bg-white/5 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
            Challenges Faced
          </h2>
          <p className="text-base text-gray-300">{details.challenges}</p>
        </div>
      )}

      {/* Key Packages */}
      {details.packages && details.packages.length > 0 && (
        <div className="bg-white/5 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
            Key Packages/Dependencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {details.packages.map((pkg, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-white/20 text-gray-300 hover:scale-105 cursor-pointer text-xs font-semibold rounded-full"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tech Badges */}
      {badge && badge.length > 0 && (
        <div className="bg-white/5 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-300">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {badge.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-white/20 text-gray-300 hover:scale-105 cursor-pointer text-xs font-semibold rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
        {liveLink && <LiveButton liveLink={liveLink} />}
        {repoLink && <RepoButton repoLink={repoLink} />}
        <DetailsButton to="/" />
      </div>
    </div>
  );
};

export default ProjectDetails;
