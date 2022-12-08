import React from 'react'
/* import Player from "@madzadev/audio-player"; */
import thunder from '../music/thunderstruck.mp3';

/* const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    }
  ];
 */
export const Listener = () => {
  return (
    <div className='mt-5 mb-5'>
        {/* <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
        /> */}
        <audio className='rounded rounded-4' src={thunder} controls></audio>
    </div>
  )
}
