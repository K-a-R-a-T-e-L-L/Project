import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../HOOK/useLocalStorage'
import style from './styles.module.css'

const UserInfo = () => {

    const [UserName] = useLocalStorage('USER-NAME');
    const [UserSurname] = useLocalStorage('USER-SURNAME');
    const [UserAge] = useLocalStorage('USER-AGE');

    const Symbol = UserName?.charAt(0);

    const [Background, SetBackground] = useState('');

    useEffect(() => {
        SetBackground(RandomColor())
    }, []);

    const RandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

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
            <div className={style.InfoUser}>
                <div style={{ textShadow: '0vw 0vw 0.5vw rgb(0, 224, 254)' }}>Информация о пользователе</div>
                <div style={CirleStyle} >{Symbol}</div>
                <div style={{ display: 'grid', placeItems: 'center', height: '8vw' }}>

                    <div style={{ position: 'relative', width: '15vw', overflow: 'hidden' }}>Имя: <span className={style.SpanUserInfo}>{UserName}</span></div>

                    <div style={{ position: 'relative', width: '15vw', overflow: 'hidden' }}>Фамилия: <span className={style.SpanUserInfo}>{UserSurname}</span></div>

                    <div style={{ position: 'relative', width: '15vw', overflow: 'hidden' }}>Возраст: <span className={style.SpanUserInfo}>{UserAge}</span> </div>

                </div>
            </div >
        </>
    )
}


export default UserInfo