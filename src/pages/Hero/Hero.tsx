import { useParams } from "react-router-dom";
import s from "./Hero.module.css";
import { useSelector } from "react-redux";
import { selectHero } from "../../app/dotaSlice";

export function Hero() {
  const { id } = useParams();

  const hero = useSelector(selectHero);

  console.log(hero);

  const handleClickBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h1 className={s.title}>Hero id = {id}</h1>
      <button onClick={handleClickBack}>Назад</button>
    </div>
  );
}
