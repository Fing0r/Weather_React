import { FavoriteCities } from '../FavoriteCities/FavoriteCities'
import { SearchForm } from '../SearchForm/SearchForm'
import { WeatherInfo } from '../WeatherInfo/WeatherInfo'
import './styles.scss'

const Weather = () => {
  return (
    <div className='weather'>
      <div className='weather__list'>
        <div className='weather__item weather__item--search'>
          <SearchForm/>
        </div>
        <div className='weather__item weather__item--info'>
          <WeatherInfo/>
        </div>
        <div className='weather__item weather__item--cities'>
          <FavoriteCities/>
        </div>
      </div>
    </div>
  )
}

export { Weather }
