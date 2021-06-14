import React from "react";
import bannerHostMode from '../banner_host_sprout_1.png';

function LobbyHost() {
  return (
    <div className="lobby-host">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={bannerHostMode}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Hosting a Treevia Game</h1>
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

export default LobbyHost;