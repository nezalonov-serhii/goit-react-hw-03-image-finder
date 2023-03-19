import { Component } from 'react';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchName: '',
  };

  onSubmitSearch = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmitSearch} />
        <ImageGallery searchName={this.state.searchName} />c
      </>
    );
  }
}
