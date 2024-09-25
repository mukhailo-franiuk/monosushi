import { Link } from "react-router-dom";
import { Caroseul } from "../../../containers/slider/Carousel";
export const HomePage = () => {
    document.title = `ᐷ Суші Львів ⚡️ Доставка суші від MonoSushi`;
    return (
        <div className="w-full flex flex-col">
            <div className="h-96 w-full mx-auto my-10">
                <Caroseul />
            </div>
            <div className="bg-blue-300 h-36 my-10">
                <div className="w-4/5 mx-auto h-full flex justify-between items-center">
                    <div className="w-1/3 border-white border-r-2 h-4/5 flex justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/mn-delivery-img.svg" alt="" className="w-2/5 h-4/5" />
                        <Link to={`/delivery`} className="bg-white h-1/2 flex justify-center items-center px-4 rounded-xl border-2 border-white hover:bg-blue-300">Зона доставки</Link>
                    </div>
                    <div className="w-1/3 border-white border-r-2 h-4/5 flex justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/mono-supermen.svg" alt="" className="w-2/5 h-4/5" />
                        <p>Середнній час доставки в зеленій зоні <b className="font-black">00:43:00</b></p>
                    </div>
                    <div className="w-1/3 h-4/5 flex justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/mono-bonus.svg" alt="" className="w-2/5 h-4/5" />
                        <div className="flex flex-col">
                            <p>Наш графік роботи</p>
                            <p>Працюємо з <b className="font-black">11:00</b> до <b className="font-black">22:30</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}