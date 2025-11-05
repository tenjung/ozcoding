// // App.jsx
// import React from "react";

// function App() {
//   // 이미지 URL 배열
//   const images = [
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//     "https://placehold.co/400",
//   ];

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
//       <h1 className="text-2xl font-bold mb-2">Large Family House for Sale</h1>
//       <p className="text-gray-600 mb-6">California City, CA, USA</p>

//       <div className="flex gap-4 max-w-6xl w-full flex-wrap justify-center">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`image ${index + 1}`}
//             className={`${index % 2 === 0 ? "rounded-xl" : "rounded-full"}
//             w-50 h-50 hover:shadow-2xl hover:ring-1 hover:ring-gray-400 cursor-pointer`}
//           />
//         ))}
//       </div>

//       <button className="mt-6 bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900">Show all Images</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const albums = [
    {
      name: "House",
      images: ["https://placehold.co/400x400?text=House1", "https://placehold.co/400x400?text=House2", "https://placehold.co/400x400?text=House3", "https://placehold.co/400x400?text=House4"],
    },
    {
      name: "Living room",
      images: ["https://placehold.co/400x400?text=Living1", "https://placehold.co/400x400?text=Living2", "https://placehold.co/400x400?text=Living3", "https://placehold.co/400x400?text=Living4"],
    },
    {
      name: "Bathroom",
      images: ["https://placehold.co/400x400?text=Bath1", "https://placehold.co/400x400?text=Bath2", "https://placehold.co/400x400?text=Bath3", "https://placehold.co/400x400?text=Bath4"],
    },
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">앨범 목록</h1>
      {/* 앨범 메뉴: 클릭하면 setSelectedAlbum으로 상태 변경 */}
      <div className="flex gap-2 mb-6">
        {albums.map((album, idx) => (
          <button key={album.name} onClick={() => setSelectedAlbum(idx)} className={`px-4 py-2 rounded-lg ${selectedAlbum === idx ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border"}`}>
            {album.name}
          </button>
        ))}
      </div>

      <div className="flex gap-4 max-w-5xl w-full flex-wrap justify-center">
        {/* 선택된 앨범의 이미지만 보여줌 */}
        {albums[selectedAlbum].images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${albums[selectedAlbum].name} image ${index + 1}`}
            className={`${index % 2 === 0 ? "rounded-xl" : "rounded-full"} w-50 h-50 transition duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
