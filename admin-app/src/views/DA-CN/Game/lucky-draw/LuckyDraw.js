import React, { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import headerImg from "./images/header.png";
import reward from "./images/reward.png";
import { Flip } from "number-flip";
import "./LuckyDraw.css";

function LuckyDraw() {
  const { width, height } = useWindowSize(50, 50);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const $ = s => document.querySelector(s);
    const sepa = new Flip({
      node: $(".separate"),
      from: 999999,
      separator: "",
      direct: false,
      duration: 7
    });

    $(".btn-start").onclick = () => {
      let result = ~~(Math.random() * 999999);
      sepa.flipTo({
        to: result
      });
      window.localStorage.setItem("result", result);
    };
  });
  return (
    <div id="lucky-draw">
      <div className="header">
        <img src={headerImg} alt="" />
        <p>CHÚC MỪNG KHÁCH HÀNG MAY MẮN</p>
      </div>
      <div className="box">
        <div className="separate" />
        <button
          className="btn-start"
          onClick={() => setTimeout(() => setShow(true), 7500)}
        >
          Quay
        </button>
      </div>
      {show ? (
        <>
          <div className="confetti">
            <Confetti width={width} height={height} />
          </div>
          <div className="reward">
            <img src={reward} alt="" />
            <div className="info">
              <div>
                <span>Kết quả :</span>
                <b>{window.localStorage.getItem("result")}</b>
              </div>
              <div>
                <span>Họ và tên :</span>
                <b>Hardcode</b>
              </div>
              <div>
                <span>Số điện thoại :</span>
                <b>Hardcode</b>
              </div>
              <div>
                <span>Mã dự thưởng :</span>
                <b>Hardcode</b>
              </div>
            </div>
            <button
              className="btn-close"
              onClick={() => {
                setShow(false);
              }}
            >
              Đóng
            </button>
          </div>
          <div className="mask" />
        </>
      ) : (
        <div />
      )}
    </div>
  );
}

export default LuckyDraw;
