import React from "react";

export default class Pages extends React.Component {
  render() {
    const { page, onChangePages, onResetFilters, totalPages } = this.props;
    return (
      <div className="btn-group d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            onChangePages(page - 1);
          }}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            onChangePages(page + 1);
          }}
          disabled={page === totalPages}
        >
          Next
        </button>
        <button className="btn btn-danger" onClick={onResetFilters}>
          Reset filters
        </button>
      </div>
    );
  }
}
