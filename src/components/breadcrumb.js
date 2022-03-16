import '../styles/components/breadcrumb.scss';
import { Link } from "react-router-dom";

const Breadcrumb = ({ category }) => {
  console.log(category);
  return (
    <ul className="breadcrumb">
      <li className="breadcrumb__item">
        <Link to={`/items?q=${category?.name}`}>{category?.name}</Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
