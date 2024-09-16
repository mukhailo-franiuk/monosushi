import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="h-24">
            {/* Nav normal */}
            <nav className="hidden w-full h-full lg:block xs:hidden border-b-2 border-blue-300">
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex flex-shrink-0  items-center justify-center h-full">
                        <Link to={`/`} className="bg-blue-300 lg:px-4 sm:px-4 lg:py-4 w-full h-full flex justify-center items-center">
                            <img className="w-auto" src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="Your Company" />
                        </Link>
                    </div>
                    <div className="">
                        <div className="flex xl:space-x-7 lg:space-x-3">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Link to={`/discount`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                            
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-gift.svg" alt="" />
                                <span>Акції</span>
                            </Link>
                            <Link to={`/product/roll`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                            onClick={() => window.localStorage.setItem('setParams','roll')}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-rolls.svg" alt="" />
                                <span>Роли</span>
                            </Link>
                            <Link to={`/product/sets`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center"
                             onClick={() => window.localStorage.setItem('setParams','sets')}
                            >
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-sets.svg" alt="" />
                                <span>Сети</span>
                            </Link>
                            <Link to={`/product/drink`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1px-5 py-2 flex flex-col justify-center items-center">
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-drinks.svg" alt="" />
                                <span>Напої</span>
                            </Link>
                            <Link to={`/product/moti`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center">
                                <img src="https://monosushi.com.ua/wp-content/uploads/2024/04/moti.svg" alt="" />
                                <span>Моті</span>
                            </Link>
                            <Link to={`/product/sauce`} className="rounded-md border-2 border-transparent hover:border-blue-300 xl:px-5 xl:py-2 lg:px-2 lg:py-1 flex flex-col justify-center items-center">
                                <img src="https://monosushi.com.ua/wp-content/uploads/2021/09/icon.svg" alt="" />
                                <span>Соуси</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* Mobile menu button--> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
                        <div>
                            <button type="button" className="relative flex p-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-300 focus:rounded-lg">
                                <img className="h-8 w-8" src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-center h-full">
                        <Link to={`/checkout`} className="flex justify-center items-center bg-blue-300 lg:px-6 lg:py-6 w-full h-full">
                            <img className="w-auto" src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="Your Company" />
                            <span className="pl-2"><b>0</b> грн</span>
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className="hidden">
                <div className="mx-auto w-full px-0">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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
                        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center justify-center">
                                <Link to={`/`} className="bg-blue-300 lg:px-6 lg:py-6">
                                    <img className="border w-auto" src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="Your Company" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>

                                {/*                         Dropdown menu, show/hide based on menu state.

                                       Entering: "transition ease-out duration-100"
                                                               From: "transform opacity-0 scale-95"
                                                              To: "transform opacity-100 scale-100"
                                                             Leaving: "transition ease-in duration-75"
                                                             From: "transform opacity-100 scale-100"
                                                                  To: "transform opacity-0 scale-95" */}
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                    {/* Active: "bg-gray-100", Not Active: "" */}
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state. */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}