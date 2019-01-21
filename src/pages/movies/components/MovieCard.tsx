import React, { SFC } from 'react'

export interface IMovieCard {
imgUrl: string,
  title: string,
  youtubeLink: string,
  votes: string,
  smashCharacter: string
}

// TODO: paths taht make sense
export const MovieCard: SFC<IMovieCard> =
({ imgUrl, title, youtubeLink, votes, smashCharacter }) => (
  <div>
    <img src={imgUrl || '../../../godzilla4evr.jpg'} />
  </div>
)
