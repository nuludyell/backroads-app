import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
};

export default Title;
