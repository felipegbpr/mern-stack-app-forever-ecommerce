import React from 'react';

import Title from '../components/Title';
import {assets} from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Pellentesque eu rhoncus dui. Duis egestas felis et lacus varius, ut molestie ex maximus. Proin vel orci tellus. Sed volutpat tellus id dui vestibulum, sed molestie leo venenatis. Cras tincidunt tincidunt mi eu lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p>Integer facilisis odio vitae massa pretium ornare. Cras pulvinar elit sit amet tincidunt pharetra. Sed sed ipsum eget orci ultrices ultricies vitae congue ex. Nulla ullamcorper finibus orci sed dignissim. Fusce ligula est, faucibus consequat arcu et, placerat luctus ligula.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Curabitur id mollis nisl, vestibulum vestibulum ante. Integer sed ligula molestie, mattis neque et, lacinia nibh. Mauris sagittis nisl ac neque pharetra tincidunt. Proin egestas sollicitudin nibh, vitae dapibus mi iaculis id. Donec non porta mauris. Ut placerat mi a nunc aliquet, et sollicitudin dolor tincidunt.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Curabitur id mollis nisl, vestibulum vestibulum ante. Integer sed ligula molestie, mattis neque et, lacinia nibh. Mauris sagittis nisl ac neque pharetra tincidunt. Proin egestas sollicitudin nibh, vitae dapibus mi iaculis id. Donec non porta mauris. Ut placerat mi a nunc aliquet, et sollicitudin dolor tincidunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Phasellus ullamcorper, orci quis molestie dictum, ex massa pharetra sem, sit amet ultrices elit mauris id metus. Maecenas tristique elementum diam vel lobortis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Maecenas faucibus ipsum felis, ut vehicula risus scelerisque sed. Fusce dapibus, magna ut malesuada posuere, mi justo iaculis massa, vel molestie nisi tellus vitae turpis.</p>
        </div>
      </div>  
    </div>
  );
};

export default About;
