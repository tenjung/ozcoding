import { ArrowUpDown, Palette, IdCard, Layers, MousePointerClick, PenTool, PlayIcon, Sparkle, Panda, Camera, TypeIcon, Gem, Brush, Heart, Eye } from "lucide-react";
import { Wallpaper } from "lucide-react";
import AppHeader from "./components/common/AppHeader";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";

function App() {
  const gallery = ["", "", "", "", ""];
  const categories = [
    { icon: Layers, label: "전체" },
    { icon: PlayIcon, label: "영상/모션그래픽" },
    { icon: Palette, label: "그래픽 디자인" },
    { icon: IdCard, label: "브랜딩/편집" },
    { icon: MousePointerClick, label: "UI/UX" },
    { icon: PenTool, label: "일러스트레이션" },
    { icon: Wallpaper, label: "일러스트레이션" },
    { icon: Sparkle, label: "AI" },
    { icon: Camera, label: "포토그래피" },
    { icon: Panda, label: "캐릭터" },
    { icon: TypeIcon, label: "타이포그래피" },
    { icon: Gem, label: "공예" },
    { icon: Brush, label: "파인아트" },
  ];
  const ContentList = [
    {
      id: 1,
      author: "Max Leiter",
      avatar: "https://github.com/maxleiter.png",
      fallback: "ML",
      views: 1234,
      likes: 123,
    },
    {
      id: 2,
      author: "Evil Rabbit",
      avatar: "https://github.com/evilrabbit.png",
      fallback: "ER",
      views: 5678,
      likes: 456,
    },
    {
      id: 3,
      author: "Shadcn",
      avatar: "https://github.com/shadcn.png",
      fallback: "SH",
      views: 9012,
      likes: 789,
    },
    {
      id: 4,
      author: "Vercel",
      avatar: "https://github.com/vercel.png",
      fallback: "VC",
      views: 3456,
      likes: 234,
    },
    {
      id: 5,
      author: "React",
      avatar: "https://github.com/reactjs.png",
      fallback: "RT",
      views: 7890,
      likes: 567,
    },
  ];
  return (
    <div className="w-full h-screen">
      {/* 배너 */}
      <div className="w-full h-15 flex items-center justify-center bg-[#4EABFF] text-xl font-semibold">
        <p className="text-white">레퍼런스로 시작하는 스몰 브랜드 브랜딩 워크숍</p>
      </div>
      {/* 자회사 링크 */}
      <div className="w-full h-[34px] flex items-center gap-3 px-8">
        <img src="" alt="" />
        <Separator orientation="vertical" className="h-3!" />
        <p className="text-sm font-medium">notefolio</p>
        <Separator orientation="vertical" className="h-3!" />
        <p className="text-sm text-neutral-400 font-bold">LOUD</p>
      </div>
      {/* 헤더 */}
      <AppHeader />
      <main>
        {/* 메인 홍보 갤러리 */}
        <section className="flex items-center gap-6 mt-6 overflow-x-scroll">
          {gallery.map(() => {
            return <Skeleton className="min-w-[520px] w-[520px] h-80 cursor-pointer" />;
          })}
        </section>

        <section className="flex items-center justify-center gap-6 py-16">
          {/* 메인 카테고리 메뉴 */}
          <div className="flex flex-col items-center">
            <ArrowUpDown size={30} />
            <span>정렬</span>
          </div>
          <Separator orientation="vertical" className="h-10!" />
          <div className="flex justify-center gap-12 min-w-0 overflow-x-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.label} className="flex flex-col items-center gap-1 cursor-pointer">
                  <IconComponent size={30} />
                  <span className="text-sm whitespace-nowrap">{category.label}</span>
                </div>
              );
            })}
          </div>
          <Separator orientation="vertical" className="h-10!" />
          <div className="flex flex-col items-center">
            <img src="src\assets\img-gyeonngi-do.png" alt="" />
            <span className="text-sm text-[#05bcc6]">경기도 AI 콘텐츠</span>
          </div>
        </section>
        {/* 메인컨텐츠 */}
        <section className="flex flex-wrap items-center justify-center gap-6 mt-6 pb-10">
          {ContentList.map((item) => (
            <div key={item.id} className="w-[300px]">
              {/* 메인 이미지 */}
              <Skeleton className="w-full h-70 rounded-lg cursor-pointer" />

              {/* 하단 정보 영역 */}
              <div className="mt-3 flex items-center justify-between">
                {/* 아바타/작성자 정보 */}
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.avatar} alt={item.author} />
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{item.author}</p>
                </div>

                {/* 조회수/좋아요 */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  {/* 조회수 */}
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  {/* 좋아요 */}
                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
