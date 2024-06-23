
import { useState } from "react";
import { Link } from "react-router-dom";

import { EnterUsers } from "../form/EnterUsers";

export const XsVersionHeader = () => {
    const [burgerOpened, setBurgerOpened] = useState('block');
    const [burgerClosed, setBurgerClosed] = useState('hidden');
    const [openNavigation, setOpenNavigation] = useState('hidden');
    const [openForms, setOpenFotms] = useState('hidden');

    const [enterFotm , setEnterForm] = useState('block');
    const [regForm , setRegForm] = useState('hidden');
    const [rememberForm , setRememberForm] = useState('hidden');

    const closeAllWindow = () => {
        setBurgerOpened('block');
        setBurgerClosed('hidden');
        setOpenNavigation('hidden');
        setOpenFotms('hidden');
    }
    return (
        <div className="w-full flex items-center">
            {/* Logo App */}
            <div className=" w-1/5 h-14">
                <Link to='/' className="w-full h-full flex justify-center items-center bg-blue-300" onClick={closeAllWindow}>
                    <img className=" w-4/5 h-4/5" src="https://monosushi.com.ua/wp-content/uploads/2021/08/logo-mobile.svg" alt="" />
                </Link>
            </div>
            {/* Phone button */}
            <div className=" w-1/5 h-14">
                <button className=" w-full h-full flex justify-center items-center">
                    <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                </button>
            </div>
            {/* Users enter button */}
            <div className=" w-1/5 h-14">
                <button className=" w-full h-full flex justify-center items-center" onClick={() => {
                    setOpenFotms('block');
                    setBurgerClosed('hidden');
                    setBurgerOpened('block');
                    setOpenNavigation('hidden');
                }}>
                    <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                </button>
            </div>
            {/* Users form block */}
            <div className={`absolute top-16 w-full bg-transparent bg-gray-600 flex flex-col items-center ${openForms}`}>
                <div className="w-11/12 shadow-xl rounded-xl border overflow-hidden">
                    <div className="w-full bg-white flex justify-end">
                        <button className=" w-8 h-8" onClick={() => {
                            setOpenFotms('hidden');
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>
                    <div className={`w-full ${enterFotm}`}>
                        <EnterUsers />
                    </div>
                    <div className="w-full">
                        <div className="w-4/5 flex justify-between mx-auto">
                            <button className="text-xs py-2 pb-6">Забули пароль?</button>
                            <button className="text-xs py-2 pb-6">Зареєструватись</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Burger button */}
            <div className=" w-1/5 h-14">
                <button className={` w-full h-full flex justify-center items-center ${burgerOpened}`} onClick={() => {
                    setBurgerOpened('hidden');
                    setBurgerClosed('block');
                    setOpenNavigation('block');
                    setOpenFotms('hidden');
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
            <div className=" w-1/5 h-14">
                <Link to='checkout' className="w-full h-full bg-blue-300 flex items-center justify-center" onClick={closeAllWindow}>
                    <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="" />
                    <span className="bg-white p-1 rounded-full w-6 h-6 flex justify-center items-center right-4">0</span>
                </Link>
            </div>
            {/* hidden menu */}
            <div className={`w-full h-4/5 bg-white fixed top-14 border-t-2 flex flex-col ${openNavigation}`}>
                <Link to='product/sauces' className="px-6 py-2 font-extrabold" onClick={closeAllWindow}>Соуси</Link>
                <Link to='discount' className="px-6 py-2 font-extrabold" onClick={closeAllWindow}>Акції</Link>
                <Link to='delivery' className="px-6 py-2 font-extrabold" onClick={closeAllWindow}>Доставка та оплата</Link>
                <Link to='about' className="px-6 py-2 font-extrabold" onClick={closeAllWindow}>Про нас</Link>
                <div className="w-full flex justify-center items-center mt-10">
                    <button className=" w-3/4 bg-blue-300 flex justify-center items-center py-4 rounded-lg">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                        <span className="pl-2">МИ ЗАТЕЛЕФОНУЄМО</span>
                    </button>
                </div>
            </div>
            {/* Bottom links */}
            <div className="fixed bottom-0 w-full h-20 flex">
                <div className=" w-1/4 h-full">
                    <Link to='product/roll' className="w-full h-full flex flex-col justify-center items-center" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-rolls.svg" alt="" />
                        <span>Роли</span>
                    </Link>
                </div>
                <div className=" w-1/4 h-full">
                    <Link to='product/set' className="w-full h-full flex flex-col justify-center items-center" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-sets.svg" alt="" />
                        <span>Сети</span>
                    </Link>
                </div>
                <div className=" w-1/4 h-full">
                    <Link to='product/moti' className="w-full h-full flex flex-col justify-center items-center" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2024/04/moti.svg" alt="" />
                        <span>Моті</span>
                    </Link>
                </div>
                <div className=" w-1/4 h-full">
                    <Link to='product/drink' className="w-full h-full flex flex-col justify-center items-center" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-drinks.svg" alt="" />
                        <span>Напої</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}