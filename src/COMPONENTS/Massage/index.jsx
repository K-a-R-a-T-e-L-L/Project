import { useEffect, useState } from 'react'
import style from './styles.module.css'
import { useLocalStorage } from '../../HOOK/useLocalStorage';
import OkDelMassage from './OkDelMassage';
import Chat from './Chat';

const Massage = () => {

    //Переменная состояния для сохранения сообщений в LocalStorage
    const [Massage, SetMassage] = useLocalStorage('CHAT', []);

    //Переменная состояния для сохранения имени пользователя в LocalStorage
    const [UserName] = useLocalStorage('USER-NAME');

    //Константа для показа имени отправителя, которая ограничивает количесво отображаемых символов в имени пользователя
    const LimitedUser = UserName.length > 10 ? UserName.slice(0, 8) + '...' : UserName;
    
    //Переменная состояния для значения поля ввода
    const [Value, SetValue] = useState("");

    //Функция с помощью которой получаем значение поля ввода
    const HandleChange = (event) => {
        SetValue(event.target.value)
    };

    //Функция с проверками для добавления нового сообщения
    const HanleButton = () => {
        const TrimValue = Value.trim();
        //Если пользователь вошел в аккаунт =>
        if (UserName && Value !== "" && TrimValue !== "") {
            //Добавляем новое сообщение из input и имя пользователя и =>
            SetMassage([...Massage, `${LimitedUser}: ${Value}`])
            //Очищаем поле ввода
            SetValue("")
        }
        //Если же пользователь не вошел в аккаунт =>
        else if (!UserName) {
            //Копируем предыдущий массив
            SetMassage([...Massage])
        }
        else {
            SetMassage([...Massage])
            SetValue("")
        }
    };

    //Функция для очищения чата
    const HandleDeleteFull = () => {
        SetMassage([])
    };

    //Функция удаления сообщений из чата
    const removeMassage = (index) => {
        const isUserMessage = index < Massage.length && Massage[index].startsWith(LimitedUser);
        if (isUserMessage) {
            SetMassage(Massage.filter((_, i) => i !== index));
        }
    };

    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <Chat
                    Massage={Massage}
                    SetMassage={SetMassage}
                    LimitedUser={LimitedUser}
                    UserName={UserName}
                    Value={Value}
                    removeMassage={removeMassage}
                />
                <OkDelMassage
                    HandleChange={HandleChange}
                    HanleButton={HanleButton}
                    HandleDeleteFull={HandleDeleteFull}
                    Value={Value}
                    SetValue={SetValue}
                    UserName={UserName}
                />
            </div>
        </>
    )
}

export default Massage