const React = require("react");
const ListItem = require("./ListItem");

const ImagesList = ({ images }) => {
	const ListItems = images.map(image => <ListItem key={image.id} image={image} />);

	return <ul className="row pl-0">{ListItems}</ul>;
};

module.exports = ImagesList;
