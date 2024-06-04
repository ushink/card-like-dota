import { useNavigate } from "react-router-dom";
import { useLazyGetHeroesStatsQuery } from "../../services/heroes";
import s from "./Heroes.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes, setHero, setHeroes } from "../../app/dotaSlice";
import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import { HeroStats } from "../../models/models";

export function Heroes() {
  const dispatch = useDispatch(); // TODO: или тут нужно использовать useAppDispatch из hooks
  const navigate = useNavigate();

  const { data }: any = useLazyGetHeroesStatsQuery(); // TODO: почему требует any?

  const heroes = useSelector(selectHeroes);

  useEffect(() => {
    if (data) {
      const updatedHeroes = data.map((hero: any) => ({
        ...hero,
        isLike: false,
      }));
      dispatch(setHeroes(updatedHeroes));
    }
  }, []);

  const handleLike = (select: HeroStats) => {
    const likesHeroes = heroes.map((el) =>
      el.id === select.id ? { ...el, isLike: !el.isLike } : el
    );

    dispatch(setHeroes(likesHeroes)); //TODO: спросить про использование повторного dispatch. Нарушаю ли иммутабельность
  };

  const handleClick = (hero: HeroStats) => {
    navigate(`/hero/${hero.id}`);
    dispatch(setHero(hero));
  };

  return (
    <main className={s.wrapper}>
      {heroes?.map((el) => (
        <div className={s.card} key={el.id} onClick={() => handleClick(el)}>
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
              <span className={s.link}>→</span>
            </div>
          </div>
          <div
            onClick={(event) => {
              event.stopPropagation();
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
