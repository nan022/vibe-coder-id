import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <Hero />
    </div>
  );
}
