import React from 'react';
import { decode } from 'html-entities';
import { QuestionWrapper } from './Question.style';

const Question = ({ question }) => {
  return (
    <QuestionWrapper>
      {decode(question) || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam atque explicabo ipsam error maxime magnam sit at iste delectus, distinctio optio illo omnis quas similique facilis? Perferendis nam aliquid magnam quaerat beatae dignissimos'}
    </QuestionWrapper>
  );
};

export default Question;
