import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from 'react-hook-form';
import { getDatabase, set, ref } from "firebase/database";
import { app } from "../../../option/environment/Env";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../../store/users/AllUsers";
import { Users } from "../../../option/interfaces/users/Users";
export const RegForm = () => {
    const getObjKey = useSelector(getAllUsers);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Users>({
        mode: "all"
    });
    const formReg: SubmitHandler<Users> = (data) => {
        const db = getDatabase(app); 
        let counterID = Number(Object.keys(getObjKey).slice(-1));
        counterID++;
        if (data) {
          set(ref(db, 'users/' + counterID),data);
          window.location.href = 'users';
          reset();
        } else {
            return
        }
        console.log(data);
        reset();
    }
    return (
        <form action="" className="w-full bg-white flex flex-col items-center relative" onSubmit={handleSubmit(formReg)}>
            <div className="w-full">
                <h2 className="font-bold text-xl text-center py-4">Реєстрація</h2>
            </div>
            <div className="w-full flex flex-col justify-center items-center my-2">
                <input
                    type="text"
                    className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300"
                    placeholder="Ваше ім'я"
                    {...register('firstName', {
                        required: true,
                        minLength: 2

                    })}
                />
                {errors.firstName && <p className=" w-4/5 text-xs text-red-600">Мінімальне знвчення має бути хочаби два символи</p>}
            </div>
            <div className="w-full flex flex-col justify-center items-center my-2">
                <input
                    type="text"
                    className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300"
                    placeholder="Ваше прізвище"
                    {...register('lastName', {
                        required: true,
                        minLength: 2
                    })}
                />
                {errors.lastName && <p className=" w-4/5 text-xs text-red-600">Мінімальне знвчення має бути хочаби два символи</p>}
            </div>
            <div className="w-full  flex flex-col justify-center items-center my-2">
                <input
                    type="email"
                    className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300"
                    placeholder="Ваш email"
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Ведіть правильний email'
                        }
                    })}
                />
                {errors.email && <p className=" w-4/5 text-xs text-red-600">{errors.email.message}</p>}
            </div>
            <div className="w-full flex flex-col justify-center items-center my-2">
                <input
                    type="password"
                    className=" w-4/5 border px-4 py-2 rounded-lg outline-none border-blue-300"
                    placeholder="Пароль"
                    {...register('password', {
                        required : true,
                       minLength : 6
                    })}
                />
                {errors.password && <p className=" w-4/5 text-xs text-red-600">Придумайте пароль який буде не меньше шести символів</p>}
            </div>
            <div className="w-full flex justify-center items-center my-2">
                <input
                    type="checkbox"
                    className="ml-8"
                    {...register('status', { required: true })}
                />
                <span className="text-xs pl-2">Я погоджуюся з <Link to='#' className="text-xs">Правилами користування</Link></span>
            </div>
            <button type="submit" className="w-4/5 bg-blue-300 flex justify-center items-center mb-6 rounded-lg py-2 my-3">
                <span className=" font-extrabold text-sm" >Зареєструватись</span>
            </button>
        </form>
    );
}