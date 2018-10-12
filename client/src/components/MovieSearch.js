import React, { Component } from 'react'
import Axios from 'axios';
import Result from './Result';
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
#results {
  position: fixed;
  transform: translateY(-53%);
  text-align: center;
  height: 700px;
  width:400px;
  overflow: auto;
  padding: 5px;
  background: rgb(30,90,120);
  border-radius: 3px;
}
#searchAgain{
  padding-bottom: 6px; 
}
`

export default class MovieSearch extends Component {
  state = {
    typedQuery: '',
    query: '',
    results: [],
    hasSearched: false
  }

  genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  searchClick = async () => {
    await this.getQuery()
    const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.query}`)
    await this.setState({ results: response.data.results })
    this.setState({ hasSearched: true })
    this.setState({ typedQuery: '' })
  }

  getQuery = () => {
    this.setState({ query: this.state.typedQuery })
  }

  searchChangeHandler = (event) => {
    this.setState({ typedQuery: event.target.value })
  }

  clearSearch = () => {
    this.setState({ hasSearched: false, results: [] })
  }

  resetSearch = () => {
    this.setState({ hasSearched: false })
    this.props.chooseChoice()
  }

  render() {

    let allResults = []
    if (this.state.results) {
      allResults = this.state.results.map((movie, i) => {
        const movieImage = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
        let movieGenre = ''
        if (movie.genre_ids[0]) {
          movieGenre =
            (this.genres.find(genre => genre.id === movie.genre_ids[0])).name
        }
        return <Result
          resetSearch={this.resetSearch}
          addSearchSuggestion={this.props.addSearchSuggestion}
          name={movie.title}
          image={movieImage}
          genre={movieGenre}
          key={i} />
      })
    }

    return (
      <div>
        {this.state.hasSearched ?
          <StyledDiv>
            <div id='results'>
              <div id='searchAgain' onClick={this.clearSearch}>Search Again</div>
              {allResults}
            </div>
          </StyledDiv> :
          <StyledDiv>
            <input type='text'
              value={this.state.typedQuery}
              placeholder='Movie Title'
              onChange={this.searchChangeHandler} />
            <button onClick={this.searchClick}>Search</button>
          </StyledDiv>
        }
      </div>
    )
  }
}
