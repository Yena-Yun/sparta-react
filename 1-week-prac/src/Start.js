import React from 'react';
import img from './scc_img01.png';

const Start = (props) => {

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          height: "100vh",
          width: "100vw",

          overflow: "hidden",

          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="outter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",

            height: "100vh",
            width: "150vw",

            overflow: "hidden",

            padding: "0px 8vw",
            boxSizing: "border-box",

            maxWidth: "400px",
          }}
        >
          <img src={img} alt="sparta" style={{ width: "80%", margin: "20px" }} />

          <h1 style={{ fontSize: "1.2em", margin: "10px", lineHeight: "1.4" }}>
            나는{" "}
            <span
              style={{
                backgroundColor: "#fef5d4",
                padding: "5px 10px",
                borderRadius: "30px",
              }}
            >
              {props.name}
            </span>
            에 대해 얼마나 알고 있을까?
          </h1>
          <input
            type="text"
            style={{
              padding: "10px",
              margin: "14px 0px",
              border: "1px solid #dadafc",
              borderRadius: "30px",
              width: "100%",
            }}
            placeholder="내 이름"
          />
          <button
            style={{
                padding: "8px 24px",
                margin: "8px 0",
              backgroundColor: "#dadafc",
              borderRadius: "30px",
              border: "#dadafc",
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    );
}

export default Start;