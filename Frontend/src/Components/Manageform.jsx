import { useEffect, useState } from 'react';
import { useUpdateProductMutation,useDeleteProductMutation } from '../redux/api/productsAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { responseToste } from '../utils/Features';
import { IoTrashBin } from "react-icons/io5";


const Manageform = ({product}) => {
  const [formData, setFormData] = useState();
  const navigate = useNavigate()
  const {id} = useParams()
  // console.log(id)
  // console.log("product in form",product)
  const[updateProduct] = useUpdateProductMutation()
  const [deleteProduct]=useDeleteProductMutation()

  console.log("product in form",formData?.expiry_date)
  useEffect(() => {
    setFormData(product)
    
  
    
  }, [product])
  

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(e);
    console.log("id after submission" ,id)
    const res = await updateProduct({formData,id})
    responseToste(res,navigate,"/admin/products")
    console.log(res)
  };

  const deleteHandler =async ()=>{
    console.log("deleted")
    const res = await deleteProduct(id)
    responseToste(res,navigate,"/admin/products")
    
  }

  return (
    <div className="container mx-auto h-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <button onClick={deleteHandler} className="h-9 w-9 absolute md:top-[152px] right-10 md:right-6
       rounded-full bg-[#C70908] text-white text-xl flex items-center justify-center ml-[100px]">
                <IoTrashBin />

              </button>
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
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData?.name}
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
              value={formData?.category}
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
              value={formData?.price}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold"
            >
              Discount (%)
            </label>
            <input
              type="text"
              name="discount"
              value={formData?.discount}
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
              name="used_for"
              value={formData?.used_for}
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
              value={formData?.stock}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="expiry_date"
              className="block text-gray-700 text-sm font-bold"
            >
              Expiry Date
            </label>
            <input
              type="date"
              name="expiry_date"
              value={formData?.expiry_date}
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
              value={formData?.about}
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
              value={formData?.uses}
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
              value={formData?.directions}
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
            {formData?.photo && (
              <img
                src={formData?.photo}
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
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Manageform;
