import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-[5vw]">
      <h1 className="my-8 text-7xl text-left font-bold text-zinc-700">Ascot Micro-Forest Connect</h1>

      <div className="flex">
        <div className="w-1/2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      

        </div>

        <div className="w-1/2">
          <Image 
            src="/splash/lsb.jpg"
            alt="photo of lmu life science building" 
            height={700} 
            width={1200}
            className="rounded-md"></Image>

        </div>
      </div>

     
    </div>
  );
}
