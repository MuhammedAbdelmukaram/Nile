const ProgressBar = ({ percentage }) => {
	return (
		<div className="w-full bg-[#D9D9D9] h-[1.875rem]">
			<div
				className="bg-[#3679FA] h-full"
				style={{ width: `${percentage}%` }}></div>
		</div>
	);
};

export default ProgressBar;
