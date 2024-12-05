import React, { useState } from 'react';
import { FaSearch, FaVideo } from 'react-icons/fa';

const CardsPage = () => {
  const [cardData, setCardData] = useState(
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      image: 'https://via.placeholder.com/150',
      label: `Course ${index + 1}`,
      description: `This is a short description of Course ${index + 1}.`,
      price: `$${(50 + index * 5).toFixed(2)}`,
      detailDescription: `Detailed description of Course ${index + 1}. This course offers in-depth knowledge on the topic and includes valuable insights to help you learn effectively.`,
    }))
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newCard, setNewCard] = useState({
    label: '',
    description: '',
    price: '',
    detailDescription: '',
    image: '',
  });

  // Handle card click for modal
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  // Handle upload modal close
  const closeUploadModal = () => {
    setShowUploadModal(false);
    setNewCard({
      label: '',
      description: '',
      price: '',
      detailDescription: '',
      image: '',
    });
  };

  // Handle new card input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCard((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle new card submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCardData = {
      ...newCard,
      id: cardData.length + 1,
    };
    setCardData((prev) => [...prev, newCardData]); // Add the new card to the data
    closeUploadModal(); // Close the modal after submission
  };

  const filteredCards = cardData.filter((card) =>
    card.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowUploadModal(true)}
        >
          Upload Video
        </button>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Filter and Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={() => handleCardClick(card)}
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.label}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <p className="text-green-500 font-semibold mt-2">{card.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-3/4 max-w-2xl p-6 rounded-lg shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedCard.label}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex items-center">
              <img
                src={selectedCard.image}
                alt={selectedCard.label}
                className="w-48 h-48 object-cover rounded-md mr-6"
              />
              <div>
                <p className="text-gray-700">{selectedCard.detailDescription}</p>
                <div className="mt-4 flex items-center">
                  <FaVideo className="text-blue-500 text-2xl mr-2" />
                  <span className="text-blue-500 font-semibold">
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-3/4 max-w-2xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Upload New Video</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Course Title</label>
                <input
                  type="text"
                  name="label"
                  value={newCard.label}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Short Description</label>
                <textarea
                  name="description"
                  value={newCard.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Price</label>
                <input
                  type="number"
                  name="price"
                  value={newCard.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">
                  Detailed Description
                </label>
                <textarea
                  name="detailDescription"
                  value={newCard.detailDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Upload Image</label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeUploadModal}
                  className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardsPage;
