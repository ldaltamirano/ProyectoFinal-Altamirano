import ProductBox from "../Product/ProductBox"
import "./ProductListContainer.css";
import useProducts from "../../Hooks/useProduct";

export const ProductListContainer = ({ categoryId }) => {
    const { products, loading } = useProducts(-1)

    if (loading)
        return (
            <div className="spinner-border my-5 text-center" role="status">
            </div>
        )
    const p = categoryId != undefined ? products.filter(p => p.category == parseInt(categoryId)) : products.filter(p => p.category != parseInt(-1));

    return (
        <ul className="d-flex flex-wrap flex-row justify-content-center justify-content-lg-start p-0">
            {
                p.map((product) => {
                    return (
                        <ProductBox key={product.id} product={product} />
                    )
                })
            }
        </ul>
    )
};

export default ProductListContainer;