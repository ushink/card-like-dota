import { ArrowUpOutlined } from "@ant-design/icons";
import s from "./BtnScroll.module.css";
import { useLayoutEffect, useState } from "react";

export function BtnScroll() {
  const [isShowScroll, setIsShowScroll] = useState<Boolean>(false);

  const handleClick = () => {
    window.scrollTo(0, 20);
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      if (position > 1000) {
        setIsShowScroll(true);
      } else {
        setIsShowScroll(false);
      }
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Очищаем обработчик при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button>
      {isShowScroll && (
        <ArrowUpOutlined className={s.scroll} onClick={handleClick} />
      )}
    </button>
  );
}
