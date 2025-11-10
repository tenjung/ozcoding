//App.jsx

import { AppHeader, AppStickyMenu, AppPortfolio, AppFooter, ImageDialog } from "./components/common";
import { Card, Separator, Skeleton, Avatar, AvatarImage, AvatarFallback, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, Button } from "./components/ui";
import { SkeletonImageCard } from "./components/skeleton";

// CONSTANTS TEST DATA
import { recruitments } from "./constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

function addCommas(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function App() {
  const gallery = ["", "", "", "", ""];

  const [data, setData] = useState(null); // Unsplash API에서 받은 데이터 전부
  const [images, setImages] = useState([]); // Unsplash API에서 받은 데이터 전부 중 실제로 필요한 Image 데이터

  // Unsplash API 이미지 조회 함수
  const fetchApi = async () => {
    const API_KEY = "dAOntppwDT4Q9nTMDAO-bSN6-vAh7iIFC0ME3bEnxLU";
    const API_URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

    const res = await axios.get(`${API_URL}&page=1&query=design`);
    console.log("res: ", res);

    // const 실제로필요한데이터전체 = res.data;
    setData(res.data);
    // const 스켈레톤이미지컴포넌트에서쓰일데이터 = res.data.results;
    setImages(res.data.results);
  };

  useEffect(() => {
    // 이미지 조회 함수 실행
    fetchApi();
  }, []);

  return (
    <div className="w-full">
      {/* 배너 */}
      <div className="w-full h-15 flex items-center justify-center bg-[#4EABFF] text-xl font-semibold">
        <p className="text-white">레퍼런스로 시작하는 스몰 브랜드 브랜딩 워크숍</p>
      </div>
      {/* 자회사 링크 */}
      <div className="w-full h-[34px] flex items-center gap-3 px-8">
        <svg className="w-5 h-5" viewBox="0 0 19 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8465 5.95162L13.1188 0.0594973C13.0983 0.0395263 13.0711 0.0283946 13.0429 0.0283946C13.0147 0.0283946 12.9875 0.0395263 12.967 0.0594973L9.74661 3.37234C9.6636 3.44441 9.55849 3.48394 9.44987 3.48394C9.34125 3.48394 9.23614 3.44441 9.15314 3.37234L5.90974 0.0311027C5.88924 0.0111316 5.86207 0 5.83383 0C5.80559 0 5.77843 0.0111316 5.75793 0.0311027L0.0302347 5.92323C0.010821 5.94432 0 5.97226 0 6.00131C0 6.03036 0.010821 6.05831 0.0302347 6.07941L5.75793 11.9668C5.76696 11.9777 5.77828 11.9863 5.79103 11.9921C5.80378 11.9978 5.81763 12.0005 5.83154 11.9999C5.84609 12.0002 5.86054 11.9975 5.874 11.9918C5.88746 11.9861 5.89962 11.9776 5.90974 11.9668L9.15774 8.62556C9.23566 8.55601 9.3352 8.51739 9.43837 8.51671C9.54921 8.51932 9.65539 8.56302 9.7374 8.63976L12.9578 11.9526C12.9668 11.9635 12.9781 11.9721 12.9909 11.9779C13.0036 11.9836 13.0175 11.9863 13.0314 11.9857C13.046 11.986 13.0604 11.9833 13.0739 11.9776C13.0873 11.9719 13.0995 11.9634 13.1096 11.9526L18.8373 6.06521C18.8484 6.04879 18.8551 6.02964 18.8568 6.00969C18.8584 5.98974 18.8548 5.96971 18.8465 5.95162Z"></path>
          <defs></defs>
        </svg>
        <Separator orientation="vertical" className="h-3!" />
        <p className="text-sm font-medium">notefolio</p>
        <Separator orientation="vertical" className="h-3!" />
        <p className="text-sm text-neutral-400 font-bold">LOUD</p>
      </div>
      {/* 헤더 */}
      <AppHeader />

      <main className="w-full flex flex-col items-center py-6">
        {/* 메인 홍보 갤러리 */}
        <section className="w-full flex items-center gap-6 overflow-x-scroll mb-4">
          {gallery.map((_, index) => (
            <Skeleton key={index} className="min-w-[520px] w-[520px] h-80" />
          ))}
        </section>
        {/* 메인 카테고리 메뉴 AppStickyMenu */}
        <AppStickyMenu />
        {/* 메인컨텐츠 이미지리스트 */}
        <ImageDialog images={images} />

        {/* 포트폴리오 피드백부터 커리어 상담까지! */}
        <AppPortfolio />
        {/*디자이너 채용 정보는 노트폴리오에서! */}
        <section className="w-full flex flex-col gap-6 py-12 px-20  bg-neutral-100">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">디자이너 채용 정보는 노트폴리오에서!</h3>
          <div className="grid grid-cols-6 gap-6">
            {recruitments.map((recruitment) => {
              return (
                <Card className="w-full h-fit p-0 gap-3 border-none shadow-none bg-transparent">
                  <Skeleton className="w-full h-52 bg-neutral-400 rounded-t-lg rounded-lg" />
                  <div className="flex gap-1">
                    {/* 로고 */}
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>{recruitment.imgUrl}</p>
                    <div>
                      {/* 타이틀 */}
                      <p className="text-[15px] font-semibold line-clamp-1">{recruitment.title}</p>
                      {/* 회사명 */}
                      <p className="text-sm text-neutral-700">{recruitment.company}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        {/* 하단컨텐츠 이미지리스트*/}
        <ImageDialog images={images} />
        {/* <section className="w-full grid grid-cols-6 gap-6 mt-6 px-20">
       
        </section> */}
      </main>
      <div className="h-[114px] flex flex-col items-center gap-6 my-20">
        {/* 회원가입 및 로그인 유도 문구 */}
        <div className="flex items-center">
          <a href="" className="underline">
            회원가입
          </a>
          <p className="mx-1">또는</p>
          <a href="" className="underline">
            로그인
          </a>
          <p>을 통해 19만개 이상의 크리에이티브를 발견하고 수집해보세요.</p>
        </div>
        {/* 회원가입 또는 로그인 버튼 UI */}
        <div className="flex items-center gap-4">
          <Button>회원가입</Button>
          <p className="text-sm">또는</p>
          <Button variant={"outline"}>로그인</Button>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
