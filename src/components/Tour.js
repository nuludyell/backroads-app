import PropTypes from "prop-types";

export const Tour = ({
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>
            {duration} day{duration > 1 ? "s" : ""}
          </p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  image: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  info: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
  duration: PropTypes.node.isRequired,
  cost: PropTypes.node.isRequired,
};
