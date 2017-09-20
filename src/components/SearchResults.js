import React, { Component } from 'react'
import PlaylistItem from './PlaylistItem'
import './SearchResults.css'

class SearchResults extends Component {
    constructor () {
        super()

        this.state = {
        searchResults: []
        }

        this.getSearchResults = this.getSearchResults.bind(this)
    }

    componentDidMount () {
        const query = this.props.match.params.query

        this.getSearchResults(query)
    }

    componentWillReceiveProps (nextProps) {
        const query = nextProps.match.params.query

        this.getSearchResults(query)
    }

    getSearchResults (query) {
        const youtube = window.gapi.client.youtube

        youtube.search.list({
        q: query,
        part: 'snippet',
        maxResults: 50,
        type: 'video'
        }).then(response => {
        const result = response.result

        if (!result.items || !result.items.length) {
            return
        }

        this.setState({
            searchResults: result.items
        })
        }).catch(error => console.log(error))
    }

    render () {
        const searchResults = this.state.searchResults.map((searchResult, index) => {
        console.log(searchResult)
        return (
            <PlaylistItem key={index} title={searchResult.snippet.title} videoId={searchResult.id.videoId} />
        )
        })

        return (
        <div className="Playlist">
            {searchResults}
        </div>
        )
    }
}

export default SearchResults