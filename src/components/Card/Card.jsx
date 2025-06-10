import "./Card.scss";

export default function Card({
  title = "Project1",
  skill = "Javascript",
  desc,
  img,
}) {
  return (
    <div className="card">
      <img
        className="card-poster"
        src={img}
        alt="img"
      />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-skill"> {skill}</div>
        <div className="card-desc"> {desc}</div>
      </div>
    </div>
  );
}
