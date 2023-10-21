import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import Generic from "../../Pages/Generic";
import Banner from "../../assets/banners/bannerProduct.jpg"
import ItemCount from "../common/ItemCount";

import Ericsson from "../../assets/brands/ericsson.svg"
import Hp from "../../assets/brands/hewlett_packard_enterprise.svg"
import Samsung from "../../assets/brands/samsung.svg"
import Volkswagen from "../../assets/brands/volkswagen.svg"

import "./ProductDetail.css"
import useProducts from "../../Hooks/useProduct";

const ProductDetail = () => {
    const { products, loading } = useProducts(-1);
    const { productId } = useParams();
    const { addToCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);

    const handleAddToCart = (count) => {
        const { id, thumbnail, title, price } = product;

        setQuantityInCart(count);
        if (count > 0) {
            addToCart({
                id, title, thumbnail, price, quantity: count
            })
        }
    };

    if (loading)
        return (
            <>
                <div className="spinner-border my-5" role="status">
                </div>
            </>
        )
    const product = products.find(p => p.id == parseInt(productId));

    return (
        product != undefined ? (
            <>
                <img src={Banner} alt="banner producto" className="img-fluid" />
                <div className="d-flex flex-column justify-content-between align-items-start flex-md-row container my-5">
                    <aside className="d-flex flex-column justify-content-between col-12 col-md-5 col-lg-4 sticky-lg-top container">
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <img src={product.thumbnail} alt="banner producto" className="w-100 img-img-fluid my-2 mt-4" />
                            <article className="col-12">
                                <p className="fs-6 pt-3">Seleccionarcantidad de vacantes:</p>
                                <ItemCount stock={product.stock} initial={quantityInCart} onAdd={handleAddToCart} />
                            </article>
                        </div>
                    </aside>
                    <section className="d-flex flex-column justify-content-between align-items-start col-12 col-md-7 col-lg-8 container">
                        <article className="d-flex flex-column justify-content-start align-items-start mt-4">
                            <span className='d-none'>Creado por: {product.createdBy}</span>
                            <span className='d-none '>{product.students} estudiantes</span>
                            <h2 className="fs-2 fw-bold mb-2"> {product.title} </h2>
                            <p className="fs-5 my-2"> {product.shortDescription} </p>
                            <div className="d-flex flex-row align-items-center justify-content-fa-users-between">
                                <span className="price text-black fs-1 pe-3">U$S {product.price}</span>
                                <div className="d-flex flex-column">
                                    <span className='d-lg-block fs-6 mt-2'>Creado por: {product.createdBy}</span>
                                    <span className='d-lg-block fs-6 mb-2'>{product.students} estudiantes</span>
                                </div>
                            </div>

                        </article>
                        <article className="d-flex flex-column justify-content-start align-items-start">
                            <h3 className="fs-3 fw-bold my-3 mb-2">Descripcion</h3>
                            <p className="fs-5 my-2">
                                {product.description}
                            </p>
                        </article>

                        <article className="courseClients">
                            <div className="d-flex flex-column align-items-start">
                                <p className="fs-3">Estos clientes usan estas tecnologias</p>
                                <div className="brands d-flex align-items-start justify-content- flex-wrap">
                                    <img src={Ericsson} alt="Ericsson" />
                                    <img src={Hp} alt="Hp" />
                                    <img src={Samsung} alt="Samsung" />
                                    <img src={Volkswagen} alt="Volkswagen" />
                                </div>
                            </div>
                        </article>
                    </section>
                </div >
            </>
        ) : (<Generic />)
    )

};

export default ProductDetail;