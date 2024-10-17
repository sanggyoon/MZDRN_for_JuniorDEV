import "./ButtonBG.css";

function ButtonBG({ className, text, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonBG;
