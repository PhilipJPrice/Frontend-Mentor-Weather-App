export function MainSubCard(props) {
	return (
		<div className='sub-cards text-gray-300 h-24 rounded-lg mt-4 mx-2 md:w-full'>
			<h4 className='dm_light pt-4'>{props.title}</h4>
			<p className='dm_light text-2xl text-gray-100 md:text-xl'>
				{props.content}
				{props.unit}
			</p>
		</div>
	)
}
