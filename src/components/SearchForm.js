import React, { Component } from 'react'

const API_KEY = '391f2cdd'

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (event) => {
    this.setState({ inputMovie: event.target.value })
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    const { inputMovie } = this.state
    fetch(` http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search, totalResults } = results
        this.props.onResults(Search)
      })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Find a movie" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
        </button>
          </div>
        </div>
      </form>
    )
  }
}