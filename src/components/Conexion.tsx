import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { obtenerPost } from '../actions/actions';
import { initialStateType, postType } from '../ts/types';
import Card from './card';
import Pagination from './Pagination';

const Conexion = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	const dispath = useDispatch();
	useEffect(() => {
		const post = () => dispath(obtenerPost());
		post();
	}, [dispath]);

	const { loading, posts } = useSelector(
		(state: initialStateType) => state.posts
	);
	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	return (
		<>
			<div className='container'>
				<h1
					style={{
						color: 'white',
						textAlign: 'center',
						margin: '1.5rem 0',
					}}
				>
					Todos los posts paginados
				</h1>
				<div className='container__cards '>
					{currentPosts.map((post: postType) => {
						return (
							<Card
								key={post.id}
								id={Number(post.id)}
								userId={post.userId}
								title={post.title}
								body={post.body}
							/>
						);
					})}
				</div>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={posts.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</div>
		</>
	);
};

export default Conexion;
