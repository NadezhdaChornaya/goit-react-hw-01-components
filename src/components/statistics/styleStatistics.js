import styled from 'styled-components';

const randomColor = (backgroundColor) => {
  const randomColor = `#${backgroundColor[Math.floor(Math.random() * backgroundColor.length - 1)]}`;
  return randomColor
};

const Section = styled.section`
 width: 40vw;
  margin: 50px auto;

  font-family: 'Lato', sans-serif;

  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
`;

const Title = styled.h2`
 padding: 20px;
  margin-bottom: 0;

  text-align: center;
  font-size: 16px;

  text-transform: uppercase;
`;

const ListStat = styled.ul`
  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const ItemStat = styled.li`

  width: calc(100% / 3);
  text-align: center;

  padding: 15px 0 20px;

  border-style: solid;
  border-width: 1px;
  border-color: rgb(228, 233, 240);

  background-color: ${(props) => props.backColor};
`;

const Label = styled.span`
 display: block;
 margin-right: 5px;
 font-size: 14px;
 line-height: 1.8;
 color: #fff;
 font-weight: 900;
`;

const Percentage = styled.span`
 font-size: 18px;
 color: #fff;
 font-weight: 900;
`;
export { randomColor, Section, Title, ListStat, ItemStat, Label, Percentage }