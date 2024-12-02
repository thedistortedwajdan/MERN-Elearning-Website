const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About EduLearn</h1>
          <p className="text-xl text-gray-600">Empowering minds through quality education since 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At EduLearn, we believe that education should be accessible to everyone. 
              Our mission is to provide high-quality online learning experiences that 
              empower individuals to achieve their personal and professional goals.
            </p>
            <p className="text-gray-600">
              We collaborate with industry experts and leading educators to create 
              comprehensive courses that combine theoretical knowledge with practical 
              skills, ensuring our students are well-prepared for real-world challenges.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655" 
              alt="Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-gray-600">Courses Available</div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Committed to providing the highest quality education</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and teaching methods</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">Making education available to everyone</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive learning environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;