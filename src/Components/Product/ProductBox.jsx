import "./ProductBox.css"
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';


const ProductBox = ({ product, children }) => {
    const { id, thumbnail, title, createdBy, students, price } = product;

    return (
        <li key={id} className='d-flex flex-column align-items-start productsLi my-4 mx-3'>
            <img
                src={thumbnail}
                className="img-thumbnail"
            />
            <h3><strong>{title.length > 50 ? title.slice(0, 50).trim() + "..." : title}</strong></h3>
            <span className='info'>Creado por: {createdBy}</span>
            <span className='info'>{students} estudiantes</span>
            <div className='d-flex justify-content-between align-items-center flex-row container cartAdd my-4'>
                <span className='price'>U$S {price}</span>
                <Link className="btn btn-primary" to={`/products/${id}`} element={<ProductDetail key={id} product={product}></ProductDetail>}>Mas info</Link>
            </div>
        </li>

    );
};

export default ProductBox;