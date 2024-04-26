import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import usePosts from '../../apis/usePosts';
import Dialog from '../../components/Dialog';
import PageTitle from '../../components/PageTitle';
import Table from '../../components/Table';
import { PostData } from './data';

export default function PostManagement() {
	const { posts = [], setPosts } = usePosts();
	const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);
	const [open, setOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<PostData | null>(null);
	const columns = useMemo<ColumnDef<PostData>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
			},
			{
				accessorKey: 'userId',
				header: 'User ID',
			},
			{
				accessorKey: 'title',
				header: 'Title',
			},
			{
				id: 'actions',
				header: () => <span className="text-center inline-block w-full">Actions</span>,
				cell: (props) => <button
					onClick={() => {
						setSelectedPost(props.row.original)
						setOpen(true)
					}
					}
					className="text-center block mx-auto" aria-label="view detail" title="View Detail"><Eye /></button>,
			}
		],
		[],
	);

	useEffect(() => {
		if (posts.length) {
			setFilteredPosts(posts);
		}
	}, [posts]);

	const onFilter = useMemo(() => (filter: any) => {
		const filtered = posts.filter((post) => {
			return String(post.id).includes(filter) || String(post.title).includes(filter);
		});
		setFilteredPosts(filtered);
	}, [posts]);
	return (
		<section>
			<PageTitle title={"Post Management"} />
			<div className="p-8 flex flex-col items-center w-full">
				<div className="w-full">
					<Filter onFilter={onFilter} />
					<Table<PostData> data={filteredPosts} columns={columns} />
				</div>
			</div>
			<Dialog open={open} setOpen={setOpen}
				title="Post Detail"
				sizes="lg"
			>
				{selectedPost && <DetailedPost post={selectedPost} />}
			</Dialog>
		</section>
	);
}

const Filter = ({ onFilter }: { onFilter: (filter: any) => void }) => {
	const [filter, setFilter] = useState('');
	const onSearch = () => {
		onFilter(filter);
	}
	return <div className="flex gap-2 mb-4">
		<input
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					onFilter(filter);
				}
			}
			}
			type="text"
			onChange={(e) => setFilter(e.target.value)}
			placeholder="Search by user id or title" className="px-4 py-2 w-full border border-gray-300 rounded-md" />
		<button
			onClick={() => onSearch}
			className="p-2 px-4 bg-zinc-900 hover:bg-zinc-900/80 transition duration-150 text-white rounded-md flex items-center gap-2"> Search <Search /></button>
	</div>
}

const DetailedPost = ({ post }: { post: PostData }) => {
	return <div className="prose border rounded-md">
		<h2 className="text-2xl rounded-md p-4 bg-gray-100 font-semibold text-neutral-600">{post?.title}</h2>
		<div className="p-4 space-y-3" >
			<div className="flex items-center gap-3">
				<small><strong>Post ID:</strong> {post?.id}</small>
				<small><strong>User ID:</strong> {post?.userId}</small>
			</div>
			<p className="text-lg font-light">{post?.body}</p>
		</div>
	</div>
}

const Eye = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
		<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
		<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	</svg>
}

const Search = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
		<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
	</svg>
}
