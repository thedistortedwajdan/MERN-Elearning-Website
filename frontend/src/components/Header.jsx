import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            EduLearn
          </Link>
        </div>
        <div className="flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-indigo-600">
            Courses
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;