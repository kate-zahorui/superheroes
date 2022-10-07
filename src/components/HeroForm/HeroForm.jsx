import { nanoid } from "nanoid";
import { Container } from "../";

import s from "./HeroForm.module.css";

const HeroForm = () => {
  const nicknameInputId = nanoid();
  const realNameInputId = nanoid();
  const descriptionInputId = nanoid();
  const superpowersInputId = nanoid();
  const phraseInputId = nanoid();

  return (
    <Container>
      <div>
        <form action="" className={s.form}>
          <label htmlFor={nicknameInputId} className={s.label}>
            Name
          </label>
          <input
            className={s.input}
            id={nicknameInputId}
            type="text"
            name="nickname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            //   value={nickname}
            //   onChange={handleInputChange}
          />

          <label htmlFor={realNameInputId} className={s.label}>
            Real name
          </label>
          <input
            className={s.input}
            id={realNameInputId}
            type="text"
            name="realName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={descriptionInputId} className={s.label}>
            Origin description
          </label>
          <textarea
            className={s.textarea}
            id={descriptionInputId}
            rows="3"
            name="description"
            required
          />
          <label htmlFor={superpowersInputId} className={s.label}>
            Superpowers
          </label>
          <textarea
            className={s.textarea}
            id={superpowersInputId}
            rows="3"
            name="superpowers"
            required
          />
          <label htmlFor={phraseInputId} className={s.label}>
            Catch phrase
          </label>
          <textarea
            className={s.textarea}
            id={phraseInputId}
            rows="3"
            name="phrase"
            required
          />
          <button type="submit" className={s.button}>
            Add Superhero
          </button>
        </form>
      </div>
    </Container>
  );
};

export default HeroForm;
