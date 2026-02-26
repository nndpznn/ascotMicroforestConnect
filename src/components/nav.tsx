import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-[#226E18] px-6 py-8 text-white">
      <div className="font-medium">
        <Link href="/"><p className="font-bold">Home</p></Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/map"><p className="font-bold">Map</p></Link>
        <Link href="/allforests"><p className="font-bold">Forests</p></Link>
        <Link href="/aboutus"><p className="font-bold">About</p></Link>
        <Link href="/contact"><p className="font-bold">Contact</p></Link>
      </div>
    </nav>
  );
}
