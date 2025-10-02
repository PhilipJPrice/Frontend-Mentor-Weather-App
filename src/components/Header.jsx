import logo from '../assets/images/logo.svg'
import dropdown from '../assets/images/icon-dropdown.svg'
import units from '../assets/images/icon-units.svg'

export function Header() {
	return (
		<header className='flex flex-row justify-between p-4'>
			<img src={logo} alt='Logo' />
			<button
				id='unit-dropdown'
				data-dropdown-toggle='dropdown'
				className='text-white bg-neutral-700 flex flex-row justify-center items-center rounded-lg dm_medium'
			>
				<img src={units} alt='Settings Gear' className='w-4 mx-2' />
				Units
				<img src={dropdown} alt='Dropdown' className='w-3 mx-2' />
			</button>
		</header>
	)
}
