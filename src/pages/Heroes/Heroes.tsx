import { Link } from "react-router-dom";
import { useGetHeroesStatsQuery } from "../../services/heroes";
import s from "./Heroes.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { HeroStats } from "../../models/models";

export function Heroes() {
  const dispatch = useDispatch(); // TODO: или тут нужно использовать useAppDispatch из hooks

  const { data } = useGetHeroesStatsQuery();

  const heroes = useSelector(selectHeroes);

  useEffect(() => {
    if (data) {
      const updatedHeroes = data.map((hero) => ({ ...hero, isLike: null }));
      dispatch(setHeroes(updatedHeroes));
    }
  }, [data]);

  const handleLike = (select: HeroStats) => {
    const likesHeroes = heroes.map((el) =>
      el.id === select.id ? { ...el, isLike: !el.isLike } : el
    );

    dispatch(setHeroes(likesHeroes)); //TODO: спросить про использование повторного dispatch
  };

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
          <div
            onClick={() => {
              handleLike(el);
            }}
          >
            {el.isLike ? (
              <HeartTwoTone twoToneColor="red" className={s.heart} />
            ) : (
              <HeartOutlined className={s.heart} />
            )}
          </div>
        </div>
      ))}
    </main>
  );
}
