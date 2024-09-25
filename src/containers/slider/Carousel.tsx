import { useState } from "react";
import { Link } from "react-router-dom";
export const Caroseul = () => {
    const [box1 , setBox1] = useState('block');
    const [box2 , setBox2] = useState('hidden');
    const [box3 , setBox3] = useState('hidden');
    const [box4 , setBox4] = useState('hidden');

    const Box01 = () => {
        setBox1('block');
        setBox2('hidden');
        setBox3('hidden');
        setBox4('hidden');
    }
    const Box02 = () => {
        setBox1('hidden');
        setBox2('block');
        setBox3('hidden');
        setBox4('hidden');
    }
    const Box03 = () => {
        setBox1('hidden');
        setBox2('hidden');
        setBox3('block');
        setBox4('hidden');
    }
    const Box04 = () => {
        setBox1('hidden');
        setBox2('hidden');
        setBox3('hidden');
        setBox4('block');
    }
    return (
        <div id="indicators-carousel" className="w-full">
            <div className="overflow-hidden h-56 md:h-96 flex">
                <div className={`w-full h-full duration-700 ease-in-out flex justify-around items-center ${box1}`} id="box-01">
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2024/08/monosushi_montazhnaya-oblast-1-kopyya.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2024/04/852h400_2_montazhnaya-oblast-1.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                </div>
                <div className={`w-full h-full duration-700 ease-in-out flex justify-around items-center ${box2}`} id="box-02">
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2022/12/rol-tyzhnya.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2022/12/den-narodzhennya-.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                </div>
                <div className={`w-full h-full duration-700 ease-in-out flex justify-around items-center ${box3}`} id="box-02">
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2022/12/5-tyj-v-podarunok-.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2022/12/samovyviz.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                </div>
                <div className={`w-full h-full duration-700 ease-in-out flex justify-around items-center ${box4}`} id="box-02">
                    <Link to={`/`} className="w-2/5 h-full rounded-xl">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2022/12/fotomarafon-.jpg" className="w-full h-full rounded-xl" alt="..." />
                    </Link>
                </div>
            </div>
            <div className="w-28 my-4 border flex justify-between items-center rtl:space-x-reverse bottom-5 mx-auto">
                <button type="button" className="w-4 h-4 rounded-full bg-blue-400" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"
                onClick={Box01}
                ></button>
                <button type="button" className="w-4 h-4 rounded-full bg-blue-400" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"
                onClick={Box02}
                ></button>
                <button type="button" className="w-4 h-4 rounded-full bg-blue-400" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"
                onClick={Box03}
                ></button>
                <button type="button" className="w-4 h-4 rounded-full bg-blue-400" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"
                onClick={Box04}
                ></button>
            </div>
        </div>

    );
}