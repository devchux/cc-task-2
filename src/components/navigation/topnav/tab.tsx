import React from "react";

const Tab: React.FC<{ src: string }> = ({ src }) => {
  return (
    <button className="w-10 h-10 inline-flex justify-center items-center border border-gallery bg-white rounded-lg shadow-[0px_4px_25px_0px_rgba(141,141,141,0.05)]">
      <img src={src} alt="" className="w-6 h-6" />
    </button>
  );
};

export default Tab;
