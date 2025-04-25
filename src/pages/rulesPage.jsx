import Link from "next/link";

export default function rulesPage() {
    return <div className="min-h-[100vh] bg-[#30304D] flex flex-col items-center justify-center gap-3 p-3">
        <div className="flex items-center justify-between gap-3 p-2  w-[350px]">
            <Link href="/">
                <img className="w-[20px]" src="/angle.svg" alt="" />
            </Link>
            <h1 className="text-3xl text-[#F0ECE6]" >Quiz Game Rules</h1>
        </div>
        <div className="w-[350px] border border-[#F0ECE6]"></div>
        <div>
            <h1 className="text-2xl text-[#F0ECE6]">🧩 Тоглоомын дүрэм: <br />
🎮 Товчлуур сонгох:
Тоглогч 6 товчлуурын аль нэгийг сонгоно.
<br />
❓ Асуулт илрэх:
Сонгосон товчлуурын цаана таван асуулт гарч ирнэ.  
<br />
✍️ Хариулах:
Тоглогч асуултад хариулна. Хариулт нь товч эсвэл сонголттой байж болно.
<br />
📊 Үр дүн харуулах:
Хариултад үндэслэн систем үнэлгээ, тайлбар, эсвэл оноо өгнө.</h1>
        </div>
    </div>
}