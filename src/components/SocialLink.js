import PropTypes from "prop-types";

export const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  href: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  itemClass: PropTypes.node.isRequired,
};
