import React, { Component } from 'react';
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import BookCards from './BookCards';

class App extends Component {
  state = {
    query: "",
    books: {},
    message: "Nothing to show yet. Try searching for a book!"
  }

  handleChange(query) {
    this.setState({
       query
    })
  }

  handleSearch() {
    let {query} = this.state;
    const api = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
    const url = api+query;
    console.log(url);
    fetch(url, {
        method: 'GET'
      })
      .then(res =>  res.json())
      .then((data) => {
        if (data.items){
          let books = data.items;
          console.log(books);
          this.setState({
            books
          })
          console.log(this.state.books);
        } else {
          this.setState({
            message: "Could not find any book by that title! Try again"
          })
        }
      })

  }

  render() {
    const isVisible = this.state.query!=="";
    const {books,message} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>BOOK FINDER</h1>
        </header>
        <main>
          {/* ------ SearchBar ------ */}
          <InputGroup>
              <FormControl
              type = "search"
              placeholder= "Search by book name"
              onChange={(e) => this.handleChange(e.target.value)}
              value= {this.state.query}
              />
              <InputGroup.Append>
              <Button
                disabled = {!isVisible}
                variant= "info"
                onClick = {() => this.handleSearch()}
              >Search</Button>
              </InputGroup.Append>
          </InputGroup>
          <br></br>
          {/* ------ BookCards ------ */}
          <BookCards
            books={books}
            message = {message}
          />
        </main>
      </div>
    );
  }
}

export default App;
