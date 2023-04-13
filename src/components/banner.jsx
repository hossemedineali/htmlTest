import Image from 'next/image';
import banner from '../../public/banner.jpeg'
import { useScroll, useTransform ,motion} from 'framer-motion';

const Banner = () => {
  const {scrollYProgress}=useScroll()
  const y=useTransform(scrollYProgress,[0,1],["0%","70%"])
    return ( 
    <section 
  //  style={{backgroundImage:`url(${banner.src})`,backgroundSize:'cover',backgroundPositionY:'top'}} 
    className="w-full relative flex overflow-hidden  aspect-square md:aspect-banner19/7  mt-[104px] md:mt-[100px] min-[1921px]:mt-[122px]">
  {/*   <div className='absolute md:block hidden left-0 right-0 bottom-0  -top-[50%]'>
        <Image src={banner.src} fill/>
    </div> */}

    <motion.div style={{y}} className='absolute top-0 left-0 right-0 bottom-0'>
    <Image  src={banner.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' '/>
    </motion.div>
    
   
<div  className='relative  my-auto w-full flex flex-col items-center justify-center  '>
<h1  className='text-[50px] md:text-[100px] 1921:text-[120px] lg:hidden'>I AM 50 PX</h1>
{/* <h1  className='text-[50px] md:text-[100px] 1921:text-[120px] hidden md:block'>I AM 100 PX</h1> */}
<h1  className='text-[50px] md:text-[100px] 1921:text-[120px] hidden lg:block 1921:hidden'>I AM 100 PX</h1>
<h1  className='text-[50px] md:text-[100px] 1921:text-[120px] hidden 1921:block'>I AM 120 PX</h1>
  <p className='text-lg md:text-xl xl:text-[28px] 1921:text-[36px]'>MAKE SURE WE LOOK THE SAME </p>
  <button className='bg-white text-black mt-[38px] w-[165px] h-[40px] lg:w-[238px] lg:h-[60px]  lg:text-[22px] 1921:text-[] 1921:w-[242px]  ' >
    SHOP NOW
  </button>      
</div>
    </section> );
}
 
export default Banner;