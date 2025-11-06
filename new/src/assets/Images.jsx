// Images.jsx

export const images = [
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
  { src: "https://placehold.co/400" },
];

export function Image({ src, alt }) {
  return <img src={src} alt={alt} className="w-32 h-32 rounded-xl shadow-md" />;
}
