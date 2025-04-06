import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24">
        {/* Upper placeholder text (if needed) */}
        <p className="font-general text-sm uppercase md:text-[10px]"></p>

        {/* Title */}
        <AnimatedTitle
          title="H<b>ow</b>topl<b>ay</b>"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />

        {/* Main content row: Left game, image, Right game */}
        <div className="relative mt-10 flex flex-col items-center justify-center gap-10 md:flex-row">
          {/* Left game: VRTopia */}
          <div className="flex flex-col items-center md:items-end text-white text-2xl space-y-4">
            <h2 className="text-3xl font-bold mb-4">VRTopia</h2>
            <p className="flex items-center">
              <span className="mr-2">🤚</span> Left Palm - Forward
            </p>
            <p className="flex items-center">
              <span className="mr-2">👊</span> Left Fist - Backward
            </p>
            <p className="flex items-center">
              <span className="mr-2">🖐️</span> Right Palm - Prime Attack
            </p>
            <p className="flex items-center">
              <span className="mr-2">✊</span> Right Fist - Shield
            </p>
            <p className="flex items-center">
              <span className="mr-2">✌️</span> Right Peace Sign - Heal
            </p>
            <p className="flex items-center">
              <span className="mr-2">👌</span> Right OK - Ultimate Ability
            </p>
            <a
              href="VRTopia.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Download VRTopia APK
            </a>
          </div>

          {/* Image container */}
          <div className="relative max-w-[600px]">
            <img
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseLeave}
              onMouseEnter={handleMouseLeave}
              src="/img/entrance.webp"
              alt="entrance"
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Right game: mazeVR */}
          <div className="flex flex-col items-center md:items-start text-white text-2xl space-y-4">
            <h2 className="text-3xl font-bold mb-4">mazeVR</h2>
            <p className="flex items-center">
              <span className="mr-2">🤚</span> Left Palm - Forward
            </p>
            <p className="flex items-center">
              <span className="mr-2">👊</span> Left Fist - Backward
            </p>
            <p className="flex items-center">
              <span className="mr-2">🖐️</span> Right Palm - Rotate Right
            </p>
            <p className="flex items-center">
              <span className="mr-2">✊</span> Right Fist - Rotate Left
            </p>
            <a
              href="mazeVr.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Download mazeVR APK
            </a>
          </div>
          
        </div>

        {/* Optional description & button below the image */}
        <div className="mt-16 flex w-full justify-center md:justify-end md:pr-24">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              {/* Optional description here */}
            </p>
            {/* Optionally include a button here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
