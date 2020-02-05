const React = require("react");

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = e => {
		e.preventDefault();
		const term = this.state.term;

		this.props.onSubmit(term);
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="mb-3">
				<div className="input-group mt-3">
					<input type="text" value={this.state.term} className="form-control" onChange={e => this.setState({ term: e.target.value })} />
					<div className="input-group-append">
						<button type="submit" className="btn btn-primary">
							Search
						</button>
					</div>
				</div>
			</form>
		);
	}
}

module.exports = SearchBar;
