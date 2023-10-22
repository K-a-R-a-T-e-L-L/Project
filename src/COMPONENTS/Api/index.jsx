import { useEffect, useState } from 'react'
import style from './styles.module.css'

const Api = () => {

    const [Team, SetTeam] = useState([]);

    const [Uploading, SetUploading] = useState(true);

    const [TitleTeam, SetTitleTeam] = useState(false);

    const [FetchError, SetFetchError] = useState("")

    useEffect(() => {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
                "content-type": "application/octet-stream",
                "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(res => {
                SetTeam(res.data)
                SetUploading(false)
                SetTitleTeam(true)
            })
            .catch(error => {
                SetFetchError("Отсутствует подключение к интернету :( Попробуйте перезагрузить страницу")
            })
    }, []);

    const reload = () => {
        window.location.reload()
    }

    return (
        <>
            <div>
                <div className={style.TitleTeamStyling}>
                    {TitleTeam && <button onClick={reload} className={style.Reload}>🔁</button>}
                    {TitleTeam && <div style={{position: 'relative', top: '-2vw'}}>КОМАНДЫ</div>}
                </div>
                <div>
                    {Uploading && (
                        <div style={{ display: 'grid', placItems: 'center' }}>
                            {FetchError && (
                                <div style={{ width: '26vw', position: 'relative', top: '-5vw', color: 'red' }}>{FetchError}</div>
                            )}
                            <div>Загрузка данных о командах...</div>
                            <div className={style.AnimationUploading}>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                                <div className={style.Wave}></div>
                            </div>
                        </div>
                    )}
                    {Team.map((el, i) => {
                        return (
                                <div className={style.BoxTeamStyling} key={el.id}>
                                    <span className={style.SpanTeam}>{i + 1}</span>.
                                    Аббревиатура - <span className={style.SpanTeam}>{el.abbreviation}</span>,
                                    Город - <span className={style.SpanTeam}>{el.city}</span>,
                                    Конференция - <span className={style.SpanTeam}>{el.conference}</span>,
                                    Дивизион - <span className={style.SpanTeam}>{el.division}</span>,
                                    Название - <span className={style.SpanTeam}>{el.full_name}</span>.
                                    <img
                                        className={style.DeleteTeamStyling}
                                        onClick={() => SetTeam(Team.filter((FEl) => el.id !== FEl.id))}
                                        src="https://emojio.top/wp-content/uploads/imgemoji/lg/wastebasket-lg.png"
                                    />
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Api