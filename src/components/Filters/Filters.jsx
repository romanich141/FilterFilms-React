import React from "react";
import SortBy from "./SortBy";
import SortYear from "./SortYear";
import Pages from "./Pages";
export default class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year },
      page,
      genres,
      totalPages,
      onChangeFilters,
      onChangePages,
      onResetFilters
    } = this.props;

    return (
      <form className="mb-3">
        <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
        <SortYear
          primary_release_year={primary_release_year}
          onChangeFilters={onChangeFilters}
        />
        <div className="form-group">
          <div className="list-group-item">
            Страница: {page} из {totalPages}
          </div>
          <Pages
            page={page}
            totalPages={totalPages}
            onChangePages={onChangePages}
            onResetFilters={onResetFilters}
          />
          {/* {genres.map(item => {
            <div>{item.name}</div>;
          })} */}
        </div>
      </form>
    );
  }
}
