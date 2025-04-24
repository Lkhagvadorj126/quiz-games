export default function Nav() {
  return (
    <div>
      <div className="bg-[#30304D] flex items-center justify-between gap-3 p-2 rounded-bl-[40px]">
        <h1 className="p-2 text-2xl text-white">Level:1</h1>
        <div className="flex items-center justify-center p-2 gap-3">
          <img className="w-[40px]" src="/coins.svg" alt="" />
          <div className="flex items-center flex-col justify-center p-3 gap-3">
            <h1 className="text-xl text-white">Coins</h1>
            <h1 className="text-xl text-white">0</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
