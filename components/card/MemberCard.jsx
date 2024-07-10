import React from "react";

const MemberCard = ({ title, icon }) => {
  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="bg-primary animate-fade-down text-white flex justify-center items-center py-16 px-20 rounded-lg">
        {icon}
      </div>
      <h2 className="animate-fade-up text-xl md:text-[30px] font-normal text-black text-center leading-normal">
        {title}
      </h2>
    </section>
  );
};

export default MemberCard;
