import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const { push } = useRouter();
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

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
