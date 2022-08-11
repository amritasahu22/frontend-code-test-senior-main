import Image from 'next/image';
import styles from './nav.module.css';

export default function Nav({ basketItems }) {
	return (
		<nav className={styles.nav}>
			<Image
				priority
				src='/octopus-logo.svg'
				height={30}
				width={200}
				alt='Octopus Energy Logo'
			/>
			<div className={styles.notification}>
				<Image
					priority
					src='/basket.svg'
					height={30}
					width={50}
					alt='Basket Icon'
				/>
				<span className={styles.badge} title='Basket items'>
					{basketItems}
				</span>
			</div>
		</nav>
	);
}
