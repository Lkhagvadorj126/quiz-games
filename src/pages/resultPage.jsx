import Link from "next/link";

export default function resultPage() {
  return (
    <div className="min-h-[100vh] bg-[#30304D] flex items-center justify-center">
      <div className="flex flex-col items-center justify-between p-3 h-[450px] w-[300px] rounded-[10px] bg-[#F3EFEA]">
        <div>
          <h1 className="text-2xl">RESULT</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-3">
          <img className="w-[70px]" src="/trophy.svg" alt="" />
          <h1 className="text-3xl">Your Point:1</h1>
        </div>
        <div>
          <div className="flex items-center justify-between gap-3 p-3">
            <Link className="bg-[#FFFFFF] p-3 rounded-[8px]" href="/">Homepage</Link>
            <Link className="bg-[#30304D] text-white p-3 rounded-[8px]" href="/">Play Again</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
