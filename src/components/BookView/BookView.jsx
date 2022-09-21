import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import "./bookView.scss";
export default function BookView(props) {
  const [icon, setIcon] = useState(false);

  return (
    <article>
      <header>
        <a href={props.bookLink} target="_blank">
          <img src={props.imgSrc} alt="" />
        </a>
        <div>
          <h1>{props.title}</h1>
          <h3>{props.autor}</h3>
          {icon ? (
            <Star
              onClick={() => setIcon(!icon)}
              size={32}
              color="#ffb700"
              weight="fill"
            />
          ) : (
            <Star
              onClick={() => setIcon(!icon)}
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
