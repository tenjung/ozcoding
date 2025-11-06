//App.jsx

import React from "react";
import { images, Image } from "./assets/Images"; // 이름 정확히 맞춰서 import

function App() {
  return (
    <div className="flex flex-wrap max-w-250 gap-4 image-list">
      {images.map((img, idx) => (
        <Image key={img.src + idx} src={img.src} alt={`house-${idx}`} />
      ))}
    </div>
  );
}

export default App;
