export default function animePage() {
  return (
    <div className="min-h-[100vh] bg-[#EFECE6]">
      <div className="flex flex-col items-center justify-center gap-2 p-3">
        <div className="flex flex-col items-center justify-center gap-2 p-3">
          <div>
            <h1 className="text-2xl">Multiple Choose Questions</h1>
          </div>
          <img
            className="w-[500px] h-[300px] rounded-[10px]"
            src="https://preview.redd.it/it-has-to-be-said-egghead-is-the-worst-arc-in-one-piece-v0-jnlu5myqvy5d1.png?auto=webp&s=d93edee5f6dd03b3598a0efdf29481495cdc327f"
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
          <h1 className="text-2xl">What is the name of this anime?</h1>
        </div>
        <div className="flex items-center justify-evenly gap-2 p-3 flex-col">
          <div className="flex items-center justify-evenly gap-2 p-3 flex-col">
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Naruto 🦊🥷
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              Black Clower 📖⚔️
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              One Piece 🏴‍☠️🗺️
            </button>
            <button className="flex items-start justify-start py-3 px-6 w-[300px] text-xl rounded-[5px] bg-[#F8F7F2]">
              One Punch Man 🥊🦸‍♂️
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
