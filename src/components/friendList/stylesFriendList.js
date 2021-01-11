import styled from 'styled-components';

export const ListFriends = styled.ul`
    width: 40vw;
    margin: 0 auto;
    padding: 20px 0;
    list-style: none;
  .item{
  display: flex;
  align-items: center;

  margin: 10px 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .item:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.status {
  width: 15px;
  height: 15px;
  margin-left: 15px;
 background: red;
  border-radius: 50%;
}
.statusActive {
   width: 15px;
  height: 15px;
  margin-left: 15px;
 background: green;
  border-radius: 50%;
}
.avatar {
  width: 70px;
  height: 70px;
  padding: 5px 15px;

  border-radius: 25px/15px;
}

.name {
  font-size: 22px;
}
`

