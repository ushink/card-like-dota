import { useParams } from "react-router-dom";
import s from "./Hero.module.css";

export function Hero() {
  const { id } = useParams();
  return (
    <div>
      <h1 className={s.title}>Hero id = {id}</h1>
    </div>
  );
}
