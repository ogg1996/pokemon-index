import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: ${(props) => (props.fliped ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: 0.5s;
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

function FlipCard({ front, back }) {
  const [fliped, setFliped] = useState(false);
  return (
    <>
      <FlipImageContainer fliped={fliped}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button onClick={() => setFliped(!fliped)}>뒤집기</button>
    </>
  );
}

export default FlipCard;
