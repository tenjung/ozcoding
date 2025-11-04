// Card.jsx
//자식

function Card({ title, content, image }) {
  return (
    <div style={{ border: "1px solid #ddd", width: 200 }}>
      <img src={image} style={{ width: "100%", height: "100px" }} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;
