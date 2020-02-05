const React = require("react");

const ListItem = ({ image }) => {
	return (
		<div className="col-3">
			<div className="card mb-3">
				<img src={image.urls.thumb} className="card-img-top" alt={image.alt_description} />
				<div className="card-body">
					<h5 className="card-title">{image.alt_description.toUpperCase()}</h5>
					<p className="card-text">{image.description}</p>
					<a href={image.links.download} className="btn btn-primary">
						Download
					</a>
				</div>
			</div>
		</div>
	);
};

module.exports = ListItem;
