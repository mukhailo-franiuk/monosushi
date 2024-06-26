
export const XsVersionAbout = () => {
    const advantages = [
        {
            title : 'Свіжі продукти',
            description : 'Наші інгредієнти ще вчора плавали у морі, а сьогодні вже у Ваших сушиках',
            imagePatch : 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-1.svg'
        },
        {
            title : 'Неймовірний смак',
            description : 'Ми створили сушики, які змусять Ваші рецептори вибухнути від насолоди',
            imagePatch : 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-2.svg'
        },
        {
            title : 'Великі порції',
            description : 'Ми віднайшли ідеальні порції ролів та завжди дотримуємось грамажу вказаного на сайті',
            imagePatch : 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-3.svg'
        },
        {
            title : 'Чистота на кухні',
            description : 'Ми як ніхто інший розуміємо, що морепродукти потребують абсолютної чистоти на кухні',
            imagePatch : 'https://monosushi.com.ua/wp-content/uploads/2020/10/advantages-img-4.svg'
        }
    ]
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full my-4">
                <h1 className=" w-1/2 mx-auto text-black text-2xl font-black text-center border-t-4 border-blue-300 pt-2">Про нас</h1>
            </div>
            <div className="w-11/12 my-4">
                <h2 className=" mx-auto text-black text-xl font-black text-center py-2">Monosushi – доставка неймовірно смачних суші у Львові.</h2>
                <p className="text-sm">Головний пріоритет – висока якість їжі та сервісу. Ми – команда професіоналів, яка щодня працює для
                    Вас. Якість та Швидкість! – це два основних пріоритети в роботі команди. В першу чергу звичайно ж
                    Якість. Суші готуються без затримок, одразу ж після Вашого замовлення. А завдяки сучасним технологіям та
                    відповідальному навчанню працівників, свіжі страви можливо доставляти до 59 хв в 75% замовлень.</p>
                <ul className="w-full pl-4 text-sm mt-4">
                    <li className=" list-disc">висока якість їжі та сервісу</li>
                    <li className=" list-disc">команда професіоналів</li>
                    <li className=" list-disc">сучасні технології приготування</li>
                </ul>
            </div>
            <div className="w-11/12 my-4 flex flex-col">
                < div className="w-full rounded-xl my-2 overflow-hidden">
                    <img src="https://monosushi.com.ua/wp-content/uploads/2022/07/img_1127-scaled-568x568.jpg" alt="" />
                </div>
                <div className="w-full flex flex-col my-2 items-center">
                    <h2 className="w-full flex flex-col items-start">
                        <span className=" font-black text-xl">Привіт!</span>
                        <span className="font-black text-xl">Познайомимось?</span>
                    </h2>
                </div>
                <div className="w-11/12">
                    <p className="text-sm">Monosushi – це доставка найсмачніших суші у Львові, яка була
                        створена командою перфекціоністів. Двоє друзів, які обожнюють
                        роли вирішили створити продукт, якого їм не вистачало на ринку Львова.
                        Продукт, в якому ідеальним буде все: смак, упакування, сервіс і все це за лояльною ціною!</p>
                </div>
            </div>
            <div className="w-11/12 my-4 flex flex-col">
                <div className="w-full flex flex-col my-2 items-center">
                    <h2 className="w-full text-left text-black text-xl font-black py-2">
                        Наш пріоритет - ваша посмішка від задоволення
                    </h2>
                </div>
                <div className="w-11/12">
                    <p className="text-sm"><b className=" font-black text-md text-black">Monosushi</b> – це доставка одного (mono) продукту.
                        Роли вже давно стали рядовою стравою, проте процес їх приготування всеодно
                        залишається цілим мистецтвом. Суші потрібно готувати за чіткою технологією
                        суворо дотримуючись традицій. І в цьому ми справжні експерти! Сумніваєтесь?
                        Тоді замовляйте доставку Monosushi і насолоджуйтесь.</p>
                </div>
                < div className="w-full rounded-xl my-2 overflow-hidden">
                    <img src="https://monosushi.com.ua/wp-content/uploads/2022/07/img_8051-scaled-568x568.jpeg" alt="" />
                </div>
            </div>
            <div className="w-4/5 my-4 flex flex-col">
                <div className="w-full flex flex-col my-2 items-center">
                    <h2 className="w-full text-center text-black text-xl font-black py-2">
                        Наші переваги
                    </h2>
                </div>
                {advantages.map((item , index) => 
                    <div className="w-full flex flex-col items-center justify-center my-4 border py-4 rounded-xl border-blue-300" key={index}>
                    <div className="bg-blue-300 w-20 h-20 rounded-xl flex justify-center items-center">
                        <img src={item.imagePatch} alt="" />
                    </div>
                    <h3 className="font-black py-4 text-lg">{item.title}</h3>
                    <p className=" w-4/5 text-center text-sm">{item.description}</p>
                </div>
                )}
                
            </div>
        </div>
    );
}