//AppHeader.jsx

import { Input, Button } from "../ui";
import { ChevronDown, Hamburger, MenuIcon, MenuSquare, Search } from "lucide-react";

const menu = [
  {
    label: "발견",
    newest: false,
    dropdown: false,
    underline: true,
  },
  {
    label: "채용",
    newest: false,
    dropdown: false,
    underline: false,
  },
  {
    label: "워크숍/커뮤니티",
    newest: false,
    dropdown: true,
    underline: false,
  },
  {
    label: "포폴 피드백",
    newest: true,
    dropdown: false,
    underline: false,
  },
  {
    label: "에이전시",
    newest: true,
    dropdown: false,
    underline: false,
  },
];

function AppHeader() {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-10 w-full h-14 flex items-center justify-between px-8 border-b whitespace-nowrap">
      <div className="w-full flex items-center justify-between px-4 h-14 border-b sm:px-8">
        {/* 햄버거버튼 sm이하에서만 */}
        <div className="flex">
          <button className="sm:hidden mr-2 cursor-pointer">
            <MenuIcon />
          </button>
          {/* 로고 */}
          <img src="src/assets/logo.svg" alt="@LOGO" className="w-30 min-w-30 mx-auto sm:mx-0" />
        </div>
        <nav className="h-full flex items-center gap-4">
          {menu.map((item) => {
            return (
              <div className={`h-full flex items-center gap-1 font-medium ${item.underline && "h-[calc(100%-2px)] border-b-2 border-black"}`}>
                <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>{item.label}</p>
                {item.dropdown && <ChevronDown size={16} />}
                {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
              </div>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        {/* 검색창: sm 이상에서만 보임 */}
        <div className="flex items-center border px-3 rounded-full bg-neutral-50">
          <Search size={18} className="text-neutral-400" />
          <Input placeholder="230,000개 이상의 크리에이티브 검색" className="w-40 border-none focus-visible:ring-0 placeholder:text-neutral-400 hidden sm:block" />
        </div>
        {/* 로그인 */}
        <Button variant="outline" className="px-4 py-1 text-[15px]">
          로그인
        </Button>
        {/* 회원가입 */}
        <Button className="hidden sm:block px-4 py-1 text-[15px]">회원가입</Button>
      </div>
      {/* 작은화면 전용 내비 */}
      <nav className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4 sm:px-8 py-2 sm:py-0">
        {menu.map((item) => (
          <div
            key={item.label}
            className={`h-8 flex items-center gap-1 font-medium 
          ${item.underline && "h-[calc(100%-2px)] border-b-2 border-black"}`}
          >
            <p className={`text-[15px] ${item.underline && "mt-0.5"}`}>{item.label}</p>
            {item.dropdown && <ChevronDown size={16} />}
            {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
          </div>
        ))}
      </nav>
    </header>
  );
}

export { AppHeader };
