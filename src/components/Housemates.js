import React from "react";
import { Link } from "react-router-dom";
import "./Housemates.css";
import { connect } from "react-redux";

import swal from "@sweetalert/with-react";

import Progressbar from "./Progressbar";
import SingleHouseMate from "./SingleHouseMate";

const Housemates = ({ housemates, maximiumVotes }) => {
  const handleSubmit = (maximiumVotes) => {
    if (maximiumVotes !== 0) {
      return swal(
        <div>
          <h1>Hello</h1>
          <p>Please finish your votes</p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper-body">
          <div className="vote-bar text-center">
            <h5 className="vote-head">My Available Votes</h5>
            <h1 id="voteNumber" className="vote-number">
              {maximiumVotes}
            </h1>
            <Progressbar progress={maximiumVotes} />{" "}
          </div>
        </div>
      </div>

      <div className="row">
        {housemates.map((hm) => (
          <SingleHouseMate hm={hm} key={hm.id} />
        ))}
      </div>
      <div
        id="finishNotice"
        className="text-center text-danger mt-3 font-weight-bold"
      ></div>

      <div className="text-center d-flex justify-content-center">
        <button
          className="btn2 mb-4"
          onClick={() => handleSubmit(maximiumVotes)}
        >
          {maximiumVotes === 0 ? (
            <Link className="links" to={"/bbn/leaderboard"}>
              View LeaderBoard
            </Link>
          ) : (
            <Link className="links" to={"/"}>
              View LeaderBoard
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { housemates, maximiumVotes } = state;

  return {
    housemates,
    maximiumVotes,
  };
};

export default connect(mapStateToProps)(Housemates);
