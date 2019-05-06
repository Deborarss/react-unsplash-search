import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    // console.log(term);
    const res = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    // console.log(res.data.results);
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Encontrado: {this.state.images.length} imagens */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;