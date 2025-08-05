// components/Loader.tsx
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
      </div>
      <p className="tagline">Loading Portfolio...</p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: radial-gradient(ellipse at center, #0f172a 0%, #000000 100%);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .pyramid-loader {
    width: 300px;
    height: 300px;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 5s linear infinite;
    position: relative;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .side {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(from 180deg, #0ea5e9, #3b82f6, #9333ea, #0ea5e9);
  }

  .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(from 180deg, #9333ea, #3b82f6, #0ea5e9, #9333ea);
  }

  .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(from 180deg, #3b82f6, #0ea5e9, #9333ea, #3b82f6);
  }

  .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(from 180deg, #0ea5e9, #9333ea, #3b82f6, #0ea5e9);
  }

  .shadow {
    width: 60px;
    height: 60px;
    background: #312e81;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
    opacity: 0.4;
  }

  .tagline {
    margin-top: 2rem;
    font-size: 1.2rem;
    font-family: 'Courier New', monospace;
    color: #93c5fd;
    letter-spacing: 1px;
    animation: fadeIn 2s ease-in-out infinite alternate;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Loader;
