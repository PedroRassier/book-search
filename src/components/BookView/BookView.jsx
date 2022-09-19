import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import "./bookView.scss";
export default function BookView(props) {
  const [icon, setIcon] = useState(false);

  return (
    <article id="Book">
      <header>
        <img src={props.imgSrc} alt="" />
        <div id="title">
          <h1>{props.title}</h1>
          <h3>{props.autor}</h3>
          {icon ? (
            <Star
              onClick={() => setIcon(!icon)}
              id="starIcon"
              size={32}
              color="#ffb700"
              weight="fill"
            />
          ) : (
            <Star
              onClick={() => setIcon(!icon)}
              id="starIcon"
              size={32}
              color="#ffb700"
              weight="bold"
            />
          )}
        </div>
      </header>
      <p>{props.description}</p>
    </article>
  );
}
