export default function MapPage() {
  return (
    <div className="mx-[5vw]">
      <div id="content" className="flex my-[5vh]">

        <div className="w-5/7 mx-3 h-[70vh]">
          <div id="blob1" className="bg-[#DAE1DA] rounded-md border w-full h-full"></div>
        </div>

        <div className="w-2/7 mx-3">
          <div id="blob2" className="bg-[#DAE1DA] rounded-md w-full h-full"></div>
        </div>

      </div>
    </div>
  );
}
