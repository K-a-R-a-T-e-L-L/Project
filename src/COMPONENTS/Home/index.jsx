import { useEffect, useState } from 'react'
import style from './styles.module.css'
import { useLocalStorage } from '../../HOOK/useLocalStorage';

const Home = () => {

    //Переменная состояния имени пользователя
    const [UserName, SetUserName] = useLocalStorage("USER-NAME");
    //Переменная состояния фамилии пользователя
    const [UserSurname, SetUserSurname] = useLocalStorage("USER-SURNAME");
    //Переменная состояния возраста пользователя
    const [UserAge, SetUserAge] = useLocalStorage("USER-AGE");


    //Переменная состояния для значения поля ввода имени пользователя
    const [ValueName, SetValueName] = useState("");
    //Функция для получения value поля ввода имени пользователя
    const HandleChangeName = (event) => {
        const ValueInput = event.target.value;
        const Symbols = ValueInput.replace(/[^A-Za-zА-Яа-яЁё]+/g, '');
        SetValueName(Symbols);
    };

    //Переменная состояния для значения поля ввода фамилии пользователя
    const [ValueSurname, SetValueSurname] = useState("");
    //Функция для получения value поля ввода фамилии пользователя
    const HandleChangeSurname = (event) => {
        const ValueInput = event.target.value;
        const Symbols = ValueInput.replace(/[^A-Za-zА-Яа-яЁё]+/g, '');
        SetValueSurname(Symbols);
    };

    //Переменная состояния для значения поля ввода возраста пользователя
    const [ValueAge, SetValueAge] = useState("");
    //Функция для получения value поля ввода возраста пользователя
    const HandleChangeAge = (event) => {
        const ValueInput = event.target.value;
        const Symbols = ValueInput.replace(/[^0-9]+/g, '');
        SetValueAge(Symbols);
    };


    //Переменная состояния для показывания ошибки в поле ввода
    const [Invalid, SetInvalid] = useState(true);

    //Переменная состояния для показывания ошибки в поле ввода
    const [InvalidAge130, SetInvalidAge130] = useState(true);

    //Переменная состояния для показывания ошибки в поле ввода
    const [InvalidAge16, SetInvalidAge16] = useState(true);


    //Функция с кучей проверок полей ввода
    const HandleUserValue = () => {
        if (ValueName !== "" && ValueSurname !== "" && ValueAge !== "" && ValueAge < 130 && ValueAge >= 16) {
            SetUserName(ValueName);
            SetUserSurname(ValueSurname);
            SetUserAge(ValueAge);
            window.location.reload()
        }
        else if (ValueAge > 130) {
            SetInvalidAge130(false)
        }
        else if (ValueAge < 16 && ValueAge !== "") {
            SetInvalidAge16(false)
        }
        else {
            SetInvalid(false)
        };
    };


    //Функция для выхода из аккаунта
    const HandleBackUser = () => {
        SetUserName("");
        SetUserSurname("");
        SetUserAge("");
        window.location.reload()
    }

    return (
        <>
            <div>
                {UserName && (
                    <div className={style.WelcomeBoxStyling}>
                        <div className={style.WelcomeUserTitle}>Здравствуйте {UserName}!</div>
                        <div>Вы вошли в свой аккаунт</div>
                        <button className={style.ButtonBackStyling} onClick={HandleBackUser}>
                            <span className={style.TitleExit}>Выйти</span>
                            <img
                                className={style.BackAccImgStyling}
                                src="https://cdn-icons-png.flaticon.com/512/7784/7784994.png"
                            />
                        </button>
                    </div>
                )}
                <div style={{ color: "red", width: "20vw", height: "3vw", position: "relative", left: "3.5vw", top: "-6vw" }}>{!InvalidAge130 && "Укажите верный возраст!"}</div>
                <div style={{ color: "red", width: "20vw", height: "3vw", position: "relative", left: "3.5vw", top: "-6vw" }}>{!InvalidAge16 && "Вам не должно быть менее 16 лет!"}</div>
                {!UserName && (
                    <div>

                        <label className={style.LableStyling}>
                            <div className={style.TitleRegistration}>Регистрация</div>

                            <div className={Invalid ? style.BoxInput : style.BoxInputErrorInput}>
                                <input
                                    maxLength={30}
                                    className={style.InputInfoStyling}
                                    value={ValueName}
                                    onChange={HandleChangeName}
                                    type='text'
                                    placeholder='Имя'
                                />

                                <input
                                    maxLength={30}
                                    className={style.InputInfoStyling}
                                    value={ValueSurname}
                                    onChange={HandleChangeSurname}
                                    type='text'
                                    placeholder='Фамилия'
                                />


                                <input
                                    maxLength={3}
                                    className={style.InputInfoStyling}
                                    value={ValueAge}
                                    onChange={HandleChangeAge}
                                    type='text'
                                    placeholder='Возраст'
                                />
                            </div>

                            <button className={style.ButtonOkStyling} onClick={HandleUserValue}>Сохранить</button>
                        </label>
                    </div>

                )}
            </div>
        </>
    )
}

export default Home