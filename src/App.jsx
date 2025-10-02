import React, { useState, useEffect } from 'react'
import './index.css'
import { Header } from './components/Header.jsx'
import search from './assets/images/icon-search.svg'
import { MainDisplay } from './components/MainDisplay.jsx'
import { DailyForecast } from './components/DailyForecast.jsx'
import { HourlyForecast } from './components/HourlyForecast.jsx'
import { fetchWeatherApi } from 'openmeteo'

const url = 'https://api.open-meteo.com/v1/forecast'

const weatherCodeMap = {
	0: { text: 'sunny' },
	1: { text: 'partly cloudy' },
	2: { text: 'partly cloudy' },
	3: { text: 'overcast' },
	45: { text: 'fog' },
	48: { text: 'fog' },
	51: { text: 'drizzle' },
	53: { text: 'drizzle' },
	55: { text: 'drizzle' },
	56: { text: 'drizzle' },
	57: { text: 'drizzle' },
	61: { text: 'rain' },
	63: { text: 'rain' },
	65: { text: 'rain' },
	66: { text: 'rain' },
	67: { text: 'rain' },
	71: { text: 'snow' },
	73: { text: 'snow' },
	75: { text: 'snow' },
	77: { text: 'snow' },
	80: { text: 'storm' },
	81: { text: 'storm' },
	82: { text: 'storm' },
	85: { text: 'storm' },
	86: { text: 'storm' },
	95: { text: 'storm' },
	96: { text: 'storm' },
	99: { text: 'storm' },
}

function computeFeelsLike(tempC, windKph, humidity) {
	if (tempC <= 10) {
		const winMs = windKph / 3.6
		return (
			13.12 +
			0.6215 * tempC -
			11.37 * Math.pow(windMs, 0.16) +
			0.3965 * tempC * Math.pow(windMs, 0.16)
		).toFixed(1)
	} else if (tempC >= 27) {
		return (
			-8.784695 +
			1.61139411 * tempC +
			2.338549 * humidity -
			0.14611605 * tempC * humidity
		).toFixed(1)
	}
	return tempC.toFixed(1)
}

export function App() {
	const [weatherData, setWeatherData] = useState(null)
	const [current, setCurrent] = useState(null)
	const [input, setInput] = useState({
		latitude: 52.52,
		longitude: 13.41,
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`${url}?latitude=${input.latitude}&longitude=${input.longitude}&hourly=temperature_2m&current_weather=true&hourly=relativehumidity_2m,precipitation&timezone=auto`,
				)
				const data = await res.json()
				const hourly = data.hourly.time.map((t, i) => ({
					time: new Date(t),
					temperature: data.hourly.temperature_2m[i],
				}))

				setWeatherData(hourly)

				const current = data.current_weather
				if (!current) throw new Error('No current weather data')

				const timeIndex = data.hourly.time.findIndex((t) => t === current.time)

				const feels = null

				const humidity =
					timeIndex >= 0 ? data.hourly.relativehumidity_2m[timeIndex] : null

				const precipitation =
					timeIndex >= 0 ? data.hourly.precipitation[timeIndex] : null

				const weatherCondition =
					weatherCodeMap[current.weathercode] || weatherCodeMap[0]

				const now = new Date(data.current_weather.time)
				const weekday = now.toLocaleDateString(undefined, { weekday: 'long' })
				const dateStr = now.toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})
				setCurrent({
					day: weekday + ', ' + dateStr,
					temperature: data.current_weather.temperature,
					windspeed: data.current_weather.windspeed,
					humidity,
					precipitation,
					feels,
					weatherCondition,
				})
			} catch (err) {
				console.error('Error: ', err)
			}
		}

		fetchData()
	}, [])

	if (!weatherData) return <div>Loading...</div>

	return (
		<>
			<Header />
			<main className='flex flex-col justify-center items-center text-center mt-8 md:mt-10'>
				<h1 className='brico_bold text-white text-4xl'>
					How's the sky looking today?
				</h1>
				<form className='flex flex-col w-full px-4 mt-10 md:flex-row md:px-40'>
					<input
						type='text'
						placeholder='Search for a place...'
						name='search'
						className='text-white rounded-lg h-10 md:w-full'
					/>
					<button
						type='submit'
						className='rounded-lg text-white mt-2 h-10 md:mt-0 md:ml-4 md:px-4'
					>
						Search
					</button>
				</form>
				<div className='w-full flex flex-col md:grid md:grid-cols-3 md:gap-4'>
					<MainDisplay current={current} />
					<HourlyForecast weatherData={weatherData} />
					<DailyForecast />
				</div>
			</main>
		</>
	)
}
