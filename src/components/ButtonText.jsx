import "./ButtonText.css";

function ButtonText({ className, text, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonText;
