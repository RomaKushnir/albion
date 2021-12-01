import { Link } from 'react-router-dom';

const LinkButton = ({ text, path }) => {
  return (
    <Link to={path} className="ant-btn ant-btn-primary ant-btn-lg">
      {text}
    </Link>
  );
};

export default LinkButton;
