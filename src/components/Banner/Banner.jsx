import React from 'react';
import image1 from '../../assets/vector1.png'
import image2 from '../../assets/vector2.png'

const Banner = ({inProgress,inResolved,}) => {
    return (
        <div className="md:flex justify-between text-center items-center text-white max-w-[1220px] mx-auto mb-5">

            <div className="m-2 relative md:w-[570px] h-[250px] rounded-lg mt-5 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)]">
                <img src={image1} className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-full" />
                <img src={image2} className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-full" />
                <div className="relative z-10 pt-20">
                    <h2 className="text-xl">In-Progress</h2>
                    <span className="text-3xl font-bold pt-3">{inProgress}</span>
                </div>
            </div>

            <div className="m-2 relative md:w-[570px] h-[250px] rounded-lg mt-5 bg-gradient-to-r from-[rgba(84,207,103.68,1)] to-[rgba(0,130,122.2,1)]">
                <img src={image1} className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-full" />
                <img src={image2} className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-full" />
                <div className="relative z-10 pt-20">
                    <h2 className="text-xl">Resolved</h2>
                    <span className="text-3xl font-bold pt-3">{inResolved}</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;