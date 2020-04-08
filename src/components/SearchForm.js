import React, { Component } from 'react'

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (event) => {
    this.setState({ inputMovie: event.target.value })
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    alert(this.state.inputMovie)
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