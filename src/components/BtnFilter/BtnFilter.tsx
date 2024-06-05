import s from "./BtnFilter.module.css";

interface Props {
  isFilter: boolean;
  setIsFilter: any;
}
export function BtnFilter({ setIsFilter, isFilter }: Props) {
  return (
    <button className={s.btnFilter} onClick={() => setIsFilter(!isFilter)}>
      Filter FAV
    </button>
  );
}
