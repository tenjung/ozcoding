//AppHeader.jsx
import { useState } from "react";
import { Input, Button } from "../ui";
import { ChevronDown, CircleStarIcon, Hamburger, MenuIcon, MenuSquare, Search } from "lucide-react";
import HeaderSheet from "./HeaderSheet";
import HeaderDrawer from "./HeaderDrawer";

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
  const [sheetOpen, setSheetOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-10 w-full border-b whitespace-nowrap flex flex-col">
      {/* 1단: 햄버거, 로고, PC 내비, 검색, 로그인 */}
      <div className="w-full flex items-center justify-between h-14 px-4 sm:px-8 border-b gap-6">
        {/* 왼쪽 그룹: 햄버거, 로고, PC 내비 */}
        <div className="flex items-center gap-6">
          {/* 햄버거메뉴 sm 이하 */}

          {/* <button className="sm:hidden mr-2 cursor-pointer">
            <MenuIcon />
          </button> */}
          <HeaderSheet open={sheetOpen} setOpen={setSheetOpen} />

          {/* 로고 */}
          <img src="src/assets/logo.svg" alt="@LOGO" className="w-30 min-w-30 mx-auto sm:mx-0" />

          {/* PC 내비 sm 이상 */}
          <nav className="hidden sm:flex h-full items-center gap-4">
            {menu.map((item) => (
              <div key={item.label} className={`h-full flex items-center gap-1 font-medium ${item.underline ? "h-[calc(100%-2px)] border-b-2 border-black" : ""}`}>
                <p className={`text-[15px] ${item.underline ? "mt-0.5" : ""}`}>{item.label}</p>
                {item.dropdown && <ChevronDown size={16} />}
                {item.newest && <p className="text-xs text-[#05BCC6] font-medium">NEW</p>}
              </div>
            ))}
          </nav>
        </div>

        {/* 오른쪽 그룹: 검색창, 로그인, 회원가입 */}
        <div className="flex items-center gap-2">
          {/* 검색창 sm 이상에서만 보임 */}
          <div className="hidden sm:flex items-center border px-3 rounded-full bg-neutral-50">
            <Search size={18} className="text-neutral-400" />
            <Input placeholder="230,000개 이상의 크리에이티브 검색" className="w-64 border-none focus-visible:ring-0 placeholder:text-neutral-400" />
          </div>

          {/* 로그인 */}
          <Button variant="outline" className="px-4 py-1 text-[15px]">
            로그인
          </Button>
          {/* 검색버튼아이콘 sm 이하에서만 보임 */}
          <button
            className="sm:hidden m-2 cursor-pointer"
            aria-label="검색"
            onClick={() => setDrawerOpen(true)} // 클릭시 Drawer 열림
          >
            <Search />
          </button>

          {/* 회원가입 sm 이상에서만 보임 */}
          <Button className="hidden sm:block px-4 py-1 text-[15px]">회원가입</Button>
        </div>
      </div>

      {/* 2단: 모바일 내비, sm 이하*/}
      <nav className="sm:hidden w-full flex h-14 items-center gap-4 px-4 overflow-x-auto whitespace-nowrap">
        {menu.map((item) => (
          <div key={item.label} className={`flex items-center gap-1 font-medium ${item.underline ? "border-b-2 border-black h-[calc(100%-2px)]" : ""}`}>
            <p className={`text-[15px] ${item.underline ? "mt-0.5" : ""}`}>{item.label}</p>
            {item.dropdown && <ChevronDown size={16} />}
            {item.newest && (
              <p className="text-xs text-[#05BCC6] font-medium">
                <CircleStarIcon size={18} className="" />
              </p>
            )}
          </div>
        ))}
      </nav>
      <HeaderDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </header>
  );
}

export { AppHeader };
