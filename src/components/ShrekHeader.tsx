import Image from "next/image";
import { useState } from "react";

export function ShrekHead() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("Mouse entered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("Mouse left");
  };

  const textColorClass = isHovered ? "text-green-600" : "text-green-900";

  return (
    <>
      <div className="bg-green-300 flex flex-col items-center">
        <Image
          src="/images/shrek copy.jpg"
          alt="Shrek"
          width={230}
          height={230}
          className="rounded-full mt-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        />

        <div className="mt-4 font-bold text-4xl">
          <h1
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${textColorClass} transition duration-300`}
          >
            Welcome to Shrek&apos;s Swamp!
          </h1>
        </div>
      </div>
    </>
  );
}
