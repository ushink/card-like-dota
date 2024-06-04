import { HeroStats } from "../../models/models";
import s from "./HeroDetails.module.css";

interface Props {
  hero: HeroStats | null;
}
export function HeroDetails({ hero }: Props) {
  return (
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
              <span className={s.detail}>Здоровье:</span> {hero?.base_health}
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
  );
}
