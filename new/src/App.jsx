import React from "react";
import GoogleLogo from "./GoogleLogo";
import SpButton from "./SpButton";
import { SearchIcon, MicIcon, PicIcon } from "./Icons";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-5 flex justify-between">
        <div className="flex gap-5">
          {/* 좌상단 */}
          <a href="">Google 정보</a>
          <a href="">스토어</a>
        </div>
        <div className="flex gap-5 items-center">
          {/* 우상단 */}
          <div className="flex gap-5">
            <a href="">Gmail</a>
            <a href="">이미지</a>
          </div>
          <div className="w-8 h-8 bg-zinc-600">{/* 아이콘 */}</div>
          <div className="w-8 h-8 bg-amber-500 rounded-full">{/* 사용자계정 */}</div>
        </div>
      </header>
      <main className="grow flex flex-col items-center justify-center">
        <div>
          {/* 구글로고 */}
          <GoogleLogo />
        </div>
        <div className="mt-8 w-full max-w-xl">
          {/* 검색창 */}
          <div className="flex w-full items-center bg-white shadow-md rounded-full px-4 py-2 border border-gray-200">
            <SearchIcon />
            {/* 검색입력 */}
            <input className="outline-none bg-transparent text-lg" type="text" placeholder="구글UI실습" />
            <div className="flex gap-3 items-center ml-auto">
              {/* 검색창 우측 아이콘 */}
              <MicIcon className="cursor-pointer" />
              <PicIcon className="cursor-pointer" />

              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm ">AI 모드</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-5 p-4">
          {/* 링크버튼 */}
          <SpButton>Google 검색</SpButton>
          <SpButton>I'm Feeling Lucky</SpButton>
        </div>
      </main>
      <footer className="bg-gray-100 text-sm">
        <div className="p-4">대한민국</div>
        <div className="border-t border-gray-300"></div>
        <div className="flex justify-between p-4">
          <div className="gap-2 flex">
            {/* 좌하단 */}
            <a href="">광고</a>
            <a href="">비즈니스</a>
            <a href="">검색의 원리</a>
          </div>
          <div className="flex gap-4">
            {/* 우하단 */}
            <a href="">개인정보처리방침</a>
            <a href="">약관</a>
            <a href="">설정</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
