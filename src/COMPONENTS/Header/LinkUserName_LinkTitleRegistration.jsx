import { NavLink } from 'react-router-dom'
import style from './styles.module.css'


const LinkUserName_LinkTitleRegistration = (props) => {
    return (
        <>
            {props.UserName && (
                <div className={style.UserCircleBox}>
                    <NavLink activeClassName={style.ActiveLink} className={style.UserName} to='userInfo'>{props.UserName}</NavLink>
                    <div style={props.CirleStyle} >{props.Symbol}</div>
                </div>
            )}
            {!props.UserName && (
                <NavLink activeClassName={style.ActiveLink} className={style.Registration} to='/'>Зарегестрироваться</NavLink>
            )}
        </>
    )
}

export default LinkUserName_LinkTitleRegistration