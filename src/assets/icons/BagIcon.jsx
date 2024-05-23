const BagIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		fill="none"
		{...props}>
		<path
			fill="#fff"
			fillRule="evenodd"
			stroke="#fff"
			strokeLinejoin="round"
			strokeWidth={1.667}
			d="M2.5 6.25h15l-.833 11.25H3.333L2.5 6.25Z"
			clipRule="evenodd"
		/>
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.667}
			d="M6.667 7.917V2.5h6.666v5.417"
		/>
	</svg>
);
export default BagIcon;
