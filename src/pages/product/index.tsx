import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductTypeProps = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState<ProductTypeProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await fetch("/api/product");

        if (!response) throw new Error("Gagal mengambil data");
        const result = await response.json();
        setProducts(result.dataProduct || result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    fetchDataProduct();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-slate-900">Ini Product page</h1>

      {/* 5. Tampilkan pesan error jika ada */}
      {error && <p className="text-red-500">{error}</p>}

      {/* 6. Tambahkan Loading State jika perlu */}
      {products.length === 0 && !error ? (
        <p>Loading products...</p>
      ) : (
        <ul className="mt-4 list-disc pl-5 text-slate-900">
          {products.map((item) => (
            <li key={item.id}>
              {item.name} -{" "}
              <span className="text-slate-500">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
