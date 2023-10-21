
import { useParams } from "react-router-dom";
import useCategory from "../Hooks/useCategory";
import ProductListContainer from "../Components/ProductListContainer/ProductListContainer";
import Generic from "./Generic";

export default function CategoryStore() {
    const { categoryId } = useParams();
    const { category, loading } = useCategory(categoryId);

    if (loading)
        return (
            <div className="spinner-border my-5 text-center" role="status">
            </div>
        )


    return (
        <>
            {
                category != undefined ? (
                    <div className="container">
                        <section className="col-md-12 my-4 my-md-5 d-flex flex-column align-items-center justify-content-between">
                            <h2 className="d-block text-center">Estos son nuestros cursos de {category.category} </h2>
                            <ProductListContainer categoryId={parseInt(categoryId)} />
                        </section>
                    </div>
                ) : (<Generic />)
            }
        </>

    )
}