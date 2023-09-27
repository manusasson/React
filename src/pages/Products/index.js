import { useEffect, useState } from "react"
import { getProducts } from "../../mock"

import { getRate } from "../../utils/getRate"
import { Link } from 'react-router-dom'
import '../../css/products.css'

const Products = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      setLoading(true)
      getProducts()
        .then((products) => setProducts(products))
        .catch(err => console.log({ err }))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <p className="text-2xl max-w-5xl m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center">Loading products ...</p>

    return <section className="container">
        {products.map(({ id, title,
                    price,
                    category,
                    rating,
                    image}) => (
            <article key={id} className="card">
                <picture className="picture">
                <img src={image} alt={title}/>
                </picture>
                <div className="flex flex-col gap-2 py-8">
                   <h3 className="font-bold text-2xl">{title}</h3>
                   <span className="bg-indigo-700 text-white self-start py-0.5 px-3 rounded-md text-sm">{category}</span>
                   <p><span className="text-yellow-600">{getRate(rating.rate)}</span> / {rating.count} reviews</p>
                   <strong className="mb-4">${price}</strong>
                   <Link to={`/products/${id}`} className="border-2 border-indigo-700 text-indigo-700 px-4 py-0.5 w-[120px] rounded-md text-sm">
                    View more ...
                   </Link>
                </div>
            </article>
        ))}
    </section>
}

export default Products