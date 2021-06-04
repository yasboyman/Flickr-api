import './App.css';
import React ,{useState, useEffect}  from 'react';
import axios from 'axios';
import Picture from "./Components/Picture";



const App = () => {

 // get recent        https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ac27434a1132e8a9e3b43994d9ca1df4&format=json&nojsoncallback=1
  //  get intersting     https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ac27434a1132e8a9e3b43994d9ca1df4&format=rest

    //get pic info = https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=ac27434a1132e8a9e3b43994d9ca1df4&photo_id={insertID}&format=rest

// https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ac27434a1132e8a9e3b43994d9ca1df4&tags=mike&format=json&nojsoncallback=1

    // flicker-api
    // Key:  ac27434a1132e8a9e3b43994d9ca1df4
    // Secret: 83a84283000f9302

    const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
    const [info, setInfo] = useState([])
    const [input, setInput]= useState('')


  const fetchData = async () => {
    try {
      const response = await
          axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ac27434a1132e8a9e3b43994d9ca1df4&tags=${input}&safe_search=1&format=json&nojsoncallback=1`)
              .then((res) => {
               const pics =   res.data && res.data.photos.photo.map( pic  => {
                    const srcPath =  `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_${'q'}.jpg`
                    return ( <img src={srcPath} alt={'pic'} id={pic.id} />
                        )
                })
                  setData(pics)
              })

    } catch (e) {
      console.log('error', e)
    }}

    const handleSubmit = (e) => {
        e.preventDefault()
     setInput(e.target.value)
    fetchData()
    }



  return (
    <div className="App">
      <header className="App-header">
          <form>
              <input
                  type={'text'}
                  value={input}
                  placeholder={'search Flickr'}
                  onChange={(e) => setInput(e.target.value)}

                  onSubmit={(e) => handleSubmit(e)}
              />
              <button onClick={(e) => handleSubmit(e)}>Search</button>

          </form>


          <div className={'pictures'}>
              {data && data.map(( image => {
                  return <Picture
                      src={image.props.src }
                      alt={image.props.alt}
                      id={image.props.id}
                  />
              }))
              }
          </div>


      </header>

        {loading && 'loading....'}
    </div>
  );
}

export default App;
