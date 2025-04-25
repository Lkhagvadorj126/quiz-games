import Link from "next/link";
import Nav from "./Nav";

export default function Select() {
  return (
    <div className="min-h-[100vh] w-full rounded-tl-lg bg-[#EFECE6]">
      <div>
        <div>
          <Nav />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-3 ">
          <div className="flex items-center justify-between gap-3 p-3  w-[350px]">
            <h1 className=" text-xl">Explore Quizzes</h1>
            <Link className="text-xl" href="/rulesPage">Rules</Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-2">
            <div className="flex items-center justify-center gap-3 p-2">
              <h1></h1>
              <Link
                className=" bg-[#F8F7F2] w-[180px] h-[180px] flex items-center justify-center gap-3 rounded-[10px]"
                href="/actorPage"
              >
                <div className="flex flex-col items-center justify-center gap-1 p-2">
                  <h1 className=" text-4xl">🎥</h1>
                  <h1 className=" text-2xl">Actors</h1>
                </div>
              </Link>
              <Link
                className=" bg-[#F8F7F2] w-[180px] h-[180px] flex items-center justify-center gap-3 rounded-[10px]"
                href="/animePage"
              >
                <div className="flex flex-col items-center justify-center gap-1 p-2">
                  <h1 className=" text-4xl">🎌</h1>
                  <h1 className=" text-2xl">Anime</h1>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3 p-2">
              <h1></h1>
              <Link
                className=" bg-[#F8F7F2] w-[180px] h-[180px] flex items-center justify-center gap-3 rounded-[10px]"
                href="/gamePage"
              >
                <div className="flex flex-col items-center justify-center gap-1 p-2">
                  <h1 className=" text-4xl">🎮</h1>
                  <h1 className=" text-2xl">Games </h1>
                </div>
              </Link>
              <Link
                className=" bg-[#F8F7F2] w-[180px] h-[180px] flex items-center justify-center gap-3 rounded-[10px]"
                href="/singerPage"
              >
                <div className="flex flex-col items-center justify-center gap-1 p-2">
                  <h1 className=" text-4xl">🎤</h1>
                  <h1 className=" text-2xl">Singer</h1>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3 p-2">
              <h1></h1>
              <Link
                className=" bg-[#F8F7F2] w-[180px] h-[180px] flex items-center justify-center gap-3 rounded-[10px]"
                href="/sportPage"
              >
                <div className="flex flex-col items-center justify-center gap-1 p-2">
                  <h1 className=" text-4xl">🏀</h1>
                  <h1 className=" text-2xl">Sports </h1>
                </div>
              </Link>
              <Link
                className=" bg-[#F8F7F2] w-[180px] h-[180px] flex items-center justify-center gap-3 rounded-[10px]"
                href="/authorPage"
              >
                <div className="flex flex-col items-center justify-center gap-1 p-2">
                  <h1 className=" text-4xl">✍️</h1>
                  <h1 className=" text-2xl">Author</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
