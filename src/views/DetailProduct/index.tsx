import { ProductTypeProps } from "@/types/product.type";

const DetailProduct = ({product}: {product: ProductTypeProps}) => {
  return (
   <div className="max-w-xl mx-auto mt-10">
      <div className="flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        {/* Bagian Gambar */}
        <div className="w-full aspect-square bg-slate-100">
          <img
            src={product?.image && product?.image}
            alt={product?.name}
            className="w-full object-cover"
          />
        </div>

        {/* Bagian Konten */}
        <div className="flex flex-col grow p-5">
          <h2 className="text-lg font-semibold text-slate-800 line-clamp-2 mb-2">
            {product?.name}
          </h2>
          <p className="text-sm text-slate-500 mb-4">{product?.category}</p>

          <div className="mt-auto flex justify-between items-center">
            <span className="text-xl font-bold text-slate-900">
              ${product?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
