import React from 'react';

const LiveCode = ({ children }) => {
	return (
		<div className="max-w-[100%] w-full mb-3 box-border rounded-lg bg-[#1e1e1e] border border-[#484848] p-4 shadow-lg">
			{children}
		</div>
	);
};

export default LiveCode;
