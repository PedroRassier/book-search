import { Star } from "phosphor-react";
import "./bookView.scss";
export default function BookView(props) {
  return (
    <article id="Book">
      <header>
        <img src={props.imgSrc} alt="" />
        <h1>
          {props.title}
          <Star size={32} color="#ffb700" weight="fill" />
          <span>
            <h3>{props.autor}</h3>
          </span>
        </h1>
      </header>
      <p>{props.description}</p>
    </article>
  );
}
