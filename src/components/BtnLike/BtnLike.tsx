import { HeartOutlined, HeartTwoTone } from "@ant-design/icons";
import s from "./BtnLike.module.css";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";
import { useDispatch, useSelector } from "react-redux";
import { HeroStats } from "../../models/models";

interface Props {
  hero: HeroStats;
}
export function BtnLike({ hero }: Props) {
  const dispatch = useDispatch();

  const heroes = useSelector(selectHeroes);

  const toggleLike = (select: HeroStats) => {
    const likesHeroes = heroes.map((el) =>
      el.id === select.id ? { ...el, isLike: !el.isLike } : el
    );
    dispatch(setHeroes(likesHeroes));
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
