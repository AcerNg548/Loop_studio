"use client";
import Card from "./Card";
import CardMobile from "./CardMobile";
import deepEarth from "@/public/images/desktop/image-deep-earth.jpg";
import deepEarthM from "@/public/images/mobile/image-deep-earth.jpg";
import nightArcade from "@/public/images/desktop/image-night-arcade.jpg";
import nightArcadeM from "@/public/images/mobile/image-night-arcade.jpg";
import soccerTeam from "@/public/images/desktop/image-soccer-team.jpg";
import soccerTeamM from "@/public/images/mobile/image-soccer-team.jpg";
import grid from "@/public/images/desktop/image-grid.jpg";
import gridM from "@/public/images/mobile/image-grid.jpg";
import fromAbove from "@/public/images/desktop/image-from-above.jpg";
import fromAboveM from "@/public/images/mobile/image-from-above.jpg";
import pocketBorealis from "@/public/images/desktop/image-pocket-borealis.jpg";
import pocketBorealisM from "@/public/images/mobile/image-pocket-borealis.jpg";
import curiosity from "@/public/images/desktop/image-curiosity.jpg";
import curiosityM from "@/public/images/mobile/image-curiosity.jpg";
import fishEye from "@/public/images/desktop/image-fisheye.jpg";
import fishEyeM from "@/public/images/mobile/image-fisheye.jpg";

const OurCreation = () => {
  return (
    <div
      className="w-full relative text-Black mt-28
      mobile:flex mobile:flex-col mobile:items-center mobile:gap-6
      mobileBig:flex mobileBig:flex-col mobileBig:items-center mobileBig:gap-6
    "
    >
      <div
        className="w-full flex items-center justify-between
       mobile:flex-col mobileBig:flex-col
      "
      >
        <h3
          className="uppercase font-jose text-[38px]
        mobile:text-[32px] mobileBig:text-[32px]
        "
        >
          Our creations
        </h3>
        <button
          className="uppercase border tracking-[2px] text-[12px] border-Black px-6 py-1
        hover:text-OffWhite hover:border-none hover:bg-Black
        mobile:hidden mobileBig:hidden
        "
        >
          see all
        </button>
      </div>
      <div
        className="w-full mt-20 grid grid-cols-4 gap-4
       mobile:hidden mobileBig:hidden
      "
      >
        <Card image={deepEarth} titleT="deep" titleB="earth" />
        <Card image={nightArcade} titleT="night" titleB="arcade" />
        <Card image={soccerTeam} titleT="soccer" titleB="team vr" />
        <Card image={grid} titleT="the" titleB="grid" />
        <Card image={fromAbove} titleT="from up" titleB="above vr" />
        <Card image={pocketBorealis} titleT="pocket" titleB="borealis" />
        <Card image={curiosity} titleT="the" titleB="curiosity" />
        <Card image={fishEye} titleT="make it" titleB="fisheye" />
      </div>
      <div className="desktop:hidden flex flex-col gap-6">
        <CardMobile image={deepEarthM} titleT="deep" titleB="earth" />
        <CardMobile image={nightArcadeM} titleT="night" titleB="arcade" />
        <CardMobile image={soccerTeamM} titleT="soccer" titleB="team vr" />
        <CardMobile image={gridM} titleT="the" titleB="grid" />
        <CardMobile image={fromAboveM} titleT="from up" titleB="above vr" />
        <CardMobile image={pocketBorealisM} titleT="pocket" titleB="borealis" />
        <CardMobile image={curiosityM} titleT="the" titleB="curiosity" />
        <CardMobile image={fishEyeM} titleT="make it" titleB="fisheye" />
      </div>

      <button
        className="uppercase border tracking-[2px] text-[10px] border-Black px-8 py-2
        hover:text-OffWhite hover:border-none hover:bg-Black
        desktop:hidden 
        "
      >
        see all
      </button>
    </div>
  );
};

export default OurCreation;
