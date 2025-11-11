import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui";

function HeaderDrawer({ open, setOpen }) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent side="top" className="h-screen p-6">
        <DrawerHeader>
          <DrawerTitle>검색</DrawerTitle>
          <DrawerDescription>검색어를 입력하세요.</DrawerDescription>
        </DrawerHeader>

        <input type="text" className="w-full border rounded p-2 mt-4" placeholder="검색어 입력" />

        <DrawerClose asChild>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-black">닫기</button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}

export default HeaderDrawer;
