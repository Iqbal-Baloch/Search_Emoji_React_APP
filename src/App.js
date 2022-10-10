import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react';
import filterEmojies from './filterEmoji';
import SearchBar from './componets/SearchBar';
import Head from './componets/Head';
import EmojiList from './componets/EmojiLists';

function App() {
  const [list, setList] = useState(() => {
    return filterEmojies("", 30)
  })

  const handleSearch = value =>{
    setList(prev =>{
      return filterEmojies(value, 30)
      
    })
  }
  return (
   <div className='container-sm alpha bg-dark'>
    <Head/>
    <SearchBar onChange={handleSearch}/>
    <EmojiList emojies = {list}/>
   </div>
  );
}

export default App;
