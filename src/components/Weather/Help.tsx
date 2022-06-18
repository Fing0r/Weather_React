import {Link} from "react-router-dom";
import {FC} from "react";

const WeatherHelp: FC = () => {
    return (
        <>
            <div className="container">
                <h1>Это приложение погоды.</h1>
                <hr/>
                <p>
                    Для получения прогноза, введите на странице <Link to="/" className="link">Погода</Link> в поиск интересующий вас город.
                </p>
                <br/>
                <p>
                    Чтобы посмотреть статистику перейдите на страницу <Link to="/stats" className="link">Статистика.</Link>
                </p>
                <hr/>
            </div>
        </>
    )
}

export default WeatherHelp
