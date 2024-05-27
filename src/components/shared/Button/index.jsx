import styles from './button.module.css';
const Button = ({ onClick, children, variant = 'primary' }) => {
	return (
		<button
			className={`${styles.button} ${
				variant === 'primary'
					? styles.primary
					: variant === 'curved'
					? styles.curved
					: variant === 'secondaryNoCurve'
					? styles.secondaryNoCurve
					: variant === 'orange'
					? styles.orange
					: styles.secondary
			}`}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
