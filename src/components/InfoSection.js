import React from 'react';

const InfoSection = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className="py-16 bg-green-500 text-center rounded-md w-9/12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 quicksand">Did You Know?</h2>
        <p className="text-lg">
          Landfills are the third-largest source of methane emissions. Reducing waste, composting, and recycling can make a huge difference.
        </p>
      </div>
    </div>
    </div>
  );
};

export default InfoSection;
