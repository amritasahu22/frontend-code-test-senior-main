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
		<main className={styles.productContainer}>
			<div>Product App</div>
			<article>
				<Image
					src={product.img_url}
					height={400}
					width={400}
					alt='Energy Saving Bulb'
					className={styles.borderCircle}
				/>
				<h2>{product.name}</h2>
				<p>
					{product.power} // Packet of {product.quantity}
				</p>
				<ProductDetails> Product Details</ProductDetails>
			</article>
		</main>
	);
}
