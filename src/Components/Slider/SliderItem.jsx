
import "./SliderItem.css"

export default function SliderItem(obj) {
    const { banner } = obj;
    return (
        <div>
            <img src={banner} alt="banner" className='img-fluid ' />
        </div>
    )
}