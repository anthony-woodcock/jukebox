import React from 'react'
import { connect } from 'react-redux'
import './NowPlaying.css'

function NowPlaying (props) {
    return (
        <div className="nowPlaying">
            {props.videoId}
        </div>
    )
}

function mapStateToProps (state) {
    return {
        videoId: state
    }
}

export default connect(mapStateToProps)(NowPlaying)