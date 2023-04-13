import Image from 'next/image'
import { Jost } from 'next/font/google'
import Header from '@/components/header'
import Banner from '@/components/banner'
import Middle from '@/components/middle'
import Collection from '@/components/collection'
import Footer from '@/components/footer'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" flex min-h-screen w-full relative  bg-white flex-col ">
        <Header/>
        <Banner/>
        <Middle/>
        <Collection/>

        <Footer/>

        
    </main>
  )
}
