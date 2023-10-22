import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Massage from '../Massage'
import style from './styles.module.css'
import Home from '../Home'
import Game from '../Game'
import UserInfo from '../UserInfo'
import Api from '../Api'

const Main = () => {
    return (
        <>
            <div className={style.Main}>
                <Switch>
                    <Route path='/massage' component={Massage} />
                    <Route exact path='/' component={Home} />
                    <Route path='/api' component={Api} />
                    <Route path="/game" component={Game} />
                    <Route path='/userInfo' component={UserInfo} />
                </Switch>
            </div>
        </>
    )
}

export default Main