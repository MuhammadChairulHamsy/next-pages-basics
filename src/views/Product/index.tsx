import SkeletonCard from "@/components/fragments/SkeletonCard";
import type { ProductTypeProps } from "@/types/product.type";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductViewProps {
  products: ProductTypeProps[];
  error: string | null;
  //   isLoading: boolean;
}

const ProductView = ({ products, error }: ProductViewProps) => {
  return (
    <div className="container min-h-screen">
      <div className="my-5">
        <h1 className="text-2xl text-center font-bold text-slate-900">
          Ini Product page
        </h1>
      </div>

      {/* 5. Tampilkan pesan error jika ada */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {/* 6. Tambahkan Loading State jika perlu */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-6xl">
          {products.length === 0 && !error
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : products.map((item: ProductTypeProps) => (
                <Link href={`/product/${item.id}`}
                  key={item.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  >
                  {/* Bagian Gambar */}
                  <div className="w-full aspect-square bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full object-cover"
                    />
                  </div>

                  {/* Bagian Konten */}
                  <div className="flex flex-col grow p-5">
                    <h2 className="text-lg font-semibold text-slate-800 line-clamp-2 mb-2">
                      {item.name}
                    </h2>
                    <p className="text-sm text-slate-500 mb-4">
                      {item.category}
                    </p>

                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xl font-bold text-slate-900">
                        ${item.price.toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
