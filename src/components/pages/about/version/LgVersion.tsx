
export const LgVersionAbout = () => {
    const advantages = [
        {
            title: 'Свіжі продукти',
            description: 'Наші інгредієнти ще вчора плавали у морі, а сьогодні вже у Ваших сушиках',
            imagePatch: 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-1.svg'
        },
        {
            title: 'Неймовірний смак',
            description: 'Ми створили сушики, які змусять Ваші рецептори вибухнути від насолоди',
            imagePatch: 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-2.svg'
        },
        {
            title: 'Великі порції',
            description: 'Ми віднайшли ідеальні порції ролів та завжди дотримуємось грамажу вказаного на сайті',
            imagePatch: 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-3.svg'
        },
        {
            title: 'Чистота на кухні',
            description: 'Ми як ніхто інший розуміємо, що морепродукти потребують абсолютної чистоти на кухні',
            imagePatch: 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-4.svg'
        }
    ]
    return (
        <div className=" w-full flex flex-col items-center">
            <div className="w-full my-6">
                <h1 className=" w-1/3 mx-auto text-black text-4xl font-black text-center border-t-4 border-blue-300 pt-4">Про нас</h1>
            </div>
            <div className=" w-3/4 my-4">
                <h2 className=" mx-auto text-black text-3xl font-black text-left py-4">Monosushi – доставка неймовірно смачних суші у Львові.</h2>
                <p className="text-lg leading-9">Головний пріоритет – висока якість їжі та сервісу. Ми – команда професіоналів, яка щодня працює для
                    Вас. Якість та Швидкість! – це два основних пріоритети в роботі команди. В першу чергу звичайно ж
                    Якість. Суші готуються без затримок, одразу ж після Вашого замовлення. А завдяки сучасним технологіям та
                    відповідальному навчанню працівників, свіжі страви можливо доставляти до 59 хв в 75% замовлень.</p>
                <ul className="w-full pl-4 text-lg mt-4">
                    <li className=" list-disc py-2">висока якість їжі та сервісу</li>
                    <li className=" list-disc py-2">команда професіоналів</li>
                    <li className=" list-disc py-2">сучасні технології приготування</li>
                </ul>
            </div>
            <div className=" w-3/4 my-4 flex items-center justify-center">
                <div className="w-1/2 h-96 ">
                    < div className="w-full h-full my-2 overflow-hidden rounded-xl flex items-center">
                        <img className="w-4/5 h-full rounded-xl" src="https://monosushi.com.ua/wp-content/uploads/2022/07/img_1127-scaled-568x568.jpg" alt="" />
                    </div>
                </div>
                <div className="w-1/2 h-96">
                    <div className="w-full h-full flex flex-col my-2 items-center justify-center">
                        <h2 className="w-full flex flex-col items-start py-4">
                            <span className=" font-black text-2xl">Привіт!</span>
                            <span className="font-black text-2xl">Познайомимось?</span>
                        </h2>
                        <div className="w-full py-4">
                            <p className="text-lg ">Monosushi – це доставка найсмачніших суші у Львові, яка була
                                створена командою перфекціоністів. Двоє друзів, які обожнюють
                                роли вирішили створити продукт, якого їм не вистачало на ринку Львова.
                                Продукт, в якому ідеальним буде все: смак, упакування, сервіс і все це за лояльною ціною!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 my-4 flex">
                <div className="w-1/2 h-96">
                    <div className="w-full flex flex-col my-2 items-center">
                        <h2 className="w-full text-left text-black text-2xl font-black py-4">
                            Наш пріоритет - ваша посмішка від задоволення
                        </h2>
                    </div>
                    <div className="w-11/12">
                        <p className="text-lg pb-4"><b className=" font-black text-lg text-black">Monosushi</b> – це доставка одного (mono) продукту.
                            Роли вже давно стали рядовою стравою, проте процес їх приготування всеодно
                            залишається цілим мистецтвом. Суші потрібно готувати за чіткою технологією
                            суворо дотримуючись традицій. І в цьому ми справжні експерти! Сумніваєтесь?
                            Тоді замовляйте доставку Monosushi і насолоджуйтесь.</p>
                    </div>
                </div>
                <div className="w-1/2 h-96 ">
                    < div className="w-full h-full my-2 overflow-hidden rounded-xl flex items-center justify-end">
                        <img className="w-4/5 h-full rounded-xl" src="https://monosushi.com.ua/wp-content/uploads/2022/07/img_8051-scaled-568x568.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className=" w-3/4 my-4 flex flex-col items-center justify-center">
                <div className="w-full flex flex-col my-6 items-center">
                    <h2 className="w-full text-center text-black text-3xl font-black py-2">
                        Наші переваги
                    </h2>
                </div>
                <div className="w-full h-72 flex">
                    {advantages.map((item, index) =>
                        <div className=" h-full flex flex-col items-center justify-center" key={index}>
                            <div className=" w-1/2 h-1/3 bg-blue-300  rounded-xl flex justify-center items-center">
                                <img className="w-4/5 h-4/5" src={item.imagePatch} alt="" />
                            </div>
                            <h3 className=" w-full text-center font-black py-4 text-lg">{item.title}</h3>
                            <p className=" w-3/4 text-center text-sm">{item.description}</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}