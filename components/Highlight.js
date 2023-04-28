import React from 'react';

const Highlight = ({ type, title, ...rest }) => {
	// if (type)
	return (
		<span className="text-highlight italic" {...rest}>
			{title}
		</span>
	);
};

export default Highlight;
