import styled from 'styled-components';

export const TableTrensaction = styled.table`
  width: 40vw;
  margin: 50px auto;

  border-radius: 4px;

  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
.transaction-head{
     background-color: #00bcd4;
};
.transaction-body:nth-child(even) {
  background-color: rgb(236, 242, 243);
};
.transaction-cell{
  padding: 20px 50px;
  font-weight: 900;

  text-transform: uppercase;
  color: #fff;

  border-right: 1px solid rgb(224, 230, 231);
  border-left: 1px solid rgb(224, 230, 231);
}
.transaction-data{
  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;
  color: #5c6975;
  
  border-right: 1px solid rgb(224, 230, 231);
  border-left: 1px solid rgb(224, 230, 231);
}
`;