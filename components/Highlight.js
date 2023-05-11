import React from 'react';

const Highlight = ({ type, title, ...rest }) => {
	return (
		<span className="text-highlight italic" {...rest}>
			{title}
		</span>
	);
};

export default Highlight;
