"use client";
import Image from "next/image";
import vrGuy from "../../public/images/desktop/image-interactive.jpg";
import vrGuyM from "../../public/images/mobile/image-interactive.jpg";
import OurCreation from "./OurCreation";

const Content = () => {
  return (
    <div
      className="w-full p-28 bg-OffWhite flex flex-col
    mobile:p-6 
    mobileBig:p-6
    "
    >
      <div
        className="w-full relative
        mobile:flex mobile:flex-col 
        mobileBig:flex mobileBig:flex-col 
      "
      >
        <Image
          src={vrGuy}
          alt="vrGuy"
          className="mobile:hidden mobileBig:hidden"
          priority
        />
        <Image
          src={vrGuyM}
          alt="vrGuy"
          className="desktop:hidden z-50"
          priority
        />
        <div
          className="absolute w-[50%] right-4 bottom-0 bg-OffWhite pl-24 pt-24 flex flex-col gap-16
          mobile:w-full mobile:right-0 mobile:bg-none mobile:!p-0 mobile:gap-2 mobile:relative mobile:mt-6
          mobileBig:w-full mobileBig:right-0 mobileBig:bg-none mobileBig:!p-0 mobileBig:gap-2 mobileBig:relative mobileBig:mt-6
        "
        >
          <h2
            className="uppercase font-jose text-[50px] leading-[52px] 
          mobile:text-[32px] mobile:leading-[30px] mobile:text-center
          mobileBig:text-[32px] mobileBig:leading-[30px] mobileBig:text-center
            "
          >
            The leader in interactive VR
          </h2>
          <p
            className="text-[16px] leading-[24px] text-DarkGray
          mobile:text-[16px]  mobile:text-center
          mobileBig:text-[16px]  mobileBig:text-center
          "
          >
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <OurCreation />
    </div>
  );
};

export default Content;
