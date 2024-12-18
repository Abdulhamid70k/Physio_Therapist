import { MoveRight } from "lucide-react";

const GradientIcon = () => {
  return (
    <div className="p-1 rounded-full dark:bg-[#111827] flex items-center mr-4  justify-center">
      <div className="flex items-center justify-center bg-white dark:bg-[#111827]  rounded-full w-10 h-10">
        <svg
          className="w-8 h-8 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Light Mode Gradient */}
            <linearGradient id="gradientColorLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F52E98" />
              <stop offset="100%" stopColor="#F87D3B" />
            </linearGradient>
            
            {/* Dark Mode Gradient */}
            <linearGradient id="gradientColorDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6B9E" />
              <stop offset="100%" stopColor="#FFA05C" />
            </linearGradient>
          </defs>
          <MoveRight
            stroke="url(#gradientColorLight)"
            className="dark:stroke-[url(#gradientColorDark)]"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default GradientIcon;