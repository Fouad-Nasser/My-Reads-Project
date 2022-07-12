import React,{Component} from "react"
import PropTypes from "prop-types"

class Book extends Component
{
    render()
    {
        const book = this.props.book;
        const updateShelf = this.props.updateShelf;
        const authors = book.authors? book.authors : '';

        return(
            <div className="book">
                    <div className="book-top">
                      <div className="book-cover" 
                        style={{ width: 128,
                                 height: 193,
                                 backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                      </div>
                      <div className="book-shelf-changer">
                        <select defaultValue={book.shelf ? book.shelf : "none"} onChange={(e) => updateShelf(book, e.target.value)} >
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{authors && authors.join(', ')}</div>
              </div>
        )
    }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Book;