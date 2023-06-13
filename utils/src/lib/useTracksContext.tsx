import { ReactNode, createContext, useContext, useState } from 'react';

type SongSelectProps = { trackList: string[]; uri: string };

export type useTracksResponse = {
  play: boolean;
  tracks: string[];
  index: number;
  onSongSelect: ({ trackList, uri }: SongSelectProps) => void;
  isSelected: (uri: string) => boolean;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const TracksContext = createContext<useTracksResponse>({
  play: false,
  tracks: [],
  index: 0,
  onSongSelect: () => null,
  isSelected: () => false,
  setIndex: () => null,
  setPlay: () => null,
});

export const TracksContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [play, setPlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [tracks, setTracks] = useState<string[]>([]);

  const isSelected = (uri: string) => tracks[index] === uri;

  const onSongSelect = ({ trackList, uri }: SongSelectProps) => {
    if (play && isSelected(uri)) {
      setPlay(false);
    } else {
      setTracks(trackList);
      setIndex(trackList.indexOf(uri));
      setPlay(true);
    }
  };

  return (
    <TracksContext.Provider
      value={{
        tracks,
        index,
        play,
        setPlay,
        onSongSelect,
        isSelected,
        setIndex,
      }}
    >
      {children}
    </TracksContext.Provider>
  );
};

export const useTracks = () => {
  const context = useContext(TracksContext);
  if (!context) {
    throw new Error('useTracks can only be used in a TracksContextProvider');
  }
  return context;
};
