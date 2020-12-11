import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const hm = useSelector((state) => state.housemates);

  const z = hm.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-body">
            <div>
              <h1 className="result-header">Leaderboard</h1>
            </div>

            <div className="leader-board-wrapper">
              {z.map((hm) => (
                <div key={hm.id} className="card leader--card2">
                  <div className="card-image">
                    <img src={hm.picture} alt={hm.name} />
                    <h4>{hm.name}</h4>
                  </div>

                  <button className="btn btn-primary leader--btn">
                    {hm.votes}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <h4 className="evicted-name text-capitalize">
                {z[0].name} is the winner
              </h4>
            </div>

            <div className="text-center d-flex justify-content-center">
              <button className="btn1">
                <Link className="links" to="/">
                  Back to Votes
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
