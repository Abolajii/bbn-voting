import React from "react";
import { connect } from "react-redux";
import { increaseVote, decreaseVote } from "./redux/actionCreator";

const SingleHouseMate = ({ hm, decreaseCount, increaseCount }) => {
  const { name, picture, votes } = hm;

  return (
    <div className="col-md-6 mt-5">
      <div className="card leader--card">
        <div className="card-image">
          <img src={picture} alt={name} />
        </div>
        <div className="card-info">
          <p className="vote-name">{name}</p>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                onClick={decreaseCount}
                id="layconMinus"
                className="btn btn-outline-secondary"
                type="button"
              >
                -
              </button>
            </div>
            <input
              id="layconInput"
              value={votes === 0 ? "" : votes}
              onChange={() => {}}
              className="form-control inputt"
              type="number"
            />
            <div className="input-group-append">
              <button
                onClick={increaseCount}
                id="layconPlus"
                className="btn btn-outline-secondary"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.hm;
  return {
    increaseCount: () => dispatch(increaseVote(id)),
    decreaseCount: () => dispatch(decreaseVote(id)),
  };
};

const mapStateToProps = (state) => {
  const { housemates } = state;
  return { housemates };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleHouseMate);
