import React, { Component } from 'react'

import { Title } from '../components/title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
  state = {
    usedSearch: false,
    results: []
  }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults() {
    return this.state.results.length === 0
      ? <p>Sorry! <span role='img' aria-label='Sorry'>😓</span> Results not found!</p>
      : <MoviesList movies={this.state.results} />
  }

  render() {
    return (
      <div>
        <Title>MovieNet</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Use the form to search a movie</small>
        }
      </div>
    )
  }
}
