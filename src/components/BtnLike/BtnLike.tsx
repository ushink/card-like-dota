import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import s from "./BtnLike.module.css";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { HeroStats } from "../../models/models";

interface Props {
  hero: HeroStats;
}
export function BtnLike({ hero }: Props) {
  const dispatch = useAppDispatch();

  const heroes = useAppSelector(selectHeroes);

  const toggleLike = (select: HeroStats) => {
    if (heroes) {
      const likesHeroes = heroes.map((el) =>
        el.id === select.id ? { ...el, isLike: !el.isLike } : el
      );
      dispatch(setHeroes(likesHeroes));
    }
  };

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        toggleLike(hero);
      }}
    >
      {hero.isLike ? (
        <HeartTwoTone twoToneColor="red" className={s.heart} />
      ) : (
        <HeartOutlined className={s.heart} />
      )}
    </button>
  );
}
