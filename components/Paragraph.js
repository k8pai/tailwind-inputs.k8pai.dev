import React from 'react';

export default function Paragraph({ children }) {
	return (
		<p className="font-semibold my-6 text-base sm:text-lg tracking-wider">
			{children}
		</p>
	);
}
