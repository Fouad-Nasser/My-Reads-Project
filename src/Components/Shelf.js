import React,{Component} from "react"
import PropTypes from "prop-types"
import Book from "./Book"

class Shelf extends Component
{
    render()
    {
      const books = this.props.books;
      const updateShelf = this.props.updateShelf;

        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(book => (
                      <li key ={book.id}>
                        <Book book={book} updateShelf={updateShelf} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
        )
    }
}


Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Shelf;