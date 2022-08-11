import styles from './productDetails.module.css';

export default function ProductDetails({ product }) {
	return (
		<div>
			<div className={styles.descContainer}>
				<h2>Description</h2>
				<p>{product.description}</p>
			</div>
			<div>
				<h2>Specification</h2>
				<div className={styles.specContainer}>
					<div className={styles.specRow}>Brand</div>
					<div className={styles.specRow}>{product.brand}</div>
				</div>
				<div className={styles.specContainer}>
					<div className={styles.specRow}>Item weight</div>
					<div className={styles.specRow}>{product.weight}</div>
				</div>
				<div className={styles.specContainer}>
					<div className={styles.specRow}>Dimensions</div>
					<div
						className={styles.specRow}
					>{`${product.height} x ${product.width} x ${product.length}`}</div>
				</div>
				<div className={styles.specContainer}>
					<div className={styles.specRow}>Item Model number</div>
					<div className={styles.specRow}>{product.model_code}</div>
				</div>
				<div className={styles.specContainer}>
					<div className={styles.specRow}>Colour</div>
					<div className={styles.specRow}>{product.colour}</div>
				</div>
			</div>
		</div>
	);
}
