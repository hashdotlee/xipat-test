import { useEffect, useState } from 'react';
import { PostData } from '../pages/post-management/data';

function usePosts() {
	const [posts, setPosts] = useState<PostData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
			const postsData = await posts.json();
			setPosts(postsData);
			setLoading(false);
		})();
	}, []);

	return { posts, loading };
}

export default usePosts;
