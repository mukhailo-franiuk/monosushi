import { useState } from "react";
import { Link } from "react-router-dom";

export const SmVersionHeader = () => {
    const [burgerOpened, setBurgerOpened] = useState('block');
    const [burgerClosed, setBurgerClosed] = useState('hidden');
    const [openNavigation, setOpenNavigation] = useState('hidden');
    return (
        <div className="w-full flex items-center">
            {/* Logo App */}
            <div className=" w-1/5 h-16">
                <Link to='/' className="w-full h-full flex justify-center items-center bg-blue-300">
                    <img className=" w-4/5 h-4/5" src="https://monosushi.com.ua/wp-content/uploads/2021/08/logo-mobile.svg" alt="" />
                </Link>
            </div>
            {/* Phone button */}
            <div className=" w-1/5 h-16">
                <button className=" w-full h-full flex justify-center items-center">
                    <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                </button>
            </div>
            {/* Users enter button */}
            <div className=" w-1/5 h-16">
                <button className=" w-full h-full flex justify-center items-center">
                    <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                </button>
            </div>
            {/* Burger button */}
            <div className=" w-1/5 h-16">
                <button className={` w-full h-full flex justify-center items-center ${burgerOpened}`} onClick={() => {
                    setBurgerOpened('hidden');
                    setBurgerClosed('block');
                    setOpenNavigation('block');
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
                <button className={` w-full h-full flex justify-center items-center ${burgerClosed}`} onClick={() => {
                    setBurgerOpened('block');
                    setBurgerClosed('hidden');
                    setOpenNavigation('hidden');
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </div>
            {/* Checkout link */}
            <div className=" w-1/5 h-16">
                <Link to='checkout' className="relative w-full h-full bg-blue-300 flex items-center justify-center">
                    <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="" />
                    <span className="bg-white p-1 rounded-full w-6 h-6 flex justify-center items-center right-4">0</span>
                </Link>
            </div>
            {/* hidden menu */}
            <div className={`w-1/2 h-4/5 bg-white fixed top-16 right-0 border-l-2 border-t-2 border-b-2 flex flex-col ${openNavigation}`}>
                <Link to='sauces' className="px-6 py-2 font-extrabold">Соуси</Link>
                <Link to='discount' className="px-6 py-2 font-extrabold">Акції</Link>
                <Link to='delivery' className="px-6 py-2 font-extrabold">Доставка та оплата</Link>
                <Link to='about' className="px-6 py-2 font-extrabold">Про нас</Link>
                <div className="w-full flex justify-center items-center mt-10">
                    <button className=" w-3/4 bg-blue-300 flex justify-center items-center py-4 rounded-lg">
                    <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                    <span className="pl-2">МИ ЗАТЕЛЕФОНУЄМО</span>
                    </button>
                </div>
            </div>
            {/* Bottom links */}
            <div className="fixed bottom-0 w-full h-20 flex bg-white">
                <div className=" w-1/4 h-full">
                    <Link to='product/roll' className="w-full h-full flex flex-col justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-rolls.svg" alt="" />
                        <span>Роли</span>
                    </Link>
                </div>
                <div className=" w-1/4 h-full">
                    <Link to='product/set' className="w-full h-full flex flex-col justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-sets.svg" alt="" />
                        <span>Сети</span>
                    </Link>
                </div>
                <div className=" w-1/4 h-full">
                    <Link to='product/moti' className="w-full h-full flex flex-col justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2024/04/moti.svg" alt="" />
                        <span>Моті</span>
                    </Link>
                </div>
                <div className=" w-1/4 h-full">
                    <Link to='product/drink' className="w-full h-full flex flex-col justify-center items-center">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-drinks.svg" alt="" />
                        <span>Напої</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}