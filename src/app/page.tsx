import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Table from './components/Table'
import Testimonials from "./components/Testimonal";
export default function Home() {
  return (
    <div className="">
    <Header/>
    <Hero/>
    <Table/>
    <Testimonials/>
    </div>
  );
}
