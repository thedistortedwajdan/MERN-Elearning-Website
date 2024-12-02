import { useCourses } from '../hooks/useCourses';
import CourseCard from '../components/CourseCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const { courses, loading, error } = useCourses();
  const featuredCourses = courses.slice(0, 3); // Get first 3 courses as featured

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Future with EduLearn
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover world-class courses taught by industry experts
          </p>
          <a
            href="/courses"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Courses
          </a>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          
          {loading && <LoadingSpinner />}
          
          {error && <ErrorMessage message={error} />}
          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;