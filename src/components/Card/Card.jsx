import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Card.scss";

export default function Card({
  title = "Project1",
  skill = "Javascript",
  code = "",
  img,
  // desc,
}) {
  const clickHandler = () => {
    console.log("CODE");
  };
  return (
    <div className="card">
      <img
        style={{ objectFit: "contain" }}
        src={img}
        alt="img"
        width={150}
        height={150}
      />
      <div>
        <div className="card-title">{title}</div>
        <div> {skill}</div>
        {/* <div> {desc}</div> */}
      </div>
      {/* <div className="btns">
        <PrimaryButton text="Code" onClick={clickHandler} />
        <PrimaryButton text="Live" onClick={clickHandler} />
      </div> */}
    </div>
  );
}
