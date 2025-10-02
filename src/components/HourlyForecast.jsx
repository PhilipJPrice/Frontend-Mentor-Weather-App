import sunny from '../assets/images/icon-sunny.webp'
import overcast from '../assets/images/icon-overcast.webp'
import partly from '../assets/images/icon-partly-cloudy.webp'
import rain from '../assets/images/icon-rain.webp'
import snow from '../assets/images/icon-snow.webp'
import storm from '../assets/images/icon-storm.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
import fog from '../assets/images/icon-fog.webp'
import dropdown from '../assets/images/icon-dropdown.svg'
import { HourlyCard } from './HourlyCard.jsx'

export function HourlyForecast(props) {
	return (
		<div className='sub-cards mt-6 rounded-lg mx-4 text-start px-4 pt-2 md:ml-0 md:row-span-2 md:mb-2'>
			<div className='flex flex-row items-center justify-between'>
				<h2 className='dm_font text-white text-lg'>Hourly forecast</h2>
				<div className='ml-2'>
					<button
						id='day-dropdown'
						data-dropdown-toggle='dropdown'
						className='text-white sub-sub-cards flex flex-row justify-center items-center rounded-lg dm_medium text-sm px-2 md:px-4'
					>
						Tuesday
						<img src={dropdown} alt='Dropdown' className='ml-1' />
					</button>
				</div>
			</div>
			<div>
				{props.weatherData.slice(0, 8).map((item, i) => (
					<HourlyCard
						icon={overcast}
						time={item.time.toLocaleTimeString([], {
							hour: 'numeric',
							hour12: true,
						})}
						temp={item.temperature}
					/>
				))}
				{/*<HourlyCard icon={overcast} time='3 PM' temp='68&deg;' />
				<HourlyCard icon={partly} time='4 PM' temp='68&deg;' />
				<HourlyCard icon={sunny} time='5 PM' temp='68&deg;' />
				<HourlyCard icon={overcast} time='6 PM' temp='66&deg;' />
				<HourlyCard icon={rain} time='7 PM' temp='66&deg;' />
				<HourlyCard icon={fog} time='8 PM' temp='64&deg;' />
				<HourlyCard icon={rain} time='9 PM' temp='63&deg;' />
				<HourlyCard icon={overcast} time='10 PM' temp='63&deg;' />*/}
			</div>
		</div>
	)
}
