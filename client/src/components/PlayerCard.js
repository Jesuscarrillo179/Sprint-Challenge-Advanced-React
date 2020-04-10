import React from 'react'
import './PlayerCard.css'

const PlayerCard = props => {
    console.log(props)
    return(
        <div className="card">
            <p className="player-name"><span>Name:</span> {props.item.name}</p>
            <p><span>Country:</span> {props.item.country}</p>
        </div>
    )
}

export default PlayerCard;