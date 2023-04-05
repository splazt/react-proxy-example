import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import Footer from './components/Footer';

///Todos
import CreateTodo from './components/CreateTodo';
import { getAllTodos, createTodo } from './services/TodoService';
import TodoTable  from './components/TodoTable';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [todoList, setTodoList] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberOfTodos] = useState(0);

  const handleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const handleSubmitTodo = () => {
    createTodo(todoList)
      .then(() => {
        setNumberOfTodos(numberOfTodos+1);
      })

  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        console.log(data);
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        console.log(data);
        setTodos(data);
        setNumberOfTodos(data.length);
      })
  }

  const handleOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  const handleOnChangeForm_Todos = (e) => {
      let inputData = todoList;
      if (e.target.name === 'todo'){
        todoList.todo = e.target.value;
      }else if (e.target.name === 'category') {
        todoList.category = e.target.value;
      }else if (e.target.name === 'complete'){
        todoList.isComplete = e.target.value;
      }

      console.log(inputData);
      setTodoList(inputData);
  }


  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <div className="forms">
        <CreateBook
          bookShelf={bookShelf}
          onChangeForm={handleOnChangeForm}
          handleSubmit={handleSubmit}
        />
        <CreateTodo
          todoList={todoList}
          onChangeForm={handleOnChangeForm_Todos}
          handleSubmit={handleSubmitTodo}
        />
        </div>
        <DisplayBoard
          numberOfBooks={numberOfBooks}
          getAllBook={getAllBook}
          numberOfTodos={numberOfTodos}
          getAllTodo={getAllTodo}
        />
        <div className="forms">
          <BookTable books={books} />
          <TodoTable todos={todos} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
