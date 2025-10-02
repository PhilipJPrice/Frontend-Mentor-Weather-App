import sunny from '../assets/images/icon-sunny.webp'
import overcast from '../assets/images/icon-overcast.webp'
import partly from '../assets/images/icon-partly-cloudy.webp'
import rain from '../assets/images/icon-rain.webp'
import snow from '../assets/images/icon-snow.webp'
import storm from '../assets/images/icon-storm.webp'
import drizzle from '../assets/images/icon-drizzle.webp'
import fog from '../assets/images/icon-fog.webp'
import { DailyCard } from './DailyCard.jsx'

export function DailyForecast() {
	return (
		<div className='px-4 col-span-2 text-start mt-2 md:mt-0'>
			<h2 className='dm_font text-white text-lg mx-2'>Daily forecast</h2>
			<div className='flex flex-row flex-wrap md:mx-6 md:flex-nowrap'>
				<DailyCard day='Tue' image={rain} high='68&deg;' low='57&deg;' />
				<DailyCard day='Wed' image={drizzle} high='70&deg;' low='59&deg;' />
				<DailyCard day='Thu' image={sunny} high='70&deg;' low='59&deg;' />
				<DailyCard day='Fri' image={partly} high='77&deg;' low='55&deg;' />
				<DailyCard day='Sat' image={storm} high='70&deg;' low='59&deg;' />
				<DailyCard day='Sun' image={snow} high='77&deg;' low='61&deg;' />
				<DailyCard day='Mon' image={fog} high='75&deg;' low='59&deg;' />
			</div>
		</div>
	)
}
