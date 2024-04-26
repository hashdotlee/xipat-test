import {
	ColumnDef,
	PaginationState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

export interface TableProps<T> {
	data: T[];
	columns: ColumnDef<T>[];
}

export default function Table<T>({ data, columns }: TableProps<T>) {
	const [pagination, setPagination] = useState<PaginationState>({
		pageSize: 10,
		pageIndex: 0,
	});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		state: {
			pagination,
		},
	});

	return (
		<>
			<table className="table-auto w-full">
				<thead className="border bg-gray-100 rounded-tl-lg text-neutral-600 rounded-tr-lg">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id} className="font-semibold p-4 text-left">
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{ data.length === 0 && <tr><td colSpan={columns.length} className="text-center p-4">No data</td></tr> }
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className="border-b border-x">
							{row.getVisibleCells().map((cell) => (
								<td className="px-4 py-2" key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
				<tfoot className="bg-gray-100">
					{table.getFooterGroups().map((footerGroup) => (
						<tr key={footerGroup.id}>
							{footerGroup.headers.map((header) => (
								<th key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.footer, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</tfoot>
			</table>
			<div className="flex my-4 items-center w-full justify-center gap-2">
				<button
					className="border rounded p-2 disabled:opacity-30 bg-gray-100"
					onClick={() => table.firstPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Start
				</button>
				<button
					className="border rounded p-2 disabled:opacity-30 bg-gray-100"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</button>
				<span className="p-2 bg-gray-100 border rounded-md text-neutral-700">
					<strong>{table.getState().pagination.pageIndex + 1}</strong> / {table.getPageCount()}
				</span>
				<button
					className="border rounded p-2 disabled:opacity-30 bg-gray-100"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</button>
				<button
					className="border rounded p-2 disabled:opacity-30 bg-gray-100"
					onClick={() => table.lastPage()}
					disabled={!table.getCanNextPage()}
				>
					End
				</button>
			</div>
		</>
	);
}
