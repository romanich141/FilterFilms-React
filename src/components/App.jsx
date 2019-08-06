import React from "react";
import { API_KEY_3 } from "../api/api";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";

const initialState = {
  filters: {
    sort_by: "popularity.desc",
    primary_release_year: 2019,
    genres: []
  },
  page: 1,
  totalPages: null
};
export default class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  getGenres = () => {
    const genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_3}&language=en-US`;
    fetch(genres)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          genres: data.genres
        });
      });
  };
  onResetFilters = event => {
    if (this.state !== initialState) {
      event.preventDefault();
      this.setState({
        ...initialState
      });
    }
  };
  onChangeFilters = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({
      filters: newFilters
    });
  };
  onChangePages = page => {
    this.setState({
      page
    });
  };
  showTotalPages = totalPages => {
    this.setState({
      totalPages
    });
  };
  componentDidMount() {
    this.getGenres();
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                <Filters
                  filters={this.state.filters}
                  genres={this.state.genres}
                  page={this.state.page}
                  totalPages={this.state.totalPages}
                  onChangeFilters={this.onChangeFilters}
                  onChangePages={this.onChangePages}
                  onResetFilters={this.onResetFilters}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <MoviesList
              filters={this.state.filters}
              page={this.state.page}
              showTotalPages={this.showTotalPages}
              onChangePages={this.onChangePages}
            />
          </div>
        </div>
      </div>
    );
  }
}
