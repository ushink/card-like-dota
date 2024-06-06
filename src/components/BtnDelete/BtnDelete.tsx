import { CloseOutlined } from "@ant-design/icons";
import s from "./BtnDelete.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectHeroes, setHeroes } from "../../app/dotaSlice";

interface Props {
  id: number;
}
export function BtnDelete({ id }: Props) {
  const dispatch = useDispatch();

  const heroes = useSelector(selectHeroes);

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
