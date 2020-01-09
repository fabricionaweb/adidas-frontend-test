import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as Input from '../Input';
import styles from './Form.module.css';

const validationSchema = yup.object().shape({
  email: yup.string().email('invalid email').required('required'),
  gender: yup.string(),
  confirmAge: yup.boolean().oneOf([true], 'required'),
  newsletter: yup.boolean(),
});

export function Form() {
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
            label="Your e-mail"
            error={errors.email}
            placeholder="you@company.com"
            id="email"
            type="email"
          />
        </div>

        <div className={styles.row}>
          <Input.RadioGroup
            ref={register}
            label="Select your gender"
            id="gender"
            values={[
              'Male', 'Female', 'Non-binary',
            ]}
          />
        </div>

        <div className={styles.row}>
          <Input.Checkbox
            ref={register}
            label="I’m above a certain age"
            error={errors.confirmAge}
            id="confirmAge"
          />

          <Input.Checkbox
            ref={register}
            label="I want to receive a newsletter"
            id="newsletter"
          />
        </div>

        <Input.Button
          type="submit"
          label="Submit"
        />
      </form>
    </section>
  );
}

export default Form;
