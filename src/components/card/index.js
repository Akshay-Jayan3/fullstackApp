import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 

const Card = ({ kitName, price, description, features, bgColor}) => {
   
  return (
    <div className={`max-w-64 p-6 border-2 border-gray-500 hover:border-black hover:shadow-[0_4px_0_black] rounded-xl`}  style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 pb-4 border-b border-b-gray-950">
          <p className="font-extrabold font-poppins">
            {kitName}
          </p>
          <div>
            <p className="text-4xl font-extrabold font-poppins">{price}</p>
          </div>
          <p className="text-sm h-24">
            {description}
          </p>
          <button className="p-3 bg-[#1E1E1E] rounded-lg text-white text-sm font-bold">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="p-2">
            <p className="text-xs mb-2">what's included</p>
            <div className="flex flex-col gap-1">
              {features?.map((feature) => (
                <div className="flex text-sm items-center gap-2"><FontAwesomeIcon icon={faCircleCheck} width={16} height={16}/><p>{feature}</p></div>
              ))}
            </div>
          </div>

          <button className="p-3 bg-white rounded-lg text-[#1E1E1E] text-sm border border-gray-950 font-bold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
