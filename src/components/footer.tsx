import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex shrink-0 items-center justify-between bg-[#DAE1DA] px-8 py-4 text-gray-900">

      <div className="">
        <p className="text-sm font-medium"> 
          All Rights Reserved
        </p>
        <p className="text-sm font-medium">
          © 2026 Demian A. Willette
        </p>
      </div>
      

      <div className="">
        <p className="my-2 font-bold">Micro-Forest Connect is supported by</p>
        <div className="flex items-center justify-end gap-8">
          <Image
            src="/logos/lmulogo.png"
            alt="LMU logo"
            width={320}
            height={120}
            className="h-12 w-auto object-contain"
            sizes="(max-width: 768px) 40vw, 200px"
          />
          <Image
            src="/logos/willettelablogo.png"
            alt="Demian Willette Lab logo"
            width={320}
            height={120}
            className="h-12 w-auto object-contain"
            sizes="(max-width: 768px) 40vw, 200px"
          />
        </div>
        

      </div>
    </footer>
  );
}
