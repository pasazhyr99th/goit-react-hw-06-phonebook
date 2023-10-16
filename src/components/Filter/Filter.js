// import React from 'react';
// import PropTypes from 'prop-types';
// import { FilterLabel, FilterInput } from './Filter.styled';

// const Filter = ({ value, onChange }) => (
//   <FilterLabel>
//     Find contact by name
//     <FilterInput type="text" value={value} onChange={onChange} />
//   </FilterLabel>
// );

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Filter;

// Filter.js
import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const changeFilterHandler = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contact by name
      <FilterInput type="text" value={filter} onChange={changeFilterHandler} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

