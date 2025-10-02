export function HourlyCard(props) {
	return (
		<div className='sub-sub-cards flex flex-row justify-between items-center h-12 rounded-lg mt-2 md:my-4 mb-4'>
			<div className='flex flex-row items-center'>
				<img src={props.icon} alt='Weather icon' className='w-12' />
				<p>{props.time}</p>
			</div>
			<p className='mr-4'>{props.temp}&deg;C</p>
		</div>
	)
}
