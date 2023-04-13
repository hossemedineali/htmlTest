
import Image from "next/image"
import collection1 from "../../public/collection1.jpeg"
import collection2 from "../../public/collection2.jpeg"
import collection3 from "../../public/collection3.jpeg"
import collection4 from "../../public/collection4.jpeg"

const Collection = () => {
    return ( 
    <section className="flex flex-col pb-[86px] lg:pb-[128px] text-black">
         <p className="text-base md:hidden md:text-3xl mx-auto text-black">THIS IS THE COLLECTION</p>
        <p className="text-base hidden md:block lg:text-3xl mx-auto text-black">THIS IS THE COLLECTION</p>

            <div className=" pl-[50px] mt-6 lg:mt-10 lg:px-[140px] relative " >
                    <div className="flex gap-4 lg:gap-5 w-full overflow-x-scroll relative pr-10 scroll-smooth scrollbar-hide">
                            <div className="relative w-[282px] max-lg:h-[357px]  aspect-collection11/14 lg:w-1/4 ">
                                 <Image src={collection1.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' absolute'/>
                            </div>
                            <div className="relative w-[282px] max-lg:h-[357px]  aspect-collection11/14 lg:w-1/4 ">
                                 <Image src={collection2.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' absolute'/>
                            </div>
                            <div className="relative w-[282px] max-lg:h-[357px]  aspect-collection11/14 lg:w-1/4 ">
                                 <Image src={collection3.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' absolute'/>
                            </div>
                            <div className="relative w-[282px] max-lg:h-[357px]   aspect-collection11/14 lg:w-1/4 ">
                                 <Image src={collection4.src} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{objectFit:'cover'}}
         fill  className=' absolute'/>
                            </div>
                    </div>  
            </div>

            <button className='mt-[38px] text-base lg:text- w-[256px] h-8 lg:w-[300px] lg:h-[42px] mx-auto border  lg:mt-[30px]'>See the collection</button>
    </section> );
}
 
export default Collection;