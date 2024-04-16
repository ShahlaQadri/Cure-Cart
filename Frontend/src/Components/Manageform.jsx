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
    <div className="container mx-auto h-[83vh] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-3xl  text-zinc-500  text-center mb-10">
        Manage Product
      </h2>
      <form onSubmit={handleSubmit} className=" ">
        <div className="grid grid-cols-3 gap-2">
          <div className="mb-1">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price Of Product"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Discount
            </label>
            <input
              type="text"
              name="discount"
              placeholder="Add Discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Product Used For
            </label>
            <input
              type="text"
              name="usedFor"
              placeholder="Product Used For"
              value={formData.usedFor}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Stock
            </label>
            <input
              type="text"
              name="stock"
              placeholder="Add Stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="expiryDate"
              className="block text-gray-700 text-sm font-bold"
            >
              Expiry Date
            </label>
            <input
              type="date"
              name="expiryDate"
              placeholder="Expiry Date Of Product"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="about"
              className="block text-gray-700 text-sm font-bold"
            >
              About
            </label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-1">
            <label
              htmlFor="uses"
              className="block text-gray-700 text-sm font-bold"
            >
              Uses
            </label>
            <textarea
              name="uses"
              value={formData.uses}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-1">
            <label
              htmlFor="directions"
              className="block text-gray-700 text-sm font-bold"
            >
              Directions
            </label>
            <textarea
              name="directions"
              value={formData.directions}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-1">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Photo
            </label>
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
        <div className="mb-2 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Manageform;
