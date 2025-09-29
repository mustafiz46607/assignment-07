import React from 'react';
import twitterX from '../../assets/icons/twiterX.png'
import facebook from '../../assets/icons/facebook.png'
import linkdin from '../../assets/icons/linkdin.png'
import support from '../../assets/icons/support.png'

const Footer = () => {
    return (
        <div className='w-full pt-5 px-10 pb-5 bg-black '>
            <div className=' md:grid grid-cols-5 gap-5 mb-5 mt-9 '>
                <div >
                    <h1 className='text-xl font-semibold pb-3 text-white'>CS — Ticket System</h1>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div >
                    <h2 className='text-xl font-semibold pb-3 text-white'>Company</h2>
                    <p className='text-sm text-[#a1a1aa] mb-3'>About Us</p>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Our Mission</p>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Contact Saled</p>
                </div>

                <div >
                    <h2 className='text-xl font-semibold pb-3 text-white'>Services</h2>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Products & Services</p>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Customer Stories</p>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Download Apps</p>
                </div>

                <div >
                    <h2 className='text-xl font-semibold pb-3 text-white'>Information</h2>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Privacy Policy</p>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Terms & Conditions</p>
                    <p className='text-sm text-[#a1a1aa] mb-3'>Join Us</p>
                </div>

                <div >
                    <h2 className='text-xl font-semibold pb-3 text-white'>Social Links</h2>
                    <div className='flex gap-2 items-center mb-3'>
                        <img src={twitterX} alt="" />
                        <p className='text-sm text-[#a1a1aa]'>@CS — Ticket System</p>
                    </div>
                    <div className='flex gap-2 items-center mb-3'>
                        <img src={linkdin} alt="" />
                        <p className='text-sm text-[#a1a1aa]'>@CS — Ticket System</p>
                    </div>
                    <div className='flex gap-2 items-center mb-3'>
                        <img src={facebook} alt="" />
                        <p className='text-sm text-[#a1a1aa]'>@CS — Ticket System</p>
                    </div>
                    <div className='flex gap-2 items-center mb-3'>
                        <img src={support} alt="" />
                        <p className='text-sm text-[#a1a1aa]'>support@cst.com</p>
                    </div>
                </div>
            </div>

            <hr />
            <div >
                <p className='text-center text-sm text-[#fafafa] mt-5'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>

        </div>



    );
};

export default Footer;