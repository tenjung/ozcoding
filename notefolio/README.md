1. npm create vite@latest
2. npm install tailwindcss @tailwindcss/vite
3. src/index.css 파일을 초기화한다.
4. @import "tailwindcss"; 해당 코드를 index.css에 붙여넣기 한다.
5. vite.config.js 파일을 갱신한다.
6. root 경로에 jsconfig.json 파일을 생성한다.
7. 아래 코드를 jsconfig.json에 붙여넣기 한다.
   {
   "compilerOptions": {
   "paths": {
   "@/_": ["./_"]
   }
   }
   }
8. shadcn ui 설치: npx shadcn@latest init
9. 새로운 VS Code 화면에서 새 터미널에서 git clone https://github.com/9diin/shadcn-template.git 명령어 입력
10. 템플릿 생성 후에 터미널을 열고 npm install 명령어를 입력해주세요.
11. shadcn ui 컴포넌트 설치

-   npx shadcn@latest add avatar
-   npx shadcn@latest add button
-   npx shadcn@latest add input
-   npx shadcn@latest add skeleton

12. lucide icon 설치: npm install lucide-react
