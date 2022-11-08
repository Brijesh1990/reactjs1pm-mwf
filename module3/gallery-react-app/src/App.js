import React from 'react';
import './App.css';
const img1='index_files/vlb_images1/1.jpg';
const img11='index_files/vlb_thumbnails1/1.jpg';

const img2='index_files/vlb_images1/2.jpg';
const img22='index_files/vlb_thumbnails1/2.jpg';

const img3='index_files/vlb_images1/2.jpg';
const img33='index_files/vlb_thumbnails1/2.jpg';

const img4='index_files/vlb_images1/3.jpg';
const img44='index_files/vlb_thumbnails1/3.jpg';

const img5='index_files/vlb_images1/4.jpg';
const img55='index_files/vlb_thumbnails1/4.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lightbox Gallery</h1>

        <div id="vlightbox1">

{/*           
          <a className="vlightbox1" href="index_files/vlb_images1/1.jpg" title="1"><img src="index_files/vlb_thumbnails1/1.jpg" alt="1" /></a> */}
<a className="vlightbox1" href={img1} title="1"><img src={img11} alt="1" /></a>
<a className="vlightbox1" href={img2} title="1"><img src={img22} alt="1" /></a>
<a className="vlightbox1" href={img3} title="1"><img src={img33} alt="1" /></a>
<a className="vlightbox1" href={img4} title="1"><img src={img44} alt="1" /></a>
<a className="vlightbox1" href={img5} title="1"><img src={img55} alt="1" /></a>

        </div>
      </header>
    </div>
  );
}

export default App;
