import s from "./Hero.module.css";
import { useSelector } from "react-redux";
import { selectHero } from "../../app/dotaSlice";

export function Hero() {
  const hero = useSelector(selectHero);

  const handleClickBack = () => {
    window.history.back();
  };

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
            <div className={s.skills}>
              <div className={s.skill}>
                <div className={`${s.circle} + ${s.str}`}></div>
                <div>
                  {hero?.base_str} + {hero?.str_gain}
                </div>
              </div>
              <div className={s.skill}>
                <div className={`${s.circle} + ${s.agi}`}></div>
                <div>
                  {hero?.base_agi} + {hero?.agi_gain}
                </div>
              </div>
              <div className={s.skill}>
                <div className={`${s.circle} + ${s.int}`}></div>
                <div>
                  {hero?.base_int} + {hero?.int_gain}
                </div>
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <div>
                  <span className={s.detail}>Базовая атака:</span>{" "}
                  {hero?.base_attack_min} - {hero?.base_attack_max}
                </div>
                <div>
                  <span className={s.detail}>Дальность атаки:</span>{" "}
                  {hero?.attack_range}
                </div>
                <div>
                  <span className={s.detail}>Скорость атаки:</span>{" "}
                  {hero?.base_attack_time}
                </div>
              </th>
              <th>
                <div>
                  <span className={s.detail}>Здоровье:</span>{" "}
                  {hero?.base_health}
                </div>

                <div>
                  <span className={s.detail}>Мана:</span> {hero?.base_mana}
                </div>
              </th>
              <th>
                <div>
                  <span className={s.detail}>Базовая броня:</span>{" "}
                  {hero?.base_armor}
                </div>
                <div>
                  <span className={s.detail}>Сопротивление магии:</span>{" "}
                  {hero?.base_mr} %
                </div>
                <div>
                  <span className={s.detail}>Скорость передвижения:</span>
                  {hero?.move_speed}
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <button className={s.btnBack} onClick={handleClickBack}>Back</button>
    </main>
  );
}
