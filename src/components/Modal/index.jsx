import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import api from '../../services/api'
import { Container, Background } from './styles'

function Modal({ movieId }) {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get(`/movie/${movieId}/videos`)

      setMovie(results[0])
    }

    getMovies()
  }, [])

  return (
    <Background>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal

Modal.propTypes = {
  movieId: PropTypes.number
}
