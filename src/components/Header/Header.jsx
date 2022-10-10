import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <h1 className={s.title}>Superheroes</h1>
      </div>
    </header>
  );
};

export default Header;
