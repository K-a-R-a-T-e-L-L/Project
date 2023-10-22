import style from './styles.module.css'
import { useLocalStorage } from '../../HOOK/useLocalStorage'
import { useEffect, useState } from 'react'
import LinkUserName_LinkTitleRegistration from './LinkUserName_LinkTitleRegistration'
import BoxNavLink from './BoxNavLink'

//Родительский компонент с заголовком страницы
const Header = () => {
    //Переменная состояния для имени пользователя, которая сохраняется в LocalStorage
    const [UserName] = useLocalStorage('USER-NAME')

    //Переменная которая содержит в себе первый символ из имени пользователя
    const Symbol = UserName?.charAt(0);

    //Переменная состояния, которая содержит в себе функцию рандомного цвета фона для аватарки
    const [Background, SetBackground] = useState('');

    //Вызываем функцию RandomColor() с помощью хука внутри SetBackground
    useEffect(() => {
        SetBackground(RandomColor())
    }, []);

    //Функция рандомного цвета
    const RandomColor = () => {
        const letters = '0123456789ABCDEF'; //Переменная с символами, которые содержаться в #код цвета
        let color = '#'; //Переменная с #, что является началом #код цвета
        for (let i = 0; i < 6; i++) {  //Цикл for, который выполняется 6 раз, так как в #код цвета содержится 6 символов
            color += letters[Math.floor(Math.random() * 16)]; //К переменной color добавляем letters, которая содержит рандомный набор символов
        }
        return color;
    };

    //Переменная со стилями для ящика с аватаркой
    const CirleStyle = {
        width: '2.5vw',
        height: '2.5vw',
        borderRadius: '100%',
        color: 'black',
        fontSize: '2.2vw',
        fontWeight: '500',
        backgroundColor: 'aquamarine',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Background
    };

    return (
        <>
            <div className={style.Header}>
                <LinkUserName_LinkTitleRegistration //Компонент с логикой отображения, а именно - если пользователь 
                    UserName={UserName}             // не зарегестрирован, то показывать "Зарегестрироваться", а если 
                    Symbol={Symbol}                 // уже зарегестрирован, то показывать его имя и аватарку
                    CirleStyle={CirleStyle}
                />
                <BoxNavLink //Компонент со всеми NavLink ссылками на компоненты
                />
            </div>
        </>
    )
}

export default Header