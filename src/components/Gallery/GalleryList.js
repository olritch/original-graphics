import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class GalleryList extends Component {
  render() {
    return <div>

<div className="column" style={{ padding: '15px 5px 5px 5px' }}>
        <div style={{fontSize: '50px'}} className="ui grey center aligned huge header">
          Original Graphics
        </div>

        <div className="ui vertical center aligned segment">
          <div className="ui container">
            <h1 style={{ fontSize: '40px' }} className="ui header">
              Gallery
              <div className="sub header" style={{ paddingTop: '20px' }}>
                Check out a few selected samples of our work!
              </div>
            </h1>
          </div>
        </div>
        <div className='ui vertical center aligned segment'>
          <div className='ui container'>
            <h1 className='ui header'><Link to='/gallery/family'>Family</Link></h1>
            <h1 className='ui header'><Link to='/gallery/wedding'>Wedding</Link></h1>
            <h1 className='ui header'><Link to='/gallery/landscape'>Landscape</Link></h1>
            <h1 className='ui header'><Link to='/gallery/aerial'>Aerial</Link></h1>
            <h1 className='ui header'><Link to='/gallery/pet'>Pet</Link></h1>
          </div>
        </div>
      </div>
      </div>
  }
}

export default GalleryList
