
import { useState } from "react";
import { Link } from "react-router-dom";

import { EnterUsers } from "../form/EnterUsers";
import { RegForm } from "../form/RegForm";
import { RememberForm } from "../form/RemenberForm";

export const LgPlusVersionHeader = () => {
    const [burgerOpened, setBurgerOpened] = useState('block');
    const [burgerClosed, setBurgerClosed] = useState('hidden');
    const [openNavigation, setOpenNavigation] = useState('hidden');
    const [openForms, setOpenFotms] = useState('hidden');

    const [enterFotm, setEnterForm] = useState('block');
    const [regForm, setRegForm] = useState('hidden');
    const [rememberForm, setRememberForm] = useState('hidden');

    const closeAllWindow = () => {
        setBurgerOpened('block');
        setBurgerClosed('hidden');
        setOpenNavigation('hidden');
        setOpenFotms('hidden');
        setEnterForm('block');
        setRegForm('hidden');
        setRememberForm('hidden');
    }
    return (
        <div className="w-full flex items-center justify-between bg-white">
            {/* Logo App */}
            <div className=" w-2/12 h-24">
                <Link to='/' className="w-full h-full flex justify-center items-center bg-blue-300" onClick={closeAllWindow}>
                    <img className=" w-4/5 h-4/5" src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="" />
                </Link>
            </div>
            {/* list links */}
            <div className=" w-1/2 h-24 flex items-center justify-evenly">
                <div className=" h-full flex justify-center items-center">
                    <Link to='discount' className="w-full h-4/5 flex flex-col justify-center items-center border-transparent border-2 rounded-lg px-3 py-1 hover:border-blue-300" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-gift.svg" alt="" />
                        <span>Акції</span>
                    </Link>
                </div>
                <div className=" h-full flex justify-center items-center">
                    <Link to='product/roll' className="w-full h-4/5 flex flex-col justify-center items-center border-transparent border-2 rounded-lg px-3 py-1 hover:border-blue-300" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-rolls.svg" alt="" />
                        <span>Роли</span>
                    </Link>
                </div>
                <div className=" h-full flex justify-center items-center">
                    <Link to='product/set' className="w-full h-4/5 flex flex-col justify-center items-center border-transparent border-2 rounded-lg px-3 py-1 hover:border-blue-300" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-sets.svg" alt="" />
                        <span>Сети</span>
                    </Link>
                </div>
                <div className=" h-full flex justify-center items-center">
                    <Link to='product/drink' className="w-full h-4/5 flex flex-col justify-center items-center border-transparent border-2 rounded-lg px-3 py-1 hover:border-blue-300" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-drinks.svg" alt="" />
                        <span>Напої</span>
                    </Link>
                </div>
                <div className=" h-full flex justify-center items-center">
                    <Link to='product/moti' className="w-full h-4/5 flex flex-col justify-center items-center border-transparent border-2 rounded-lg px-3 py-1 hover:border-blue-300" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2024/04/moti.svg" alt="" />
                        <span>Моті</span>
                    </Link>
                </div>
                <div className=" h-full flex justify-center items-center">
                    <Link to='product/sauces' className="w-full h-4/5 flex flex-col justify-center items-center border-transparent border-2 rounded-lg px-3 py-1 hover:border-blue-300" onClick={closeAllWindow}>
                        <img src="https://monosushi.com.ua/wp-content/uploads/2021/09/icon.svg" alt="" />
                        <span>Соуси</span>
                    </Link>
                </div>
            </div>
            {/* Burger button */}
            <div className="relative h-24 flex justify-center items-center">
                <button className={` w-12 h-1/2 rounded-lg flex justify-center items-center border-transparent border-2 hover:border-blue-300 mx-3 ${burgerOpened}`} onClick={() => {
                    setBurgerOpened('hidden');
                    setBurgerClosed('block');
                    setOpenNavigation('block');
                    setOpenFotms('hidden');
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
                <button className={` w-12 h-1/2 rounded-lg flex justify-center items-center border-transparent border-2 mx-3 ${burgerClosed}`} onClick={() => {
                    setBurgerOpened('block');
                    setBurgerClosed('hidden');
                    setOpenNavigation('hidden');
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
                {/* hidden menu */}
                <div className={` w-64 bg-white absolute top-20 border-2 border-blue-300 rounded-lg flex flex-col ${openNavigation}`}>
                    <Link to='delivery' className="px-6 py-2 my-2 font-extrabold" onClick={closeAllWindow}>Доставка та оплата</Link>
                    <Link to='about' className="px-6 py-2 my-2 font-extrabold" onClick={closeAllWindow}>Про нас</Link>
                </div>
            </div>
            {/* Phone button */}
            <div className=" w-1/5 h-24 flex justify-center items-center">
                <button className=" h-1/2 flex justify-center items-center border-2 border-transparent hover:border-blue-300 bg-blue-300 hover:bg-white px-3 rounded-lg">
                    <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                    <span className="pl-2 font-extrabold">Ми зателефонуємо</span>
                </button>
            </div>
            {/* Users enter button */}
            <div className="relative h-24 flex justify-center items-center mr-5">
                <button className="relative w-12 border-2 border-transparent hover:border-blue-300 rounded-lg h-1/2 flex justify-center items-center" onClick={() => {
                    setOpenFotms('block');
                    setBurgerClosed('hidden');
                    setBurgerOpened('block');
                    setOpenNavigation('hidden');
                    setEnterForm('block');
                    setRegForm('hidden');
                    setRememberForm('hidden');
                }}>
                    <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                </button>
                {/* Users form block */}
                <div className={`absolute top-28 w-96 bg-transparent bg-gray-600 flex flex-col items-center ${openForms} z-10`}>
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
                            <div className="w-full bg-white">
                                <div className="w-4/5 flex justify-between mx-auto">
                                    <button className="text-xs py-2 pb-6" onClick={() => {
                                        setEnterForm('hidden');
                                        setRememberForm('block');
                                    }}>Забули пароль?</button>
                                    <button className="text-xs py-2 pb-6" onClick={() => {
                                        setEnterForm('hidden');
                                        setRegForm('block');
                                    }}>Зареєструватись</button>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full ${regForm}`}>
                            <RegForm />
                            <div className="w-4/5 flex justify-center items-center mx-auto ">
                                <span className="text-xs py-5">Ви вже зареєстровані?</span>
                                <button className="text-xs py-5 text-black font-bold pl-1" onClick={() => {
                                    setEnterForm('block');
                                    setRegForm('hidden');
                                }}>Увійти</button>
                            </div>
                        </div>
                        <div className={`w-full ${rememberForm}`}>
                            <RememberForm />
                            <div className="w-4/5 flex justify-center items-center mx-auto ">
                                <span className="text-xs py-5">Повернутися до </span>
                                <button className="text-xs py-5 text-black font-bold pl-1" onClick={() => {
                                    setEnterForm('block');
                                    setRegForm('hidden');
                                    setRememberForm('hidden');
                                }}>Входу</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout link */}
            <div className=" w-2/12 h-24">
                <Link to='checkout' className="w-full h-full bg-blue-300 flex items-center justify-center" onClick={closeAllWindow}>
                    <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="" />
                    <span className="bg-white p-1 rounded-full w-6 h-6 flex justify-center items-center right-4">0</span>
                </Link>
            </div>
        </div>
        // {/* Burger button */}
        // <div className=" w-1/5 h-20">
        //     <button className={` w-full h-full flex justify-center items-center ${burgerOpened}`} onClick={() => {
        //         setBurgerOpened('hidden');
        //         setBurgerClosed('block');
        //         setOpenNavigation('block');
        //         setOpenFotms('hidden');
        //     }}>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        //             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        //         </svg>
        //     </button>
        //     <button className={` w-full h-full flex justify-center items-center ${burgerClosed}`} onClick={() => {
        //         setBurgerOpened('block');
        //         setBurgerClosed('hidden');
        //         setOpenNavigation('hidden');
        //     }}>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
        //             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        //         </svg>
        //     </button>
        // </div>
        // {/* Checkout link */}
        // <div className=" w-1/5 h-20">
        //     <Link to='checkout' className="w-full h-full bg-blue-300 flex items-center justify-center" onClick={closeAllWindow}>
        //         <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="" />
        //         <span className="bg-white p-1 rounded-full w-6 h-6 flex justify-center items-center right-4">0</span>
        //     </Link>
        // </div>
        // {/* hidden menu */}
        // <div className={`w-1/2 h-2/4 bg-white fixed top-20 right-0 border-l-2 border-b-2 flex flex-col ${openNavigation}`}>
        //     <Link to='product/sauces' className="px-6 py-2 my-2 font-extrabold" onClick={closeAllWindow}>Соуси</Link>
        //     <Link to='discount' className="px-6 py-2 my-2 font-extrabold" onClick={closeAllWindow}>Акції</Link>
        //     <Link to='delivery' className="px-6 py-2 my-2 font-extrabold" onClick={closeAllWindow}>Доставка та оплата</Link>
        //     <Link to='about' className="px-6 py-2 my-2 font-extrabold" onClick={closeAllWindow}>Про нас</Link>
        //     <div className="w-full flex justify-center items-center mt-10">
        //         <button className=" w-3/4 bg-blue-300 flex justify-center items-center py-4 rounded-lg">
        //             <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
        //             <span className="pl-2">МИ ЗАТЕЛЕФОНУЄМО</span>
        //         </button>
        //     </div>
        // </div>
    );
}