import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        songs : [
            {
              title: "The Horizon of Saudade - Dil Bechara",
              artist: "A.R.Rahman",
              img_src: "https://images.genius.com/f798d2dd0bbec0c05bfb0ef94c7b2534.1000x1000x1.jpg",
              src: "https://pagalsong.in/uploads/systemuploads/mp3/Dil%20Bechara/The%20Horizon%20of%20Saudade%20-%20Dil%20Bechara%20128%20Kbps.mp3"
            },
            {
              title: "Song 2",
              artist: "Artist 2",
              img_src: "https://i1.sndcdn.com/artworks-000551838054-af70cv-t500x500.jpg",
              src: "https://docs.google.com/uc?export=download&id=1XqjTZopAZrxFoYwUxldu_gNa6b4Uwcjz"
            },
            {
              title: "Song 3",
              artist: "Artist 3",
              img_src: "./images/song-3.jpg",
              src: "./music/on-n-on.mp3"
            },
            {
              title: "Song 4",
              artist: "Artist 4",
              img_src: "./images/song-4.jpg",
              src: "./music/somebody-new.mp3"
            }
          ]
    };

    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;
export default Consumer;