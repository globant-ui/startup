import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-Home">
        <section>
              <h1>Premieres</h1>
              <div id="Premier"></div>
              <h1>Popular</h1>
              <div id="Popular"></div>
              <iframe id="premieres" src="https://www.youtube.com/embed/mvEetUDCKxE" frameborder="0" allowfullscreen></iframe>
              <iframe id="premieres" src="https://www.youtube.com/embed/KBahnqECT7o" frameborder="0" allowfullscreen ></iframe>
              <iframe id="premieres" src="https://www.youtube.com/embed/KpFMVcZ4o7U" frameborder="0" allowfullscreen ></iframe>
            <div id="verMovies"></div>
        </section>
        </div>
      </div>
    );
  }

}
export default Home;
