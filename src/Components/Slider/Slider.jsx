// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Slider.css";
import Banner1 from "../../assets/banners/banner1.jpg"
import Banner2 from "../../assets/banners/banner2.jpg"
import Banner3 from "../../assets/banners/banner3.jpg"
import SliderItem from './SliderItem';

export default function Slider() {
    return (
        <div className="slider pt-lg-4 pt-3">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderItem banner={Banner1} title={"¿Has pedido un deseo?"} description={"Es hora de cumplir objetivos. Consigue los cursos de tu lista de deseos y da el primer paso para alcanzar tus objetivos."} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem banner={Banner2} title={"Obtén grandes ventajas"} description={"Únete a nuestra lista de correo electrónico para recibir ofertas especiales, recomendaciones de cursos personalizadas y mucho más."} />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem banner={Banner3} title={"La oferta termina hoy"} description={"Cursos desde solo 11,99 US$. Aprende los temas que te interesan de la mano de expertos del mundo real."} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}