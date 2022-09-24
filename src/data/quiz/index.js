import amount from './amount';
import category from './category';
import difficulty from './difficulty';
import questionType from './type';

const fields = [
  {
    label: 'Number of Questions',
    options: amount,
    key: 'amount',
    defaultValue: 10,
  },
  {
    label: 'Select Category',
    options: category,
    key: 'category',
    defaultValue: 'any',
  },
  {
    label: 'Select Difficulty:',
    options: difficulty,
    key: 'difficulty',
    defaultValue: 'any',
  },
  {
    label: 'Select Type:',
    options: questionType,
    key: 'type',
    defaultValue: 'any',
  },
];

export default fields;
