import React, { useState } from 'react';

const Manageform = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoPreview, setPhotoPreview] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(file);
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions like updating data here
    // For this example, let's just log the values
    console.log({ name, price, stock, photo });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold text-center mb-4">MANAGE</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
          <input
            type="text"
            id="stock"
            placeholder="Enter stock quantity"
            className="w-full px-4 py-2 border rounded-lg"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
          <input
            type="file"
            id="photo"
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handlePhotoChange}
          />
          {photoPreview && (
            <img src={photoPreview} alt="Product" className="mt-2 h-32 w-32 mx-auto" />
          )}
        </div>
        <div className="mb-2">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded mt-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Manageform;
