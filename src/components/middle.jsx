import Image from 'next/image';
import middle1 from '../../public/middle1.jpeg'
import middle2 from '../../public/middle2.jpeg'

const Middle = () => {
    return ( 
    <section className="flex flex-col px-10 md:px-[140px]  w-full  pt-12">
        <p className="text-base md:hidden md:text-3xl mx-auto text-black">I am 16 px, Make sure I look the same</p>
        <p className="text-base hidden md:block 1921:hidden lg:text-3xl mx-auto text-black">I am 30 px, Make sure I look the same</p>
        <p className="text-base hidden 1921:block 1921:text-[40px] mx-auto text-black">I am 40 px, Make sure I look the same</p>
        
        <div className="flex flex-col mb-[55px] lg:flex-row gap-4 mt-[25px] lg:mt-[50px] ">
            <div className="w-full lg:w-1/2 aspect-square relative">
                
    <Image src={middle1.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' absolute'/>
            </div>
            <div className="w-full lg:w-1/2 aspect-square relative">
                
    <Image src={middle2.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' absolute'/>
            </div>
        </div>  
    </section> );
}
 
export default Middle;