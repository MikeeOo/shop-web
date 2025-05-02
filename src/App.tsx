import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { API } from './constants';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	const [data, setData] = useState<{ message: string }>({ message: '' });

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<BrowserRouter>
			<div className="container">
				<nav>
					<ul
						style={{
							display: 'flex',
							gap: '1rem',
							listStyle: 'none',
							padding: '1rem',
						}}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
					</ul>
				</nav>
				<div>{data.message}</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
