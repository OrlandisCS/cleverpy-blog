//@ts-nocheck
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerPost } from '../actions/actions';
import { initialStateType } from '../ts/types';
import Card from './card';
import Spinner from './ui/Spinner';
const App = () => {
	const dispath = useDispatch();
	useEffect(() => {
		const post = () => dispath(obtenerPost());
		post();
	}, [dispath]);

	const { loading, posts } = useSelector(
		(state: initialStateType) => state.posts
	);

	return (
		<>
			<div className='container'>
				{loading && <Spinner />}
				<h1
					style={{
						color: 'white',
						textAlign: 'center',
						margin: '1.5rem 0',
					}}
				>
					Todos los posts
				</h1>
				<div className='container__cards '>
					{posts.map((post) => {
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
			</div>
		</>
	);
};

export default App;
