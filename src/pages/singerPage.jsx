export default function singerPage() {
  return (
    <div className="min-h-[100vh] bg-[#EFECE6]">
      <div className="flex flex-col items-center justify-center gap-2 p-3">
        <div className="flex flex-col items-center justify-center gap-2 p-3">
          <div>
            <h1 className="text-2xl">Multiple Choose Questions</h1>
          </div>
          <img
            className="w-[500px] h-[300px] rounded-[10px]"
            src="https://www.billboard.com/wp-content/uploads/2024/06/Eminem-press-credit-Travis-Shinn-2024-billboard-1548.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <img className="w-[20px]" src="/award.svg" alt="" />
          <h1 className="text-2xl">Question:1/5</h1>
        </div>
        <div>
          <h1 className="text-2xl">What is the name of this anime?</h1>
        </div>
        <div className="flex items-center justify-evenly gap-2 p-3 flex-col">
          <div className="flex items-center justify-evenly gap-2 p-3 flex-col">
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Homer
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              William Shakespeare
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Laozi
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Vyasa
            </button>
          </div>
          <div>
            <button className="py-3 px-6 w-[300px] text-2xl text-white rounded-[5px] bg-[#30304D]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
