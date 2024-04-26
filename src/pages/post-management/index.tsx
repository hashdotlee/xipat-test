import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import usePosts from '../../apis/usePosts';
import Table from '../../components/Table';
import { PostData } from './data';
import PageTitle from '../../components/PageTitle';

export default function PostManagement() {
	const { posts = [] } = usePosts();
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
				cell: () => <button className="text-center block mx-auto" aria-label="view detail" title="View Detail"><Eye /></button>,
			}
		],
		[],
	);
	return (
		<section>
			<PageTitle title={"Post Management"} />
			<div className="p-8 flex flex-col items-center w-full">
				<div className="w-full">
					<Filter />
					<Table<PostData> data={posts} columns={columns} />
				</div>
			</div>
		</section>
	);
}

const Filter = () => {
	return <div className="flex gap-2 mb-4">
		<input type="text" placeholder="Search by user id or title" className="px-4 py-2 w-full border border-gray-300 rounded-md" />
		<button className="p-2 px-4 bg-zinc-900 hover:bg-zinc-900/80 transition duration-150 text-white rounded-md flex items-center gap-2"> Search <Search /></button>
	</div>
}

const Eye = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
		<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
		<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	</svg>
}

const Search = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
		<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
	</svg>
}
