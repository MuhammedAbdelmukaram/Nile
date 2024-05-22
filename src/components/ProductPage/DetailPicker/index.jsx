import styles from './detailPicker.module.css';

const DetailPicker = ({ type = 'text', values = [] }) => {
	return (
		<div className="flex flex-row justify-center items-center gap-[0.63rem]">
			{values.map((value, index) => (
				<div
					key={`${index}-${value}`}
					className={`flex flex-row justify-center items-center h-10 w-10 border-zinc-300 border cursor-pointer ${
						type !== 'color' && 'bg-[#D9D9D9]'
					}`}
					style={{ backgroundColor: value }}>
					{type === 'text' && <p className={styles.text}>{value}</p>}
				</div>
			))}
		</div>
	);
};

export default DetailPicker;
