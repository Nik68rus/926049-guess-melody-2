export const questions = [
  {
    id: 1,
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: 1,
        src: `https://upload.wikimedia.org/wikipedia/commons/9/90/National-Anthem-of-Spain-_1931-1939_-Himno-de-Riego.ogg`,
        genre: `rock`,
      },
      {
        id: 2,
        src: `https://upload.wikimedia.org/wikipedia/commons/c/c0/National_anthem_of_Italy_-_U.S._Navy_Band_%28long_version%29.ogg`,
        genre: `pop`,
      },
      {
        id: 3,
        src: `https://upload.wikimedia.org/wikipedia/commons/3/30/La_Marseillaise.ogg`,
        genre: `jazz`,
      },
      {
        id: 4,
        src: `https://upload.wikimedia.org/wikipedia/commons/6/60/Brazilian_Flag_Anthem.ogg`,
        genre: `rock`,
      },
    ],
  },
  {
    id: 2,
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/2/2b/I_Love_You%2C_California%2C_by_Knickerbocker_Quartet_and_Elizabeth_Spencer_%28cusb-cyl0260d%29.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  },
];

export const settings = {
  gameTime: 5,
  errorCount: 3,
};
