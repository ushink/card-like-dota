import { useNavigate } from "react-router-dom";
import { useGetHeroesStatsQuery } from "../../services/heroes";
import s from "./Heroes.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentHeroes,
  selectHasRunOnce,
  selectHeroes,
  selectHeroesFav,
  setCurrentHeroes,
  setHasRunOnce,
  setHero,
  setHeroes,
  setHeroesFav,
} from "../../app/dotaSlice";
import { HeroStats } from "../../models/models";
import { BtnFilter } from "../../components/BtnFilter/BtnFilter";
import { BtnLike } from "../../components/BtnLike/BtnLike";
import { BtnDelete } from "../../components/BtnDelete/BtnDelete";
import { BtnScroll } from "../../components/BtnScroll/BtnScroll";
import { LoadingOutlined } from "@ant-design/icons";

export function Heroes() {
  const dispatch = useDispatch(); // TODO: или тут нужно использовать useAppDispatch из hooks да нужно
  const navigate = useNavigate();

  const [isFilter, setIsFilter] = useState(false);

  const { data, isLoading, isError, error } = useGetHeroesStatsQuery();

  const heroes = useSelector(selectHeroes); // TODO: или тут нужно использовать useAppDispatch из hooks да нужно
  const heroesFav = useSelector(selectHeroesFav);
  const currentHeroes = useSelector(selectCurrentHeroes);

  const hasRunOnce = useSelector(selectHasRunOnce);

  // Сохранить данные
  useEffect(() => {
    if (!hasRunOnce && data) {
      const updatedHeroes = data.map((hero: HeroStats) => ({
        ...hero,
        isLike: false,
      }));
      dispatch(setHeroes(updatedHeroes));
      dispatch(setHasRunOnce(true));
    }
  }, [dispatch, hasRunOnce, data]); // использую зависимость hasRunOnce чтобы вызывалось один раз

  // Перейти на страницу с персонажем
  const handleClick = (hero: HeroStats) => {
    navigate(`/hero/${hero.id}`);
    dispatch(setHero(hero));
  };

  // Сохранить лайкнутых персонажей
  useEffect(() => {
    const favoritesHeroes = heroes?.filter((item) => item.isLike === true);
    dispatch(setHeroesFav(favoritesHeroes));
  }, [dispatch, heroes]);

  // Отфильтровать
  useEffect(() => {
    dispatch(setCurrentHeroes(isFilter ? heroesFav : heroes));
  }, [dispatch, isFilter, heroes, heroesFav]);

  // Отображаем индикатор загрузки, пока данные не будут получены
  if (isLoading) {
    return (
      <div className={s.wrapper}>
        <LoadingOutlined /> Загрузка...
      </div>
    );
  }

  // Обрабатываем возможные ошибки
  if (isError) {
    return <div className={s.wrapper}>Ошибка: {JSON.stringify(error)}</div>;
  }

  return (
    <main className={s.wrapper}>
      <BtnFilter isFilter={isFilter} setIsFilter={setIsFilter} />
      <BtnScroll />
      <section className={s.cards}>
        {currentHeroes?.map((el) => (
          <div className={s.card} key={el.id} onClick={() => handleClick(el)}>
            <img
              className={s.background}
              src={`https://cdn.cloudflare.steamstatic.com/${el.img}`}
              alt={el.name}
            />
            <BtnDelete id={el.id} />
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
            <BtnLike hero={el} />
          </div>
        ))}
      </section>
    </main>
  );
}
