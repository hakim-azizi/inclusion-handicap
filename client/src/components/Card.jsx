import PropTypes from "prop-types";

function Card({ img, alt, title, text }) {
  return (
    <section>
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <article>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    </section>
  );
}

export default Card;

Card.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
