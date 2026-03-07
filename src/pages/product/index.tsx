import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export type ProductTypeProps = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
 
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  return (
    <div>
      <ProductView
        products={data?.dataProduct || []}
        error={error ? "Gagal memuat data" : null}
      />
    </div>
  );
};

export default ProductPage;
