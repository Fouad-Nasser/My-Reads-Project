import React, {Component} from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import * as BooksAPI from '../BooksAPI'
import Book from "./Book"


class SearchPage extends Component{
    state = {
        query:'',
        results:[]
    }

    updateQuery = (query) => {
      this.setState({query: query})
      this.getResults(query.trim())
    }

    getResults = (query) => {
      if (query) {
        BooksAPI.search(query).then(resp =>{
          if (resp.error) {
              this.setState({results: []})
             }
             else
             {
              this.setState({results: resp})
             }
            });
      }
      else
      {
            this.setState({results: []})
     }
    }

    render(){
      const updateShelf = this.props.updateShelf;

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"> 
                <button className="close-search">Close</button> 
              </Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(e) => this.updateQuery(e.target.value) }
                  />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.results
                  .filter((result) => result.imageLinks)
                  .map(result =>
                    {
                      this.props.books.forEach(el => {
                        if (result.id === el.id) {
                            result.shelf = el.shelf;
                        }  
                      });
                      
                      return(
                        <li key ={result.id}>
                          <Book book={result} updateShelf={updateShelf} />
                        </li> 
                      );
                    })    
                }
              </ol>
            </div>
          </div>
        )
    }
}


SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default SearchPage;