import  { useState } from 'react';
import { useCreateProductMutation } from '../redux/api/productsAPI';
import { useNavigate } from 'react-router-dom';
import { responseToste } from '../utils/Features';

const Addproductsform = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(1000);
  const [stock, setStock] = useState(1);
  const [photoPrev, setPhotoPrev] = useState("");
  const [photo, setPhoto] = useState();
  const [uses, setUses] = useState("");
  const [used_for, setUsed_for] = useState("");
  const [expiry_date, setExpiry_date] = useState("");
  const [discount, setDiscount] = useState();
  const [directions, setDirections] = useState("");
  const [about, setAbout] = useState("");


  const [ newProduct ] = useCreateProductMutation()
  const navigate = useNavigate();

  const changeImageHandler = (e) => {
    const file = e.target.files?.[0];

    const reader= new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoPrev(reader.result);
          setPhoto(file);
          console.log(photo)
        }
      };
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !price || stock < 0 || !category || !photo) return;

    
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("stock", stock.toString());
    formData.append("photo", photo);
    formData.append("category", category);
    formData.append("discount", discount);
    formData.append("uses", uses);
    formData.append("about", about);
    formData.append("directions", directions);
    formData.append("expiry_date", expiry_date);
    formData.append("used_for", used_for);
    
    // Log each entry in the FormData
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    const res = await newProduct( formData );
    
    responseToste(res,navigate,"/admin/products")

    

  
  };

  
  return (
    <div className="">
      <h1 className="mt-5 ml-10 text-3xl  text-zinc-500 mb-4">Add Product</h1>
      <form
        onSubmit={submitHandler}
        className="w-[90%] mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="grid grid-cols-3 gap-5">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="discount"
              className="block text-gray-700 text-sm font-bold"
            >
              Discount (%)
            </label>
            <input
              type="number"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="expiry Date"
              className="block text-gray-700 text-sm font-bold"
            >
              Expiry Date
            </label>
            <input
              type="date"
              name="expiry_date"
              value={expiry_date}
              onChange={(e) => setExpiry_date(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="usedFor"
              className="block text-gray-700 text-sm font-bold"
            >
              Used For
            </label>
            <input
              type="text"
              name="used_for"
              value={used_for}
              onChange={(e) => setUsed_for(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="stock"
              className="block text-gray-700 text-sm font-bold"
            >
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="about"
              className="block text-gray-700 text-sm font-bold"
            >
              About
            </label>
            <textarea
              name="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-2">
            <label
              htmlFor="uses"
              className="block text-gray-700 text-sm font-bold"
            >
              Uses
            </label>
            <textarea
              name="uses"
              value={uses}
              onChange={(e) => setUses(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-2">
            <label
              htmlFor="directions"
              className="block text-gray-700 text-sm font-bold"
            >
              Directions
            </label>
            <textarea
              name="directions"
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="w-full px-3 py-1 border rounded-lg"
            ></textarea>
          </div>
          <div className="mb-2">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Photo
            </label>
            
            <input required type="file"  className="w-full px-3 py-1 border rounded-lg" onChange={changeImageHandler} />

            {photoPrev && (
              <img
                src={photoPrev}
                alt="Product"
                className="mt-2 mx-auto h-32 w-32 object-cover rounded"
              />
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-10  rounded"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproductsform;
