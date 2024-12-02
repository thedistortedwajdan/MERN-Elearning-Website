import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useCourses } from '../hooks/useCourses';
import { useCategories } from '../hooks/useCategories';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { courses, loading: coursesLoading, error: coursesError } = useCourses();
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

  if (coursesLoading || categoriesLoading) {
    return <LoadingSpinner />;
  }

  if (coursesError) {
    return <ErrorMessage message={coursesError} />;
  }

  if (categoriesError) {
    return <ErrorMessage message={categoriesError} />;
  }

  const filteredCourses = courses
    .filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(course => 
      selectedCategory === 'all' ? true : course.category === selectedCategory
    );

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter 
            categories={[{ id: 'all', name: 'All Courses' }, ...categories]}
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;