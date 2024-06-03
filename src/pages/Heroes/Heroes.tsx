import { Link } from "react-router-dom";
import { useGetHeroesStatsQuery } from "../../services/heroes";
import s from "./Heroes.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";

export function Heroes() {
  const dispatch = useDispatch(); // TODO: или тут нужно использовать useAppDispatch из hooks

  const { data } = useGetHeroesStatsQuery();

  const heroes = useSelector(selectHeroes);

  console.log(heroes);

  useEffect(() => {
    dispatch(setHeroes(data));
  }, [data]);

  return (
    <main className={s.wrapper}>
      {heroes?.map((el) => (
        <div className={s.card} key={el.id}>
          <img
            className={s.background}
            src={`https://cdn.cloudflare.steamstatic.com/${el.img}`}
            alt={el.name}
          />
          <div className={s.hero}>
            <img
              className={s.img}
              src={`https://cdn.cloudflare.steamstatic.com/${el.img}`}
              alt={el.name}
            />
            <div className={s.info}>
              <h2 className={s.name}>{el.localized_name}</h2>
              <p className={s.attack}>
                {el.attack_type} -{" "}
                <span className={s.role}>{el.roles.join(", ")}</span>
              </p>
              <Link to={`/hero/${el.id}`} className={s.link}>
                →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
