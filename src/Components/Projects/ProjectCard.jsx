// src/components/ResponsiveCard.jsx
import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


const ProjectCard = ({ project }) => {
  const { title, description, badge, liveLink, repoLink, id, images, bestFeatures } = project;

  return (
    <div className="card max-w-7xl text-sm bg-gradient-to-r from-blue-900/20 to-green-950/20 rounded-lg shadow-lg overflow-hidden p-4 m-10 w-full mx-auto space-y-6 px-5 roboto">
      <div className="flex flex-col md:flex-row gap-5">

        {/* Left Section: Carousel */}
        <div className="left-section hover:scale-101 hover:rounded-4xl bg-black/5 rounded-md flex-shrink-0 w-full h-full md:h-auto md:w-3/5">
          {images && images.length > 0 && (
           <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 3000, // slide changes every 3 seconds
    disableOnInteraction: false, // autoplay continues even when user interacts
  }}
  pagination={{ clickable: true }}
  loop={true} // slides will loop infinitely
  className="mySwiper rounded-md"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <img
        src={img}
        alt={`Project image ${index + 1}`}
        // className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-md"
        className="w-full h-full object-cover rounded-md"
      />
    </SwiperSlide>
  ))}
</Swiper>
          )}
        </div>

        {/* Right Section: Content */}
        <div className="right-section flex-grow md:w-2/5">
          <h2 className="text-lg md:text-xl lg:text-2xl text-blue-300 font-semibold mb-2">{title}</h2>
          <p className="text-sm md:text-balance mb-4">{description}</p>

          {bestFeatures && bestFeatures.length > 0 && (
            <ul className="list-none space-y-1 mb-4">
              {bestFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-1 text-blue-300/60 text-sm">
                  <GoDotFill /> {feature}
                </li>
              ))}
            </ul>
          )}

          {badge && badge.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {badge.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-white/20 text-gray-300 hover:scale-105 cursor-pointer text-xs font-semibold rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons Section */}
          <div className="flex gap-3">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500/10 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-green-500/10 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-400/30 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Live</span>
              </a>
            )}

            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-rose-500/10 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-rose-500/10 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-purple-400/30 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white z-10">Repo</span>
              </a>
            )}

            <Link to={`/projects/${id}`} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white/20 rounded-lg shadow-2xl group">
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-teal-500/10 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500/10 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-yellow-300/30 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white z-10">Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
