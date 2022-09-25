import React from 'react';
import Wrapper from '@/components/atoms/Wrapper';
import { ScoreContainer, ScoreValue, ScoreLabel } from './Score.style';
import Confetti from '@/components/atoms/Confetti';

const Score = ({ info }) => {
  const {
    correct,
    answered,
    questions,
    remainingTime,
  } = info;

  const scorePercentage = correct / questions.length;
  const isConfetti = scorePercentage > 0.3;
  let imgSrc;
  if (scorePercentage > 0.5) {
    imgSrc = 'https://c.tenor.com/xDHCe07zrocAAAAC/congrats-minions.gif';
  } else if (scorePercentage > 0.3) {
    imgSrc = 'https://c.tenor.com/AhvkowDENcMAAAAC/nice-its-okay.gif';
  } else {
    imgSrc = 'https://c.tenor.com/sAdlyyKDxogAAAAC/bart-simpson-the-simpsons.gif';
  }

  return (
    <Wrapper>
      {
        isConfetti
        && <Confetti />
      }

      <ScoreContainer>
        <img
          src={imgSrc}
          alt="congrats"
        />

        <div>
          <ScoreLabel>Answered</ScoreLabel>
          <ScoreValue>
            {answered}
          </ScoreValue>
        </div>

        <div>
          <ScoreLabel>Correct</ScoreLabel>
          <ScoreValue>
            {correct}
          </ScoreValue>
        </div>

        <div>
          <ScoreLabel>Incorrect</ScoreLabel>
          <ScoreValue>
            {answered - correct}
          </ScoreValue>
        </div>

        <div>
          <ScoreLabel>Remaining Time</ScoreLabel>
          <ScoreValue>
            {remainingTime / 1000} seconds
          </ScoreValue>
        </div>
      </ScoreContainer>
    </Wrapper>
  );
};

export default Score;
