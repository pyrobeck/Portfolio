// Import required components and assets
import React from 'react';

const Home = () => {
 return (
   // Main container - full screen with dark background
   <div name="home" className="h-screen w-full bg-[#0a192f]">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center h-full">
         {/* Main headline */}
         <h2 className="text-4xl sm:text-7xl font-bold text-white">
           I'm a Full Stack Web Developer
         </h2>
         {/* Brief introduction */}
         <p className="text-gray-500 py-4 max-w-md">
           I have 4 years of experience in graphics design and web development.
           Currently, I love to work on web application using technologies like
           React, Tailwind, Next.js and Mongodb.
         </p>
       </div>
       {/* Right side - Profile image */}
       <div>
         <img
           alt="my profile"
           className="rounded-2xl mx-auto w-2/3 md:w-full"
         />
       </div>
     </div>
   </div>
 );
};

export default Home;
