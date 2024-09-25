import { useState } from "react";
import { Link } from "react-router-dom";
import { SingIn } from "../../containers/forms/SingIn/SingIn";

export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState('hidden');
    const [twoLinks, setTwoLinks] = useState('hidden');
    const [singIn, setSingIn] = useState('hidden');
    const closeAllWindows = () => {
        setMobileMenu('hidden');
        setTwoLinks('hidden');
    }
    return (
        <header className="xl:h-24 xs:h-16">
            {/* Nav normal */}
            <nav className="hidden w-full h-full lg:block xs:hidden border-b-2 border-blue-300 relative">
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex flex-shrink-0  items-center justify-center h-full">
                        <Link to={`/`} className="bg-blue-300 lg:px-4 sm:px-4 lg:py-4 w-full h-full flex justify-center items-center"
                            onClick={closeAllWindows}
                        >
                            <img className="w-auto" src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="Your Company" />
                        </Link>
                    </div>
                    <div className="">
                        <div className="flex xl:space-x-7 lg:space-x-3">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Link to={`/discount`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                                onClick={closeAllWindows}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-gift.svg" alt="" />
                                <span>Акції</span>
                            </Link>
                            <Link to={`/product/roll`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                                onClick={closeAllWindows}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-rolls.svg" alt="" />
                                <span>Роли</span>
                            </Link>
                            <Link to={`/product/sets`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                                onClick={closeAllWindows}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-sets.svg" alt="" />
                                <span>Сети</span>
                            </Link>
                            <Link to={`/product/drink`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1px-5 py-2 flex flex-col justify-center items-center"
                                onClick={closeAllWindows}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-drinks.svg" alt="" />
                                <span>Напої</span>
                            </Link>
                            <Link to={`/product/moti`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                                onClick={closeAllWindows}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2024/04/moti.svg" alt="" />
                                <span>Моті</span>
                            </Link>
                            <Link to={`/product/sauce`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                                onClick={closeAllWindows}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2021/09/icon.svg" alt="" />
                                <span>Соуси</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        {/* Mobile menu button--> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                            onClick={() => (twoLinks === 'hidden') ? setTwoLinks('block') : setTwoLinks('hidden')}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/*  Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className={`absolute xs:top-20 bg-blue-300 w-80 ${twoLinks}`} id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <Link to={`/delivery`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Доставка та оплата</Link>
                                <Link to={`/about`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Про нас</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center rounded-lg border-2 border-blue-300 bg-blue-300 px-3 py-2 hover:cursor-pointer hover:bg-white ">
                            <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                            <span className=" pl-2 lg:text-xs xs:hidden xl:block">МИ ЗАТЕЛЕФОНУЄМО</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center">
                            <span className="font-black hover:text-blue-300 hover:cursor-pointer xs:hidden xl:block">+380978780837</span>
                        </div>
                    </div>
                    <div className="relative ml-3">
                        <div className="relative">
                            <button type="button" className="relative flex p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-300 focus:rounded-lg"
                            onClick={() => (singIn === 'hidden') ? setSingIn('block') : setSingIn('hidden')}
                            >
                                <img className="h-8 w-8" src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                            </button>
                            <div className={`absolute xs:top-20 mx-auto bg-white w-80 right-1 ${singIn}`} id="mobile-menu">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    <SingIn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-center h-full">
                        <Link to={`/checkout`} className="flex justify-center items-center bg-blue-300 lg:px-6 lg:py-6 w-full h-full"
                            onClick={closeAllWindows}
                        >
                            <img className="w-auto" src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="Your Company" />
                            <span className="pl-2"><b>0</b> грн</span>
                        </Link>
                    </div>
                </div>
            </nav>
            {/* mobile and tablet version */}
            <nav className="hidden lg:hidden xs:block w-full h-full relative">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center justify-center w-1/5 h-full" >
                        <Link to={`/`} className="bg-blue-300 flex items-center justify-center w-full h-full" onClick={closeAllWindows}>
                            <img className="md:h-4/5 md:w-4/5 xs:w-11/12 xs:h-4/5" src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="Your Company" />
                        </Link>
                    </div>
                    <div>
                        <div>
                            <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* Mobile menu button--> */}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => (mobileMenu === 'hidden') ? setMobileMenu('block') : setMobileMenu('hidden')}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/*  Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* Icon when menu is open. Menu open: "block", Menu closed: "hidden" */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="">
                        <div>
                            <button className={``}>
                                <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                            </button>
                            <div className={`hidden`}>
                                <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className="relative ml-3">
                                        <div>
                                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="absolute -inset-1.5"></span>
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </button>
                                        </div>
                                        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                            <Link to={`/`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                                            <Link to={`/`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</Link>
                                            <Link to={`/`} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-300 w-1/5 h-full flex justify-center items-center">
                        <Link to={`/checkout`} className="flex justify-center items-center px-2" onClick={closeAllWindows}>
                            <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="" />
                            <span className="pl-1"> 0грн</span>
                        </Link>
                    </div>
                    <div className={`lg:hidden absolute xs:top-20 bg-blue-300 xs:w-full ${mobileMenu}`} id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to={`/discount`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Акції</Link>
                            <Link to={`/product/roll`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Роли</Link>
                            <Link to={`/product/sets`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Сети</Link>
                            <Link to={`/product/drink`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Напої</Link>
                            <Link to={`/product/moti`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Моті</Link>
                            <Link to={`/product/sauce`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Соуси</Link>
                            <Link to={`/delivery`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Доставка та оплата</Link>
                            <Link to={`/about`} className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" onClick={closeAllWindows}>Про нас</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}