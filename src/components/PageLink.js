import PropTypes from "prop-types";

const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};

PageLink.propTypes = {
  link: PropTypes.node.isRequired,
  itemClass: PropTypes.node.isRequired,
};

export default PageLink;
