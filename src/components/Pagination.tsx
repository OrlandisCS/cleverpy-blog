import React from 'react';
interface Props {
	postsPerPage: number;
	totalPosts: number;
	currentPage: number;
	paginate: (value: number) => void;
}
const Pagination = ({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
}: Props) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<button
							onClick={() => paginate(number)}
							className={`page-link ${
								currentPage === number ? 'activePage' : ''
							}`}
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
