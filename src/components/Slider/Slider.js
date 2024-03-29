import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import './Slider.css';

function Slider() {
  const nodeRef = React.useRef(null);

  let location = useLocation();

  const sliderWrapperClasses = "slider-wrapper "
    + ((location.pathname !== "/") ?
      "slider-opacity-init-enter "
      : "slider-opacity-init-exit ")
    + ((location.pathname.indexOf('/algorithms/contents/') !== 0) ?
      "slider-size-init-enter"
      : "slider-size-init-exit");

  const sizeInProps = (location.pathname.indexOf('/algorithms/contents') !== 0);

  return (
      <CSSTransition in={location.pathname !== "/"} timeout={400}
        classNames="slider-opacity" nodeRef={nodeRef}>
        <CSSTransition in={sizeInProps} timeout={400}
          classNames="slider-size" nodeRef={nodeRef}>

        <div className={sliderWrapperClasses} ref={nodeRef}>
          <div className="slider-container">
            <div className="slider">
              <span className="slide-item">Aho-Corasick</span>
              <span className="slide-item">DFS</span>
              <span className="slide-item">BFS</span>
              <Link to="/algorithms/contents/graham" className="text-link">
                <span className="slide-item">Graham Scan</span>
              </Link>
              <Link to="/algorithms/contents/stack" className="text-link">
                <span className="slide-item">Stack</span>
              </Link>
              <Link to="/algorithms/contents/seg" className="text-link">
                <span className="slide-item">Segment Tree</span>
              </Link>
              <Link to="/algorithms/contents/aho" className="text-link">
                <span className="slide-item">Aho-Corasick</span>
              </Link>
              <Link to="/algorithms/contents/dfs" className="text-link">
                <span className="slide-item">DFS</span>
              </Link>
              <span className="slide-item">BFS</span>
              <span className="slide-item">Graham Scan</span>
              <span className="slide-item">Stack</span>
            </div>
          </div>
        </div>

      </CSSTransition>
    </CSSTransition>
  );
}

export default Slider;
