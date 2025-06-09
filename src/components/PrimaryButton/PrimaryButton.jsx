import "./PrimaryButton.scss";
export default function PrimaryButton({ text = "Button", onClick }) {
  return (
    <button className="btn-primary" onClick={onClick}>
      {text}
    </button>
  );
}
