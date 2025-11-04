// logo.jsx
//자식

import logo from "./logo.png";
function App() {
  return (
    <Card
      title="첫 번째 게시물"
      content="React를 배우고 있어요!"
      image={logo} // 변수로 사용
    />
  );
}
