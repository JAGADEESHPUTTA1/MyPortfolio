import "./Card.scss";

export default function Card({
  title = "Project1",
  skill = "Javascript",
  desc,
  img,
}) {
  const clickHandler = () => {
    console.log("click");
  };
  return (
    <div className="card">
      <img
        className="card-poster"
        src={img}
        alt="img"
        width={150}
        height={150}
      />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-skill"> {skill}</div>
        <div className="card-desc"> {desc}</div>
      </div>
    </div>
  );
}
