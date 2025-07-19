import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";
import { FaShieldAlt } from "react-icons/fa";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Garantía */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
          <span className="text-dodgerBlue text-3xl">
            <FaShieldAlt />
          </span>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">2 Years Warranty</h3>
            <p className="text-gray-500 text-sm">Quality guaranteed</p>
          </div>
        </div>
        
        {/* Envío gratis */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
          <span className="text-green-500 text-3xl">
            <MdLocalShipping />
          </span>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">Free Shipping</h3>
            <p className="text-gray-500 text-sm">On all orders</p>
          </div>
        </div>
        
        {/* Política de devoluciones */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
          <span className="text-red-500 text-3xl">
            <CgRedo />
          </span>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">30-Day Returns</h3>
            <p className="text-gray-500 text-sm">Easy and free returns</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BannerBottom;
