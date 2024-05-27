import { useState } from 'react';

import styles from './detailPicker.module.css';

const DetailPicker = ({ type = 'text', values = [] }) => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="flex flex-row flex-wrap justify-start items-center gap-[0.63rem]">
			{values.map((value, index) => (
				<button
					onClick={() => setSelected(index)}
					key={`${index}-${value}`}
					className={`flex flex-row justify-center items-center h-10 w-10 border-zinc-300 border cursor-pointer hover:opacity-80 transition ${
						type !== 'color' && 'bg-[#D9D9D9]'
					}
					 ${index === selected ? 'outline outline-1' : ''}`}
					style={{ backgroundColor: value }}>
					{type === 'text' && <p className={styles.text}>{value}</p>}
				</button>
			))}
		</div>
	);
};

export default DetailPicker;
