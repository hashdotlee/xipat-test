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
				header: 'Actions',
				cell: () => <button>View</button>,
			}
		],
		[],
	);
	return (
		<section>
			<PageTitle title={"Post Management"}/>
			<Table<PostData> data={posts} columns={columns} />
		</section>
	);
}
