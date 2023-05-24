import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Profile.module.scss";

export default function Profil({ name, image, created_at, url }) {
  const date = new Date(created_at).toLocaleDateString("en-GB");

  return (
    <section className={styles.profil}>
      <div className={styles.profil__picture}>
        <img
          src={image}
          alt={`Profile picture of ${name}, a developer and a user on Github`}
        />
      </div>
      <div className={styles.profil__container}>
        <div className={styles.profil__title}>
          <h1>
            {`${name}'s`} <span>GitHub dashboard</span>
          </h1>
          <p>{`active since ${date}`}</p>
        </div>
        <Button external={true} url={url} type={'secondary'}>
          View Github profile
        </Button>
      </div>
    </section>
  );
}

Profil.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
