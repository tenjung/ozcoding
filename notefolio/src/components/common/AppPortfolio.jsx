import { BadgeCheck, ChevronLeft, ChevronRight, Crosshair, LocateFixed, WandSparkles } from "lucide-react";

import { Badge, Card, Separator, Skeleton } from "../ui";
import { mentors } from "../../constants";

function AppPortfolio() {
  return (
    <section className="relative w-full flex flex-col gap-6 py-12 px-20 mt-12 bg-black">
      <h3 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">포트폴리오 피드백부터 커리어 상담까지!</h3>
      {/* 좌우 플로팅 버튼 */}
      <div className="absolute top-10 right-20 flex gap-4 bg-black  w-fit">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
          <ChevronLeft size={22} className="text-black" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
          <ChevronRight size={22} className="text-black" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6">
        {/* 멘토 카드 */}
        {mentors.map((mentor) => {
          return (
            <Card className="w-full p-0 gap-0">
              <div className="relative p-0 gap-0">
                <Skeleton className="w-full h-52 rounded-t-lg rounded-b-none bg-neutral-500" />
                <Skeleton className="absolute bottom-4 left-4 w-12 h-12 rounded-full" />
                {mentor.job === "디자이너" && (
                  <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-green-600">
                    <WandSparkles />
                    {mentor.job}
                  </Badge>
                )}
                {mentor.job === "마케터" && (
                  <Badge className="absolute bottom-4 right-4 py-1 rounded-sm bg-blue-600">
                    <Crosshair />
                    {mentor.job}
                  </Badge>
                )}
              </div>
              {/* 멘토 설명 */}
              <div className="flex flex-col gap-2 p-4">
                <p className="text-lg font-semibold">{mentor.name} 멘토</p>
                <Separator />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <BadgeCheck fill="#dc2626" className="text-white" size={20} />

                    <p className="text-sm">{mentor.career}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {mentor.job === "디자이너" && <LocateFixed stroke="#16a34a" size={20} />}
                    {mentor.job === "마케터" && <LocateFixed stroke="#2563eb" size={20} />}
                    <p className="text-sm line-clamp-1">{mentor.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export { AppPortfolio };
