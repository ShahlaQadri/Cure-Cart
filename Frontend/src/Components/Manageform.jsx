import React, { useState } from 'react';

const Manageform = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    discount: '',
    about: '',
    uses: '',
    directions: '',
    expiryDate: '',
    usedFor: '',
    stock: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">MANAGE</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="discount" className="block text-gray-700 text-sm font-bold">Discount</label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="about" className="block text-gray-700 text-sm font-bold">About</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-2">
            <label htmlFor="uses" className="block text-gray-700 text-sm font-bold">Uses</label>
            <textarea
              name="uses"
              value={formData.uses}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-2">
            <label htmlFor="directions" className="block text-gray-700 text-sm font-bold">Directions</label>
            <textarea
              name="directions"
              value={formData.directions}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-2">
            <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="usedFor" className="block text-gray-700 text-sm font-bold">Used For</label>
            <input
              type="text"
              name="usedFor"
              value={formData.usedFor}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="stock" className="block text-gray-700 text-sm font-bold">Stock</label>
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="photo" className="block text-gray-700 text-sm font-bold">Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handlePhotoChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
            {formData.photo && (
              <img
                src={formData.photo}
                alt="Product"
                className="mt-2 mx-auto h-32 w-32 object-cover rounded"
              />
            )}
          </div>
        </div>
        <div className="mb-2">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Manageform;
