import { useLocation } from 'react-router-dom';
import queryString from 'qs';



export default function Search() {
	const location = useLocation();
	const query = queryString.parse(location.search, {
		ignoreQueryPrefix: true,
	}) as {
		q?: string;
	};


	return (
		<main className="search">
			<h1>Search Page</h1>
			<p>Your query is : { query.q }</p>
		</main>
	);
}