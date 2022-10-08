import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Container } from '../';

import s from './HeroForm.module.css';

const HeroForm = ({ addHero }) => {
  const [nickname, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [phrase, setPhrase] = useState('');

  const nicknameInputId = nanoid();
  const realNameInputId = nanoid();
  const descriptionInputId = nanoid();
  const superpowersInputId = nanoid();
  const phraseInputId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'realName':
        setRealName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'superpowers':
        setSuperpowers(value);
        break;
      case 'phrase':
        setPhrase(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addHero(nickname, realName, description, superpowers, phrase);

    setNickname('');
    setRealName('');
    setDescription('');
    setSuperpowers('');
    setPhrase('');
  };

  return (
    <Container>
      <div>
        <form action="" className={s.form} onSubmit={handleSubmit}>
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
            value={nickname}
            onChange={handleInputChange}
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
            value={realName}
            onChange={handleInputChange}
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
            value={description}
            onChange={handleInputChange}
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
            value={superpowers}
            onChange={handleInputChange}
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
            value={phrase}
            onChange={handleInputChange}
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
