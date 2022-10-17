import React, { useEffect, useState } from 'react'
import "./Home.css";
import Product from "./Product";

const Home = () => {

    const [img, setImg] = useState(true);
    
    useEffect(() => {
        const toggleImg = () => {
            if(img) {
                setTimeout(() => {
                    setImg(false);
                }, 3000)
            } 
            if (img === false) {
                setTimeout(() => {
                    setImg(true)
                }, 3000)
            }
        }
        toggleImg();
    }, [img]);

    return (
        <div className="home">
            <div className="home__container">
                <div className="image__div"> 
                    <img className="home__image" alt="" 
                        src={img ? "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                                : "https://images.freekaamaal.com/post_images/1622787119.webp"}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="24234545"
                        title="The lean startup" 
                        price={29.88} image="./startup.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="9803200"
                        title="Kenwood kMix stand mixer for baking, Stylish kitchen mixer with 
                        K-beater, Dough Hook and whisk , 5 litre Glass bowl" 
                        price={239.0} image="https://m.media-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg" 
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="42938742" 
                        title="Amazon Echo (3rd Generation) | Smart Speaker with alexa, Charcoal Fabric" 
                        price={98.99}
                        rating={5}
                        image="https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODgzNHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDgxLzkyMTY2NjQxNzQ2MjIuanBnfDQxNjE4MmM1ZDBjY2E5N2JhODk5MzAzNDE1MTQxY2E1NDU1ODUxOWQxNGQxNjAyN2NmYmZiZmEwYTMwNDAxM2M"
                    />
                    <Product 
                        id="023470" 
                        title="New Apple iPad Pro (12.9-inch , Wi-fi, 128GB) - Silver (4th Generation)" 
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_SL1500_.jpg" 
                    />
                    <Product 
                        id="0389230"
                        title="Apple watch series 4"
                        price={199.99}
                        rating={3}
                        image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FU6D2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1555353638673" 
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="0389230"
                        title="Samsung 49' Curved LED Gaming monitor"
                        price={199.99}
                        rating={3}
                        image="https://images.samsung.com/is/image/samsung/in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-frontwhite-335279681?$720_576_PNG$" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
