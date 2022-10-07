import { nanoid } from "nanoid";

// import s from "./HeroForm.module.css";

const HeroForm = () => {
  const nicknameInputId = nanoid();
  const realNameInputId = nanoid();
  const descriptionInputId = nanoid();
  const superpowersInputId = nanoid();
  const phraseInputId = nanoid();

  return (
    <div>
      <form action="">
        <label htmlFor={nicknameInputId}>Name</label>
        <input
          //   className={s.input}
          id={nicknameInputId}
          type="text"
          name="nickname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          //   value={nickname}
          //   onChange={handleInputChange}
        />

        <label htmlFor={realNameInputId}>Real name</label>
        <input
          //   className={s.input}
          id={realNameInputId}
          type="text"
          name="realName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={descriptionInputId}>Origin description</label>
        <textarea
          //   className={s.input}
          id={descriptionInputId}
          rows="3"
          name="description"
          required
        />
        <label htmlFor={superpowersInputId}>Superpowers</label>
        <textarea
          //   className={s.input}
          id={superpowersInputId}
          rows="3"
          //   type="text"
          name="superpowers"
          required
        />
        <label htmlFor={phraseInputId}>Catch phrase</label>
        <textarea
          //   className={s.input}
          id={phraseInputId}
          rows="3"
          //   type="text"
          name="phrase"
          required
        />
        <button type="submit">Add Superhero</button>
      </form>
    </div>
  );
};

export default HeroForm;
