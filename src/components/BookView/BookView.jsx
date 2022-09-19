import "./bookView.scss";
export default function BookView(props) {
  return (
    <div id="Book">
      <h1>{props.title}</h1>
      <h3>Autor: {props.autor}</h3>
      <img src={props.imgSrc} alt="" />
      <p>{props.description}</p>
    </div>
  );
}
