const BagIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		fill="none"
		{...props}>
		<mask
			id="a"
			width={18}
			height={18}
			x={1}
			y={1}
			maskUnits="userSpaceOnUse"
			style={{
				maskType: 'luminance',
			}}>
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
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeWidth={1.667}
				d="M6.667 14.167h6.666"
			/>
		</mask>
		<g mask="url(#a)">
			<path fill="#fff" d="M0 0h20v20H0V0Z" />
		</g>
	</svg>
);
export default BagIcon;
