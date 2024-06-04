import s from "./BtnBack.module.css";
export function BtnBack() {
  const handleClickBack = () => {
    window.history.back();
  };

  return (
    <button className={s.btnBack} onClick={handleClickBack}>
      Back
    </button>
  );
}
