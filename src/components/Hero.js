import React from 'react';
import Pretty from '../assets/pretty.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return ( <section className='bg-pink-200 h-[647px] bg-hero 
  bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>Nouvelle Tendance
        </div>
        {/* title */}
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
          LES MEILLEURS PRODUITS SONT ICI <br/>
          <span className='font-semibold'>POUR TOUS</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-bold border-b-2 border-primary'>En savoir plus</Link>
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
