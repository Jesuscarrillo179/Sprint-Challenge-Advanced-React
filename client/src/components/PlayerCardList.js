import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerCardList = props => {
    return(
        <div className="cardlist">
            {props.playersData.map(obj => {
                return <PlayerCard item={obj}/>
            })}
        </div>
    )
}

export default PlayerCardList;