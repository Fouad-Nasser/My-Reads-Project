import React,{Component} from "react"
import {
  Routes,
  Route
} from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import HomePage from './Components/HomePage'
import SearchPage from './Components/SearchPage'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

   // create function to check if book exist in books array
   isExistantBook = (book) =>{
    for (const b of this.state.books) {
      if (b.id === book.id) {
        return true;
      }
    }
    return false;
  }

  

   updateShelf = (changedbook, newShelf) => {
    const arr = [];

    // use function update to change shelf of book to another one  
    BooksAPI.update(changedbook,newShelf);

    // if the changedbook is not exist in books array push it
    if(!this.isExistantBook(changedbook))
    {
      arr.push(changedbook);
    }
   
    // update books array using setState
    this.setState({books:this.state.books.concat(arr).map(book => {
        if (book.id===changedbook.id) {
          book.shelf = newShelf;
        }
        return book;
    })
    })
  }


  componentDidMount(){
    BooksAPI.getAll().then(resp => this.setState({books: resp}));
  }

  render() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/"
                    element={
                    <div className="list-books">  
                        <HomePage books={this.state.books} updateShelf={this.updateShelf} />
                    </div>
                    }/>

                <Route path="/search" element={<SearchPage books={this.state.books}  updateShelf={this.updateShelf} />} />
            </Routes>
        </div>      
    )
  }
}

export default BooksApp;
