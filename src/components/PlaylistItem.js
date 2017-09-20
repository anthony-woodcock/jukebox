import { connect } from 'react-redux'
import { setPlayingVideoId } from '../actions'
import React from 'react'
import './PlaylistItem.css'

function PlaylistItem (props) {
    return (
        <div className="PlaylistItem">
            <div className="play">
                <i className="fa fa-play" aria-hidden="true" onClick={() => props.onClickPlay(props.videoId)}></i>
            </div>
            <div className="title">
                {props.title}
            </div>
        </div>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        onClickPlay (videoId) {
            dispatch(setPlayingVideoId(videoId))
        }
    }
}

export default connect(null, mapDispatchToProps)(PlaylistItem)