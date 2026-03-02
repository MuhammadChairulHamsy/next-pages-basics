import { useRouter } from "next/router"

const DetailProductPage = () => {
    const {query} = useRouter()
  return (
    <div>
      <h1>Ini detail product page</h1>
      <p>product: {query.id}</p>
    </div>
  )
}

export default DetailProductPage
