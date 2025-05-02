import { useEffect, useState } from 'react';
import '../App.css';
import { API } from '../constants';

interface Product {
	id: string;
	name: string;
	brand: string;
}

interface RawProduct {
	id: string;
	name: string;
	brand: string;
	[key: string]: unknown;
}

function Products() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		setLoading(true);
		fetch(`${API}/products`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to fetch products');
				}
				return response.json();
			})
			.then((data) => {
				// Map the data to extract id, name, and brand
				const mappedProducts = data.map((product: RawProduct) => ({
					id: product.id,
					name: product.name,
					brand: product.brand,
				}));
				setProducts(mappedProducts);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
				setError(error.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <div className="card">Loading products...</div>;
	if (error) return <div className="card">Error: {error}</div>;

	return (
		<div className="card">
			<h1>Products Page</h1>
			{products.length === 0 ? (
				<p>No products found.</p>
			) : (
				<ul style={{ listStyle: 'none', padding: 0 }}>
					{products.map((product) => (
						<li
							key={product.id}
							style={{
								margin: '1rem 0',
								padding: '0.5rem',
								border: '1px solid #ddd',
								borderRadius: '4px',
							}}>
							<h3>{product.name}</h3>
							<p>Brand: {product.brand}</p>
							<p>ID: {product.id}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Products;
