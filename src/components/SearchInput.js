import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './SearchInput.css'

class _SearchInput extends Component {
    handleSearch (event) {
        event.preventDefault()

        this.props.history.push(`/search/${event.target.query.value}`)
    }

    render(){
        return (
            <form className="SearchInput" onSubmit={this.handleSearch.bind(this)}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input name="query" type="text" placeholder="Search" />
            </form>
        )
    }
}

const SearchInput = withRouter(_SearchInput)

export default SearchInput