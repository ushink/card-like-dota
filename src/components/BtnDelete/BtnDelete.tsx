import { CloseOutlined } from "@ant-design/icons";
import s from "./BtnDelete.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";

interface Props {
  id: number;
}
export function BtnDelete({ id }: Props) {
  const dispatch = useAppDispatch();

  const heroes = useAppSelector(selectHeroes);

  const clickDelete = (id: number) => {
    const updatedHeroes = heroes.filter((el) => el.id !== id);
    dispatch(setHeroes(updatedHeroes));
  };

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        clickDelete(id);
      }}
    >
      <CloseOutlined className={s.delete} />
    </button>
  );
}
