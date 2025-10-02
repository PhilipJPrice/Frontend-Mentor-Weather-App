export function DailyCard(props) {
	return (
		<div className='flex flex-col justify-center items-center sub-cards w-24 mx-2 my-2 md:mx-1 md:w-full md:ml-0 md:max-w-48 rounded-lg'>
			<p className='text-gray-100'>{props.day}</p>
			<img src={props.image} alt='Weather icon' className='w-12' />
			<p className=''>{props.high}</p>
			<p className=''>{props.low}</p>
		</div>
	)
}
