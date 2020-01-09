import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import * as Input from '../Input';
import styles from './Form.module.css';

export function Form() {
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const shouldDisplayGender = i18n.language !== 'de';
  const shouldDisplayNewsletter = i18n.language !== 'en';

  const validationSchema = yup.object().shape({
    email: yup.string()
      .email(t('invalid email'))
      .required(t('required')),
    gender: yup.string(),
    confirmAge: yup.boolean()
      .oneOf([true], t('required')),
    newsletter: yup.boolean(),
  });

  const {
    register, handleSubmit, errors,
  } = useForm({ validationSchema });

  const onSubmit = (data) => {
    // submit should be here
    Promise.resolve()
      .then(() => setLoading(true))
      .then(() => console.log(data))
      .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
      .then(() => setComplete(true))
      .finally(() => setLoading(false));
  };

  return (
    <section className={[styles.wrapper, loading ? styles.loading : null].join(' ')}>
      {complete ? (
        <h2>{t('Thank you.')}</h2>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

          <div className={styles.row}>
            <Input.Text
              ref={register}
              label={t('Your e-mail')}
              error={errors.email}
              id="email"
              type="email"
            />
          </div>

          {shouldDisplayGender && (
          <div className={styles.row}>
            <Input.RadioGroup
              ref={register}
              label={t('Select your gender')}
              id="gender"
              values={[
                t('Male'), t('Female'), t('Non-binary'),
              ]}
            />
          </div>
          )}

          <div className={styles.row}>
            <Input.Checkbox
              ref={register}
              label={t('I’m above a certain age')}
              error={errors.confirmAge}
              id="confirmAge"
            />

            {shouldDisplayNewsletter && (
            <Input.Checkbox
              ref={register}
              label={t('I want to receive a newsletter')}
              id="newsletter"
            />
            )}
          </div>

          <Input.Button
            type="submit"
            label={t('Submit')}
          />
        </form>
      )}
    </section>
  );
}

export default Form;
