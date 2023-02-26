const { Link } = require('react-router-dom');

const NotFound = () => {
  return (
    <div>
      <h2>This page coulden't be found </h2>
      <Link to="/">Go to homepage</Link>
    </div>
  );
};
export default NotFound;
