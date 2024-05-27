const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={18}
		height={19}
		fill="none"
		{...props}>
		<path
			stroke="#2D2D2D"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.2}
			d="M14.677 4.58a3.683 3.683 0 0 1 0 5.198L9 15.501 3.323 9.778A3.682 3.682 0 0 1 5.903 3.5a3.672 3.672 0 0 1 2.58 1.08c.199.198.373.42.517.66.144-.24.318-.462.518-.66a3.622 3.622 0 0 1 5.16 0Z"
		/>
	</svg>
);
export default SvgComponent;
