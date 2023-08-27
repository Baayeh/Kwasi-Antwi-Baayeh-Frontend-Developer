import React, { useState } from 'react';
import { FaCircleDot } from 'react-icons/fa6';

const FilterOptions = () => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  return (
    <div>
      <fieldset className="relative">
        <button
          type="button"
          title="Status"
          className="flex items-center"
          onClick={() => setIsStatusOpen(!isStatusOpen)}
        >
          <span>
            <FaCircleDot />
          </span>
          <span>Status</span>
        </button>
        {isStatusOpen && (
          <div className="absolute w-[10rem] bg-gray-700 p-3">Hello</div>
        )}
      </fieldset>
    </div>
  );
};

export default FilterOptions;
