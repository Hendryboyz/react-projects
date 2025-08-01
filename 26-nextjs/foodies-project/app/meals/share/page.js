'use client';
import {useFormState} from "react-dom";

import styles from './page.module.css';
import ImagePicker from "@/components/meals/image-picker";
import {shareMeal} from "@/lib/action";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  const [formState, formAction] = useFormState(shareMeal, {message: null});
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
          <p>Or any other meal you feel needs sharing!</p>
        </h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name"/>
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required/>
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required/>
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required/>
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {formState.message && <p>{formState.message}</p>}
          <p className={styles.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
