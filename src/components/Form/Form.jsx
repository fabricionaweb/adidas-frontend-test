import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import * as Input from '../Input';
import styles from './Form.module.css';

export function Form() {
  const { t } = useTranslation();

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
    // fake submit here
    console.log(data);
  };

  return (
    <section className={styles.wrapper}>
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

        <div className={styles.row}>
          <Input.Checkbox
            ref={register}
            label={t('I’m above a certain age')}
            error={errors.confirmAge}
            id="confirmAge"
          />

          <Input.Checkbox
            ref={register}
            label={t('I want to receive a newsletter')}
            id="newsletter"
          />
        </div>

        <Input.Button
          type="submit"
          label={t('Submit')}
        />
      </form>
    </section>
  );
}

export default Form;
