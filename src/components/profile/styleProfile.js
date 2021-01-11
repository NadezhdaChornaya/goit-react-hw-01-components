import styled from 'styled-components';

const CardWrapper = styled.div`
width: 40vw;

	text-align: center;
	margin: 0 auto;
    border: solid 1px #d8e0ea;
    .avatar{
        width: 100px;
        padding: 30px;
        border-radius: 50%;}
    `;

// const Avatar = styled.img`
// width: 100px;
//   padding: 30px;
//   border-radius: 50%;
// `;
const User = styled.p`  
font-size: 18px;
  font-weight: 700;`;

const UserInfo = styled.p`
 font-size: 14px;
  color: #768696;
  line-height: 1;
`;

const ListStats = styled.ul`
 display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 20px 0 0;

  list-style: none;
`;
const ItemStats = styled.li`
width: calc(100% / 3);
  text-align: center;

  padding: 15px 0 20px;

  border:1px solid rgb(228, 233, 240);

  background-color: rgb(243, 246, 249);
`;

const Label = styled.span`
margin-right: 5px;

font-size: 14px;
  line-height: 1.8;
  color: #768696;
`;

const Quantity = styled.span`
font-size: 16px;
  font-weight: 900;
`;

export { CardWrapper, User, UserInfo, ListStats, ItemStats, Label, Quantity }