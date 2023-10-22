import { Link, NavLink } from 'react-router-dom'
import style from './styles.module.css'

const BoxNavLink = () => {
    return (
        <>
            <div className={style.BoxLink}>
                <Link activeClassName={style.ActiveLink} className={style.LinkStyling} to='/'>Домой</Link>
                <NavLink activeClassName={style.ActiveLink} className={style.LinkStyling} to='/massage'>Чат</NavLink>
                <NavLink activeClassName={style.ActiveLink} className={style.LinkStyling} to='/api'>Данные</NavLink>
                <NavLink activeClassName={style.ActiveLink} className={style.LinkStyling} to='/game'>Крестики-нолики</NavLink>
            </div>
        </>
    )
}


export default BoxNavLink