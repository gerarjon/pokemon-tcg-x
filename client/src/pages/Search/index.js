import React, { useState } from 'react' 
import API from '../../utils/API'

const Search = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getCardList(search)
      .then(res => {
        console.log(res.data.data[0])
      })
  }

  return(
    <form>
      <div className="field has-addons">
        <div className="control">
          <input 
            className="input" 
            type="text"
            value={search}
            onChange={handleInputChange}
          />
        </div>
        <div className="control">
          <button 
            className="button is-info"
            type="submit"
            onClick={handleFormSubmit}>
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search;