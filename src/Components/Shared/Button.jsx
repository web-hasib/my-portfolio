import { useState } from 'react';

const Button = ({text,className}) => {
  const [shine, setShine] = useState(false);

  return (
      <div className="relative inline-block ">
      <button
        onMouseEnter={() => setShine(true)}
        onAnimationEnd={() => setShine(false)}
        className={`relative px-5 py-2 rounded-md border border-blue-500 text-white text-sm uppercase font-semibold tracking-widest bg-transparent overflow-hidden transition-all duration-200 ease-in hover:bg-blue-500 hover:shadow-[0_0_30px_5px_rgba(0,142,236,0.815)] active:shadow-none ${className}`}
      >
        <span
          className={`absolute top-[7%] left-0 h-[86%] w-0 bg-white opacity-0 transform -skew-x-[20deg] shadow-[0_0_50px_30px_white] ${shine ? 'shine-animation' : ''}`}
        ></span>
        {text? text : "Click Me"}
      </button>

      {/* Inline CSS for Shine Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            opacity: 0;
            left: 0%;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            left: 100%;
          }
        }

        .shine-animation {
          animation: shine 0.5s linear;
        }
      `}</style>
    </div>
  );
};

export default Button;
