import s from "./HeroList.module.css";

const HeroList = () => {
  return (
    <div>
      <h2 className={s.title}>Superheroes</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.heroCard}>
            <img src="" alt="" className={s.image} />
            <h3 className={s.name}>Nickname</h3>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.heroCard}>
            <img src="" alt="" className={s.image} />
            <h3 className={s.name}>Nickname</h3>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.heroCard}>
            <img src="" alt="" className={s.image} />
            <h3 className={s.name}>Nickname</h3>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.heroCard}>
            <img src="" alt="" className={s.image} />
            <h3 className={s.name}>Nickname</h3>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.heroCard}>
            <img src="" alt="" className={s.image} />
            <h3 className={s.name}>Nickname</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeroList;
