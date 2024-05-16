//Libs
import { useState } from 'react';
//Style
import styles from './input.module.css';

const InputField = ({ placeholder }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<input
			type="text"
			value={inputValue}
			onChange={handleChange}
			placeholder={placeholder}
			className={styles.input}
		/>
	);
};

export default InputField;
