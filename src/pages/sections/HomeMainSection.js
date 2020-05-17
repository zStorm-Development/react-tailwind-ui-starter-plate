import React from "react";
import { Link } from "react-router-dom";

export default function HomeMainSection() {
  return (
    <div>
      <div className=' bg-gray-50 relative overflow-hidden'>
        <div className='hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'>
          <div className='relative h-full max-w-screen-xl mx-auto'></div>
        </div>

        <div className='relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32'>
          <div className='max-w-screen-xl mx-auto px-4 sm:px-6'></div>

          <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-md'></div>
          </div>

          <div className='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28'>
            <div className='text-center'>
              <h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
                <span className='text-red-600'>Boiler Plate</span>
                <br className='xl:hidden' />
                for react and tailwind.
              </h2>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                <div className='rounded-md shadow'>
                  <Link
                    to='/'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'>
                    Get started
                  </Link>
                </div>
                <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                  <Link
                    to='/'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-600 bg-white hover:text-red-500 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'>
                    View Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
