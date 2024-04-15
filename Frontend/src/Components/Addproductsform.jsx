import React, { useState } from 'react';

const Addproductsform = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
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
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="discount" className="block text-gray-700 text-sm font-bold mb-2">Discount</label>
          <input
            type="text"
            id="discount"
            name="discount"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.discount}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block text-gray-700 text-sm font-bold mb-2">About</label>
          <textarea
            id="about"
            name="about"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.about}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="uses" className="block text-gray-700 text-sm font-bold mb-2">Uses</label>
          <textarea
            id="uses"
            name="uses"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.uses}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="directions" className="block text-gray-700 text-sm font-bold mb-2">Directions</label>
          <textarea
            id="directions"
            name="directions"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.directions}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="usedFor" className="block text-gray-700 text-sm font-bold mb-2">Used For</label>
          <input
            type="text"
            id="usedFor"
            name="usedFor"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.usedFor}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
          <input
            type="text"
            id="stock"
            name="stock"
            placeholder=""
            className="w-full px-3 py-1 border rounded-lg"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            className="w-full px-3 py-1 border rounded-lg"
            onChange={handlePhotoChange}
          />
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Product"
              className="mt-2 mx-auto h-32 w-32 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproductsform;
