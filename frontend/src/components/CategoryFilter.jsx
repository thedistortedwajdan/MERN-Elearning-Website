const CategoryFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selected === category.id
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;