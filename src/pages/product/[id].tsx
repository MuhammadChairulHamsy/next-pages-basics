import { fetcher } from "@/lib/swr/fetcher";
import { ProductTypeProps } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductTypeProps }) => {
  const { query, isReady } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.id}`,
  //   fetcher,
  // );
  return (
    <div>
     <DetailProduct product={product} />
    </div>
    // <div className="p-5 min-h-screen bg-slate-50">
    //   <div className="container mx-auto">
    //     <button
    //       onClick={() => window.history.back()}
    //       className="text-slate-600 hover:text-slate-900 mb-5 flex items-center gap-2"
    //     >
    //       ← Back to Products
    //     </button>

    //     {/* State Loading */}
    //     {isLoading && (
    //       <div className="flex justify-center py-20">
    //         <p className="animate-pulse text-slate-500">
    //           Loading product details...
    //         </p>
    //       </div>
    //     )}

    //     {/* State Error */}
    //     {error && (
    //       <p className="text-red-500 text-center">Gagal memuat data produk.</p>
    //     )}

    //     {/* Render Detail hanya jika data ada */}
    //     {data?.dataProduct ? (
    //       <DetailProduct product={data.dataProduct} />
    //     ) : (
    //       !isLoading &&
    //       isReady && (
    //         <p className="text-center text-slate-500">
    //           Produk tidak ditemukan.
    //         </p>
    //       )
    //     )}
    //   </div>
    // </div>
  );
};

export default DetailProductPage;

export const getServerSideProps = async ({params}: {params: {id: string}}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.id}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data.dataProduct || [],
    },
  };
};

// export const getStaticPaths = async () => {
//   const response = await fetch("http://localhost:3000/api/product");

//   const data = await response.json();

//   const paths = data.dataProduct.map((product: ProductTypeProps) => ({
//     params: {
//       id: product.id,
//     },
//   }));

//   console.log(paths);
//   return { paths, fallback: false };
// };

// export const getStaticProps = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
//   const data = await res.json();
//   console.log(data);

//   return {
//     props: {
//       product: data.dataProduct || null,
//     },
//   };
// };
