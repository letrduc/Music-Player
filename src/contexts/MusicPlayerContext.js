import React, { useState } from "react";
import Track1 from "../mp3/track_1.mp3";
import Track2 from "../mp3/track_2.mp3";
import Track3 from "../mp3/track_3.mp3";
import Track4 from "../mp3/track_4.mp3";
import Track5 from "../mp3/track_5.mp3";
import Track6 from "../mp3/track_6.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Acoustic Vibe - RomanSenykMusic",
      file: Track1,
    },
    {
      name: "LO FI Travel So Far - OYStudio",
      file: Track2,
    },
    {
      name: "The Weekend - chillmore",
      file: Track3,
    },
    {
      name: "Best Time - FASSounds",
      file: Track4,
    },
    {
      name: "Endless by PrabajithK - MildRelaxation",
      file: Track5,
    },
    {
      name: "Slow Motion - Lexin Music",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
