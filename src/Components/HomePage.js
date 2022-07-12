import React,{Component} from "react"
import PropTypes from "prop-types"
import Shelf from './Shelf'
import Header from './Header'
import SearchBtn from './SearchBtn'

class HomePage extends Component{
    render(){
      const books = this.props.books;
      const updateShelf = this.props.updateShelf;
      const SHELVES = [
        {
          title: 'Currently Reading',
          id: 'currentlyReading'
        },
        {
          title: 'Want To Read',
          id: 'wantToRead'
        },
        {
          title: 'Read',
          id: 'read'
        }
        ];

        return(
            <div className="list-books-content">
              <div>
                <Header/>
                {SHELVES.map(shelf =>
                    {
                      const shelfBooks = books.filter(
                        book => book.shelf === shelf.id);                
                      
                      return(
                          <Shelf key={shelf.id} books={shelfBooks} title={shelf.title} updateShelf={updateShelf} />
                      );
                    })    
                }
                <SearchBtn/>
              </div>
            </div>
        )
    }

}

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default HomePage;