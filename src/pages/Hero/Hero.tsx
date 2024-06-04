import s from "./Hero.module.css";
import { useSelector } from "react-redux";
import { selectHero } from "../../app/dotaSlice";
import { HeroStats } from "../../models/models";
import { HeroSkills } from "../../components/HeroSkills/HeroSkills";
import { HeroDetails } from "../../components/HeroDetails/HeroDetails";
import { BtnBack } from "../../components/BtnBack/BtnBack";

export function Hero() {
  const hero = useSelector(selectHero);

  return (
    <main className={s.wrapper}>
      <div className={s.card}>
        <img
          className={s.background}
          src={`https://cdn.cloudflare.steamstatic.com/${hero?.img}`}
          alt={hero?.name}
        />
        <div className={s.hero}>
          <img
            className={s.img}
            src={`https://cdn.cloudflare.steamstatic.com/${hero?.img}`}
            alt={hero?.name}
          />
          <div className={s.info}>
            <h2 className={s.name}>{hero?.localized_name}</h2>
            <p className={s.attack}>
              {hero?.attack_type} -{" "}
              <span className={s.role}>{hero?.roles.join(", ")}</span>
            </p>
            <HeroSkills hero={hero as HeroStats} />
          </div>
        </div>
        <HeroDetails hero={hero as HeroStats} />
      </div>
      <BtnBack />
    </main>
  );
}
