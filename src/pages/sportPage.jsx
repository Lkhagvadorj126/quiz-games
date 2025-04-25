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
            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Brasil_vence_a_Fran%C3%A7a_no_v%C3%B4lei_masculino_1037987-15.08.2016_ffz-6369.jpg"
            alt=""
          />
        </div>
          <div className="flex items-center justify-between  w-[350px] gap-3">
          <div className="flex items-center justify-between gap-3">
            <img className="w-[20px]" src="/award.svg" alt="" />
            <h1 className="text-2xl">Question:1/5</h1>
          </div>
          <div className="flex  items-center justify-between gap-3">
            <img className="w-[20px]" src="/clock.svg" alt="" />
            <h1 className="text-2xl">60</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl">What is the name of this sport?</h1>
        </div>
        <div className="flex items-center justify-evenly gap-2 p-3 flex-col">
          <div className="flex items-center justify-evenly gap-2 p-3 flex-col">
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Volleyball 🏐🤾‍♀️
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
             Handball 🏃‍♂️🥅
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
               Sepak Takraw 🦵🏐
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Table Tennis 🏓👁️‍🗨️
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
