import React, { useState } from 'react';
import { Item } from 'react-stately';
import { IoIosRocket } from 'react-icons/io';
import Select from '@/components/molecules/Select';
import Button from '@/components/atoms/Button';

import { QuizOptionsWrapper } from './QuizOptions.style';

const QuizOptions = ({ fields = [], startQuiz = () => { } }) => {
  // Find all the default values
  const keys = {};
  fields.forEach((i) => {
    keys[i.key] = i.defaultValue;
  });
  const [filter, setFilter] = useState(keys);

  const handleOptionChange = (key, value) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  return (
    <QuizOptionsWrapper>
      {
        fields?.length > 0 && fields.map(({
          key, label, options,
        }) => {
          return (
            <Select
              key={key}
              label={label}
              selectedKey={filter[key]}
              onSelectionChange={(selected) => handleOptionChange(key, selected)}
            >
              {
                options?.length > 0 && options.map((i) => {
                  return (
                    <Item
                      key={i.value}
                    >
                      {i.label}
                    </Item>
                  );
                })
              }
            </Select>
          );
        })
      }
      <Button
        isFullWidth
        onClick={() => startQuiz(filter)}
        isCallToAction
        icon={IoIosRocket}
        iconPosition="left"
      >
        Start Quiz
      </Button>
    </QuizOptionsWrapper>
  );
};

export default QuizOptions;
