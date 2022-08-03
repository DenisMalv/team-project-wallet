import { Diagram } from 'components/Statistics/Diagram/Diagram';
import { SelectCategories } from 'components/Statistics/SelectCategories/SelectCategoies';
import { CategoriesList } from 'components/Statistics/CategoriesList/CetegoriesList';

import { useState, useEffect } from 'react';
import { useSelect, useDispatch } from '@mui/base';
import transactionSelectors from 'redux/transaction/transaction-selectors';
import {
  getCategory,
  getByDate,
  getAllTransactions,
} from 'redux/transaction/transaction-operation';

import {
  StatisticsContainer,
  GraphicsContainer,
  CategoriesContainer,
} from './Statistics.styled';

// const months = [
//   { name: 'January', type: 'january' },
//   { name: 'February', type: 'February' },
//   { name: 'March', type: 'march' },
//   { name: 'April', type: 'april' },
//   { name: 'May', type: 'may' },
//   { name: 'June', type: 'june' },
//   { name: 'July', type: 'july' },
//   { name: 'August', type: 'august' },
//   { name: 'September', type: 'september' },
//   { name: 'October', type: 'october' },
//   { name: 'November', type: 'november' },
//   { name: 'December', type: 'december' },
// ];
// const years = [
//   { name: 2016, type: 2016 },
//   { name: 2017, type: 2017 },
//   { name: 2018, type: 2018 },
//   { name: 2019, type: 2019 },
//   { name: 2020, type: 2020 },
//   { name: 2021, type: 2021 },
//   { name: 2022, type: 2022 },
// ];
export const Statistics = () => {
  console.log('123');
  // console.log(qwe);
  const qwe = useSelect(transactionSelectors.getTransaction());
  useEffect(() => {
    // dispatch(getAllTransactions());
    const a = async () => {
      const b = await getCategory();
      console.log(b);
    };
    a();
    console.log('refresh');
  });

  return (
    <StatisticsContainer>
      <GraphicsContainer>
        <Diagram />
        <CategoriesContainer>
          <SelectCategories />
          <CategoriesList />
        </CategoriesContainer>
      </GraphicsContainer>
    </StatisticsContainer>
  );
};
