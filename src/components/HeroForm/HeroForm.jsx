import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';

import { addNewHero, updateHero } from '../../redux/heroes/heroesOperations';
import { Btn, Container } from '../';
import s from './HeroForm.module.css';

const HeroForm = () => {
  const { items, hero, isEditModeOn } = useSelector(state => state.heroes);
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [realName, setRealName] = useState('');
  const [description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [phrase, setPhrase] = useState('');
  const [images, setImages] = useState(null);

  const nicknameInputId = nanoid();
  const realNameInputId = nanoid();
  const descriptionInputId = nanoid();
  const superpowersInputId = nanoid();
  const phraseInputId = nanoid();
  const imagesInputId = nanoid();

  useEffect(() => {
    if (!isEditModeOn) return;
    setNickname(hero.nickname);
    setRealName(hero.realName);
    setDescription(hero.originDescription);
    setSuperpowers(hero.superpowers);
    setPhrase(hero.catchPhrase);
  }, [isEditModeOn, hero]);

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

  const handleImagesInput = e => {
    const inputImages = Object.values(e.target.files);
    setImages(inputImages);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const nicknameNotFree =
      Boolean(items.find(item => item.name === nickname)) && !isEditModeOn;
    if (nicknameNotFree) {
      alert(`${nickname} is already in the list`);
      return;
    }

    const data = new FormData();

    data.append('nickname', nickname);
    data.append('realName', realName);
    data.append('originDescription', description);
    data.append('superpowers', superpowers);
    data.append('catchPhrase', phrase);

    images.forEach(item => {
      data.append('images', item, item.originalname);
    });

    switch (isEditModeOn) {
      case true:
        dispatch(updateHero({ heroId: hero._id, data }));
        break;
      case false:
        dispatch(addNewHero(data));
        break;

      default:
        return;
    }

    setNickname('');
    setRealName('');
    setDescription('');
    setSuperpowers('');
    setPhrase('');
    setImages(null);
  };

  return (
    <Container>
      <div className={s.section}>
        <Card>
          <div className={s.box}>
            <h2>Create your Superhero!</h2>
            <form
              action=""
              className={s.form}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
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
              <label htmlFor={imagesInputId} className={s.label}>
                Images
              </label>
              <input
                className={s.filesInput}
                id={imagesInputId}
                type="file"
                name="imagesInput"
                multiple
                required
                accept="image/png, image/jpeg, image/jpg, image/webp"
                onChange={handleImagesInput}
              />
              {isEditModeOn && <Btn btnType="submit" text="Save changes" />}
              {!isEditModeOn && <Btn btnType="submit" text="Add Superhero" />}
            </form>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default HeroForm;
