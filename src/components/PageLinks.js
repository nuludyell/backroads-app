import { pageLinks } from "../data";
import PageLink from "./PageLink";
import PropTypes from "prop-types";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

PageLinks.propTypes = {
  parentClass: PropTypes.node.isRequired,
  itemClass: PropTypes.node.isRequired,
};

export default PageLinks;
