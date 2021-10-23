import React from "react";
import { Link, withRouter } from "react-router-dom";
import bannerSinglePlayer from '../banner_darkmode_single.png';
import bannerSnippetUpload from '../upload_snippet_discord.png';
import bannerHostPlayer from '../banner_darkmode_host.png';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center text-center my-5">
          <div className="col-lg-7">
              <h1> Game modes </h1>
            <div className="row justify-content-center">
              <h5>Get to know the game by honing your skills within 'Single Player'</h5>
              <Link className="nav-link" to="/single-player">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={bannerSinglePlayer}
                  alt="bannerSinglePlayer"
                  />
              </Link>
            </div>
            <div className="row justify-content-center">
                <h5>Upload a snippet to the discord bot!</h5>
                <Link className="nav-link" to="/upload-snippet-discord">
                    <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={bannerSnippetUpload}
                    alt="bannerSnippetUpload"
                    />
                </Link>
                </div>
            <div className="row justify-content-center">
                <h5>Create your own 'Lobby' and await new challengers</h5>
                <Link className="nav-link" to="/lobby-host">
                    <img
                    className="img-fluid rounded mb-4 mb-lg-0"
                    src={bannerHostPlayer}
                    alt="bannerHostPlayer"
                    />
                </Link>
                </div>
                </div>
          <div className="col-lg-5 width-70">
            <h1 className="font-weight-light">What is Treevia?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;