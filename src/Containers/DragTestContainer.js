import React, { Component } from 'react'
import PlayerPosition from '../Components/PlayerPosition'
import PlayerCard from '../Components/PlayerCard'
import '../Styles/dragTest.css'

export default class DragTestContainer extends Component {
    render() {
        return (
            <div className="drag-test-container">
                <main className="flexbox">
                    <PlayerPosition id="player-position-1" className="player-position">
                        <PlayerCard id="player-1" className="player">
                            PlayerOne
                        </PlayerCard>
                    </PlayerPosition>

                    <PlayerPosition id="player-position-2" className="player-position">
                        <PlayerCard id="player-2" className="player">
                            PlayerTwo
                        </PlayerCard>
                    </PlayerPosition>
                </main>
            </div>
        )
    }
}
