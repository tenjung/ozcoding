import { Separator } from "../ui";
import { ArrowUpDown, Palette, IdCard, Layers, MousePointerClick, PenTool, PlayIcon, Sparkle, Panda, Camera, TypeIcon, Gem, Brush, Wallpaper } from "lucide-react";

function AppStickyMenu() {
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

  return (
    <section className="sticky top-14  bg-white z-10 w-full flex items-center justify-center py-4 gap-6">
      <div className="hidden md:flex flex-col items-center whitespace-nowrap">
        <ArrowUpDown size={20} />
        <span>정렬</span>
      </div>
      <Separator orientation="vertical" className="h-10!" />
      <div className="flex justify-center gap-12 min-w-0 overflow-x-auto">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div key={category.label} className="flex flex-col items-center gap-1 cursor-pointer">
              <IconComponent size={20} />
              <span className="text-sm whitespace-nowrap">{category.label}</span>
            </div>
          );
        })}
      </div>
      <Separator orientation="vertical" className="h-10!" />
      <div className="flex flex-col items-center jusify-center whitespace-nowrap w-10 h-10">
        <img src="src\assets\img-gyeonngi-do.png" alt="" className="w-5 h-auto" />
        <span className="text-sm text-[#05bcc6]">AI 콘텐츠</span>
      </div>
    </section>
  );
}
export { AppStickyMenu };
