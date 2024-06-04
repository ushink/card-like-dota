import s from "./HeroSkills.module.css";
import { HeroStats } from "../../models/models";

interface Props {
  hero: HeroStats | null;
}

export function HeroSkills({ hero }: Props) {
  return (
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
  );
}
