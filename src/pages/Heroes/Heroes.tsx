import { Link } from "react-router-dom";
import { useGetHeroesStatsQuery } from "../../services/heroes";
import s from "./Heroes.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";

export function Heroes() {
  const dispatch = useDispatch();

  const { data } = useGetHeroesStatsQuery();

  const heroes = useSelector(selectHeroes);

  console.log(heroes);

  useEffect(() => {
    dispatch(setHeroes(data));
  }, [data]);

  return (
    <div>
      <h1 className={s.title}>Heroes</h1>

      {heroes?.map((el) => (
        <div key={el.id}>
          <Link to={`/hero/${el.id}`}>
            <h1>{el.localized_name}</h1>
          </Link>

          <img
            src={`https://cdn.cloudflare.steamstatic.com/${el.img}`}
            alt={el.name}
          />
        </div>
      ))}
    </div>
  );
}
