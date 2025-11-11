//HeaderSheet.jsx

import React from "react";
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui";
import { MenuIcon } from "lucide-react";

function HeaderSheet({ open, setOpen }) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* 햄버거 버튼이 Sheet 트리거 역할 */}
      <SheetTrigger asChild>
        <button aria-label="메뉴 열기" className="sm:hidden mr-2 cursor-pointer">
          <MenuIcon />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] p-6">
        <SheetHeader>
          <SheetTitle>
            {/* 로고 */}
            <img src="src/assets/logo.svg" alt="@LOGO" className="w-30 min-w-30 mx-auto sm:mx-0" />
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-neutral-100 text-gray-700 text-center text-base leading-relaxed rounded px-3 py-2 mb-4">
                회원가입 또는 로그인을 통해 13만개 이상의 크리에이티브를 발견하고 수집해보세요.
              </div>
              <div className="flex "></div>
              <Button className="k px-4 py-1 text-[15px] bg-[#05BCC6]">회원가입</Button>
              <Button variant="outline" className="px-4 py-1 text-[15px]">
                로그인
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default HeaderSheet;
