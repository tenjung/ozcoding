import { Separator } from "../ui";
import { ArrowUpDown, Brush, Camera, CirclePlay, Gem, IdCard, Layers, MousePointerClick, Package, Palette, Panda, PenTool, Sparkles, Type } from "lucide-react";

function AppStickyMenu({ onSetCategory }) {
    const categories = [
        {
            icon: Layers,
            label: "전체",
            isActive: true, // 라벨 색상 통제를 위한 속성
            value: "korea", // default 값이 korea라고 가정
        },
        {
            icon: CirclePlay,
            label: "영상/모션그래픽",
            isActive: false,
            value: "video",
        },
        {
            icon: Palette,
            label: "그래픽 디자인",
            isActive: false,
            value: "graphic-design",
        },
        {
            icon: IdCard,
            label: "브랜딩/편집",
            isActive: false,
            value: "brand",
        },
        {
            icon: MousePointerClick,
            label: "UI/UX",
            isActive: false,
            value: "ui",
        },
        {
            icon: PenTool,
            label: "일러스트레이션",
            isActive: false,
            value: "illustration",
        },
        {
            icon: Camera,
            label: "디지털 아트",
            isActive: false,
            value: "digital-art",
        },
        {
            icon: Sparkles,
            label: "AI",
            isActive: false,
            value: "ai",
        },
        {
            icon: Panda,
            label: "캐릭터 디자인",
            isActive: false,
            value: "cartoon",
        },
        {
            icon: Package,
            label: "제품/패키지 디자인",
            isActive: false,
            value: "product-design",
        },
        {
            icon: Camera,
            label: "포토그래피",
            isActive: false,
            value: "photography",
        },
        {
            icon: Type,
            label: "타이포그래피",
            isActive: false,
            value: "typography",
        },
        {
            icon: Gem,
            label: "공예",
            isActive: false,
            value: "craft",
        },
        {
            icon: Brush,
            label: "파인아트",
            isActive: false,
            value: "art",
        },
    ];

    const handleChangeCategory = () => {
        onSetCategory();
    };

    return (
        <section className="sticky top-14 z-10 w-full flex items-center justify-center py-2 px-6 lg:px-20 gap-10 mt-20 bg-white">
            <div className="hidden min-w-fit lg:flex flex-col gap-2">
                {/* 아이콘 */}
                <ArrowUpDown className="text-neutral-700" />
                {/* 아이콘 라벨 */}
                <p className="text-sm">정렬</p>
            </div>
            <Separator orientation="vertical" className="hidden lg:block h-10!" />
            <div className="flex items-center gap-12 overflow-x-scroll">
                {categories.map((category, index) => {
                    const IconComponent = category.icon;

                    return (
                        <div key={index} className="min-w-fit flex flex-col items-center gap-2" onClick={() => onSetCategory(category.value)}>
                            <IconComponent className="text-neutral-700" />
                            <p className="text-sm">{category.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export { AppStickyMenu };
