import { HeroForm, HeroList } from "../../components";

// import s from "./Home.module.css";

const Home = () => {
  const addHero = (nickname, realName, description, superpowers, phrase) => {
    // if (heroes.find((item) => item.name === nickname)) {
    //   alert(`${nickname} is already in the list`);
    // } else {
    //   const newHero = {
    //     nickname,
    //     realName,
    //     description,
    //     superpowers,
    //     phrase,
    //   };
    //   dispatch(addNewContact(newHero));
    // }
  };

  return (
    <div>
      <HeroForm addHero={addHero} />
      <HeroList />
    </div>
  );
};

export default Home;
