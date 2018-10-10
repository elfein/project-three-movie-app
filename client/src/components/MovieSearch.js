import React, { Component } from 'react'
import Axios from 'axios';
import Result from './Result';

export default class MovieSearch extends Component {
    state = {
        typedQuery: '',
        query: '',
        results: []
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
        const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8b6d224ef9e9fbffddb5a60cef3bfb9c&query=${this.state.query}`)
        await this.setState({ results: response.data.results })
    }

    getQuery = () => {
        this.setState({ query: this.state.typedQuery })
        this.setState({ typedQuery: '' })
    }

    searchChangeHandler = (event) => {
        this.setState({ typedQuery: event.target.value })
    }

    // componentDidMount = async () => {
    //     const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8b6d224ef9e9fbffddb5a60cef3bfb9c&query=${this.state.query}`)
    //     console.log(response)
    // }

    render() {

        let allResults = []
        if (this.state.results) {
            allResults = this.state.results.map((movie, i) => {
                const movieImage = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                let movieGenre = ''
                if (movie.genre_ids[0]) {
                movieGenre =
                (this.genres.find(genre => genre.id === movie.genre_ids[0])).name }
                console.log(movieGenre)
                return <Result
                    addSearchSuggestion={this.props.addSearchSuggestion}
                    name={movie.title}
                    image={movieImage}
                    genre={movieGenre}
                    key={i} />
            })
        }

        return (
            <div>
                <div>
                    <input type='text'
                        value={this.state.typedQuery}
                        placeholder='Movie Title'
                        onChange={this.searchChangeHandler} />

                    <button onClick={this.searchClick}>Search</button>
                </div>
                <div>
                    <button onClick={this.props.switchSearch}>Search Again</button>
                    <div>
                        {allResults}
                    </div>
                </div>
            </div>
        )
    }
}
