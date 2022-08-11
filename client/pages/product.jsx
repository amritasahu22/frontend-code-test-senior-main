import Image from 'next/image';
import ProductDetails from '../components/productDetails';
import { getProducts } from '../lib/productService';
import styles from '../styles/product.module.css';

export async function getStaticProps() {
	const { data: products } = await getProducts();
	const [productData] = products.data.allProducts;

	return {
		props: { productData },
	};
}

export default function Product({ productData }) {
	const { fields: product } = productData;

	return (
		<main className={styles.container}>
			<div>Product Header</div>
			<article className={styles.productContainer}>
				<div>
					<Image
						src={product.img_url}
						height={400}
						width={500}
						alt='Energy Saving Bulb'
						className={styles.borderCircle}
					/>
					<h1 className={styles.productHeading}>{product.name}</h1>
					<p className={styles.lightText}>
						{product.power} // Packet of {product.quantity}
					</p>
					<div className={styles.qtyContainer}>
						<div className={styles.price}>&pound;{product.price}</div>
						<div>
							<p className={styles.qtyLabel}>Qty</p>
							<div className={styles.qtyRow}>
								<button>+</button>
								<span>{1}</span>
								<button>-</button>
							</div>
						</div>
					</div>
					<button className={styles.addToCartBtn}>Add to cart</button>
				</div>
				<ProductDetails product={product} />
			</article>
		</main>
	);
}
