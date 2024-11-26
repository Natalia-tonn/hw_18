import styles from "./Footer.module.css"
import facebookLogo from "../../assets/icons/facebook.svg"
import twitterLogo from "../../assets/icons/twitter_outlined.svg";
import instagramLogo from "../../assets/icons/instagram_outlined.svg"
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_left}>
          <h3>Контакты</h3>
          <p>8 800 000 00 00
            <br />
            emailexample@email.com
          </p>
          <p className={styles.text_sneak}>2024 Сникер-магазин. Все права защищены</p>
        </div>
        
        <div className={styles.footer_right}>
          <div className={styles.fight_icons}>
            <a href="https://facebook.com"><img src={facebookLogo} alt="facebookLogo" /></a>
            <a href="https://twitter.com"><img src={twitterLogo} alt="twitterLogo" /></a>
            <a href="https://instagram.com"><img src={instagramLogo} alt="instagramLogo" /></a>
            
            <div className={styles.email_input}>
              <label htmlFor="email" className={styles.email_label}>Введите свой email: </label>
              <input
                type="email"
                id="email"
                className={styles.email_input}
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;