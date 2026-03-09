import { ProductTypeProps } from "@/types/product.type";
import ProductView from "@/views/Product";


 const ProductPage = ({products}: { products: ProductTypeProps[] }) => {
  return (
    <div>
      <ProductView products={products} error={null}/>
    </div>
  );
};

export default ProductPage;


export const getStaticProps = async () => {
     const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  console.log(data);
  

  return {
    props: {
      products: data.dataProduct || [],
    },
    // revalidate: 10
  };
}
