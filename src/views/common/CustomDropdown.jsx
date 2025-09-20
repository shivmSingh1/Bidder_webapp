import React from 'react'
import Select from 'react-select';

function CustomDropdown(props) {

	const {
		name,
		label,
		options = [
			{ value: "ram", label: "Ram" },
			{ value: "shayam", label: "Shayam" },
			{ value: "mohan", label: "Mohan" },
			{ value: "sohan", label: "Sohan" }
		],
		error,
		isMulti = false,
		isSearchable = true,
		placeholder = "select",
		isDisabled = false,
		value,
		onChange,
		isClearable = true
	} = props;

	return (
		<>
			{
				label && <label htmlFor={name} >{label}</label>
			}
			<Select
				isMulti={isMulti}
				isDisabled={isDisabled}
				isSearchable={isSearchable}
				isClearable={isClearable}
				value={value}
				placeholder={placeholder}
				name={name}
				defaultValue={value}
				onChange={onChange}
				options={options}
			/>
			{
				error && <p className='text-danger' >{error}</p>
			}
		</>
	)
}

export default CustomDropdown