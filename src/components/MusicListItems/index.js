import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListContainer,
  TrackInfoContainer,
  Image,
  NameGenreContainer,
  Name,
  Genre,
  DurationInfoContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicListItems = props => {
  const {musicDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
    console.log(id)
  }

  return (
    <ListContainer>
      <TrackInfoContainer>
        <Image src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationInfoContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          data-testid="delete"
          type="button"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={22} />
        </DeleteButton>
      </DurationInfoContainer>
    </ListContainer>
  )
}

export default MusicListItems
