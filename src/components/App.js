const React = require("react");
const SearchBar = require("./SearchBar");
const ImagesList = require("./ImagesList");
const axios = require("axios");

class App extends React.Component {
	state = { images: [] };

	onSearchBarSubmit = async term => {
		const res = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID c7cb65a728ca8210c10780a231931cc564734f46273ad3f1050d3c15c677bd44"
			}
		});

		this.setState({ images: res.data.results });
	};

	render() {
		return (
			<div className="container">
				<h1>Search for images</h1>
				<SearchBar onSubmit={this.onSearchBarSubmit} />
				<p>Results: {this.state.images.length}</p>
				<ImagesList images={this.state.images} />
			</div>
		);
	}
}

module.exports = App;
