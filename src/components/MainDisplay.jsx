import sunny from '../assets/images/icon-sunny.webp'
import overcast from '../assets/images/icon-overcast.webp'
import partly from '../assets/images/icon-partly-cloudy.webp'
import rain from '../assets/images/icon-rain.webp'
import snow from '../assets/images/icon-snow.webp'
import storm from '../assets/images/icon-storm.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
import fog from '../assets/images/icon-fog.webp'
import { MainSubCard } from './MainSubCard.jsx'

export function MainDisplay(props) {
	return (
		<div className='mt-6 px-4 md:col-span-2'>
			<div className='bg-no-repeat bg-cover bg-[url(src/assets/images/bg-today-small.svg)] md:bg-[url(src/assets/images/bg-today-large.svg)] h-70 rounded-lg md:h-64 md:flex md:flex-row md:items-center md:justify-center md:text-center md:justify-between'>
				<div>
					<h1 className='text-white dm_semibold pt-10 text-2xl'>
						Berlin, Germany
					</h1>
					<h2 className='text-white dm_font'>{props.current.day}</h2>
				</div>
				<div className='flex flex-row items-center text-center justify-center space-x-10 mt-6 md:space-x-2 md:ml-10'>
					<h1>{props.current.weatherCondition.text}</h1>
					{/*<img src={null} alt='Weather Icon' className='w-25 h-25' />*/}
					<h2 className='text-white text-5xl dm_italic font-semibold md:text-4xl'>
						{props.current.temperature}&deg;
					</h2>
				</div>
			</div>
			<div className='grid grid-cols-2 md:flex md:flex-row md:justify-center md:align-center md:text-center'>
				<MainSubCard
					title='Feels Like'
					content={props.current.feels}
					unit='&deg;'
				/>
				<MainSubCard
					title='Humidity'
					content={props.current.humidity}
					unit='%'
				/>
				<MainSubCard
					title='Wind'
					content={props.current.windspeed}
					unit=' kph'
				/>
				<MainSubCard
					title='Precipitation'
					content={props.current.precipitation}
					unit=' in'
				/>
			</div>
		</div>
	)
}
