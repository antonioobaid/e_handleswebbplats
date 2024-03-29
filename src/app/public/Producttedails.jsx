import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../../context/CardContext";

function Producttedails({}) {

  const { addToCart } = useCart();
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeImg, setActiveImg] = useState(0)
  const { id } = useParams()

  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
        setProduct(res.data);
        setLoading(false)

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="productdetails">
      {loading && <p> loading ..... </p>}
      <main className="main-productdetails">
        <section className="backgroundsbild">
          <img src="\src\assets\images\backgroundbild1.webp" alt="backgroundbild" />
        </section>
        <section className="shop-products">
          <div className="container-products">
            <div className="images-product">
              <div className="image">
                <img className="stora-bilden" src={product?.images[activeImg]} alt={product?.name} />
              </div>
              <div className="images">
                {product?.images.map((image, index) => (
                <div   key={index} onClick={() => setActiveImg(index)} >
                <img  src={image} />
                </div>
                 ))}
              </div>
            </div>
            <div className="pruduct">
              <div className="product-title">
                <h2 className="product-info">{product?.name}</h2>
                <p className="product-mera-info">{product?.description}</p>
              </div>
              <br />
              <div className="reviews">
                <div className="reviews-detials" >
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div>
                    <p className="price-product-info">{product?.price}:-</p>
                  </div>
                </div>
                <div>
                  <p className="reviews-number" >16 Reviews</p>
                </div>
              </div>
              <div className="varukorg">
                <div>
                <button className="add-to-cart" onClick={() => addToCart(product)}  > Add to cart <MdAddShoppingCart /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="descriptions" >
          <div className="descriptions-main">
            <h2 className="description-title">
              {product?.name}
            </h2>
          </div>
          <div className="description-container">
            <div>
              <p className="description-info"  >
                {product?.description}
              </p>
            </div>
            <div className="description-image">
              <img src={product?.images[0]} alt={product?.name}  />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Producttedails