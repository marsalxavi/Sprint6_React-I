import logo from './logo.svg';
import './App.css';

import Book from "./Book"
import llistatLlibres from "./llistatLlibres.json"

function App() {

  const llibresComp = llistatLlibres.map(llibre => <Book fTitle={llibre.title} fAuthor={llibre.author} />)

  return (
    <div>
      {llibresComp}
    </div>
  )
}

export default App;
