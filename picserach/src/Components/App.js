import React from 'react';
import unsplash from '../API/unsplash';
import Searchbar from './Search';
import ImageList from './ImageList';

class App extends React.Component{
    state ={ images: [] }
    onSubmitChange = async term => {
        const response = await unsplash.get('search/photos', {
             params : { query: term}, 
         });
      this.setState({images: response.data.results });
     }

    render(){
    return <div className="ui container" style={{marginTop: '20px'}}>
    <Searchbar onSubmit={this.onSubmitChange}/>
    <ImageList images={this.state.images} />
    </div>
}
}
export default App;