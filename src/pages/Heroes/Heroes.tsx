import { Link } from "react-router-dom";
import { useGetHeroesStatsQuery } from "../../services/heroes";
import s from "./Heroes.module.css";

export function Heroes() {
  const { data } = useGetHeroesStatsQuery();
  console.log(data);
  return (
    <div>
      <h1 className={s.title}>Heroes</h1>

      {data?.map((el) => (
        <div key={el.id}>
          <Link to={`/hero/${el.id}`}>
            <h1>{el.localized_name}</h1>
          </Link>

          <img
            src={`https://cdn.cloudflare.steamstatic.com/${el.img}`}
            alt={el.name}
          />
        </div>
      ))}
    </div>
  );
}
