import React from 'react';
import Pretty from '../assets/pretty.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return ( 
    <section className='bg-[#f8f8b9] h-[560px] bg-hero 
      bg-no-repeat bg-cover bg-center py-24  px-5 md:px-0 mt-[-50px] md:mt-[0px]'>
        <div className='container mx-auto flex justify-around h-full'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            {/* pretitle */}
            <div className='font-semibold flex items-center uppercase'>
              <div className='w-10 h-[2px] bg-red-500 mr-3'></div>Nouvelle Tendance
            </div>
            {/* title */}
            <h1 className=' text-2xl md:text-[60px]  md:leading-[1.1] font-light mb-2 mt-5 md:mb-4'>
              PROFITEZ DE LA SIMPLICITE DU SHOPPING EN LIGNE <br/>
              <br/>
              <div className=' w-full md:block flex justify-center'> 
              <span className='font-semibold '>POUR TOUS</span>

              </div>
             
            </h1>
            <div className='md:block flex justify-center'> 
            <Link to={'/'} className='self-start uppercase font-bold border-b-2 border-primary text-[13px] text-blue-500'>En savoir plus</Link>
            </div>
       
          </div>
          {/* image */}
          <div className='hidden lg:block'>
            <img src={Pretty} alt='' />
          </div>
        </div>
      </section>
  );
};

export default Hero;
