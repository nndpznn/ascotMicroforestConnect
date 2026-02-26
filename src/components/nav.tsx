import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-[#226E18] px-8 py-4 text-white">
      <div className="font-medium">
        <Link href="/" className="flex items-center">
          <img src="/logos/singletree.svg" alt="ascot tree logo" className="h-20"></img>
          <div className="mx-4">
            <p className="font-bold text-3xl">Micro-Forest</p>
            <p className="font-bold text-3xl">Connect</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/map"><p className="font-bold text-lg">Map</p></Link>
        <Link href="/microforests"><p className="font-bold text-lg">Micro-Forests</p></Link>
        <Link href="/about"><p className="font-bold text-lg">About</p></Link>
        <Link href="/contact"><p className="font-bold text-lg">Contact</p></Link>
      </div>
    </nav>
  );
}
