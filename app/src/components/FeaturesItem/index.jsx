import PropTypes from "prop-types";
import "./featuresItem.scss";

function FeaturesItem({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title} </h3>
      <p>{description}</p>
    </div>
  );
}

FeaturesItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeaturesItem;
