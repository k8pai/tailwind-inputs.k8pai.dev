import React from 'react';

const Table = ({ data }) => {
	return (
		<table className="min-w-full my-6 divide-y shadow-lg divide-gray-200 table-auto rounded-lg overflow-hidden">
			<thead>
				<tr className="divide-x bg-[#1e1e1e]">
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
						Props
					</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
						Type
					</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
						Definition
					</th>
				</tr>
			</thead>
			<tbody className="bg-transparent divide-y divide-gray-200">
				{data.map((item, index) => (
					<tr
						key={index}
						className={`divide-x ${
							index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#1e1e1e]'
						}`}
					>
						<td className="px-6 py-4 align-top whitespace-nowrap">
							<div className="text-sm font-medium text-gray-200">
								{item.props}
							</div>
						</td>
						<td className="px-6 py-4 align-top whitespace-nowrap">
							<div className="text-sm text-gray-300">
								{item.type}
							</div>
						</td>
						<td className="px-6 py-4 align-top">
							<div className="text-sm text-gray-300">
								{item.definition}
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
