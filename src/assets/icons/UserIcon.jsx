const UserIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		{...props}>
		<path
			fill="#2D2D2D"
			fillRule="evenodd"
			d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
			clipRule="evenodd"
		/>
		<path
			fill="#2D2D2D"
			fillRule="evenodd"
			d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.983 8.983 0 0 1 7.092 3.458A9.001 9.001 0 1 0 3 12Zm9 9a8.963 8.963 0 0 1-5.672-2.012A6.991 6.991 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default UserIcon;
