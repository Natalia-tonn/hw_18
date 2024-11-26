import { useForm } from "react-hook-form";

import snapchat from "../../assets/icons/snapchat.svg";
import facebook from "../../assets/icons/facebook.svg.svg"
import twitter from "../../assets/icons/twitter.svg";
import styles from "./Contacts.module.css";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className={styles.contactsSection}>
          <div className={styles.contactsInfo}>
          <h1>Контакты</h1>
          <ul>
            <li>8 800 000 00 00</li>
            <li>emailexample@email.com</li>
          </ul>
          <hr className={styles.separator} />
        </div>
      <div className={styles.contactsContainer}>
      

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputsGroup}>
              <input
                placeholder="Ваш email"
                className={styles.inputField}
                {...register("email", { required: "поле обязательно для заполнения" })}
              />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}

              <input
                placeholder="Ваше имя"
                className={styles.inputField}
                {...register("name", { required: "поле обязательно для заполнения" })}
              />
              {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>

            <textarea
              placeholder="Введите сообщение"
              className={styles.textAreaField}
              {...register("message", { required: "поле обязательно для заполнения" })}
            />
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}

            <div className={styles.buttonContainer}>
  <button type="submit" className={styles.submitButton}>
    Отправить
  </button>
</div>
          </form>
        </div>

        <div className={styles.socialMedia}>
          <h2>Найдите нас:</h2>
          <div className={styles.socialIcons}>
            <a href="https://snapchat.com">
              <img src={snapchat} alt="snapchat" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://x.com">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
