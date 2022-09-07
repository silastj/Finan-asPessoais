import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

  button {
    border: none;
    padding: 5px 15px;
    text-transform: uppercase;
    cursor: pointer;
    height:45px;
    border:1px solid;
    transition: .3s ease-in-out;

    :hover{
      transition: .3s ease-in-out;
      background-color:#aad;
      color:#fff;
      border:1px solid #fff;
    }
  }
  div {
    display: flex;
    flex-direction: column;
  }
  div input,
  div select{
    height:30px;
    cursor: pointer;
  }
  div label {
    font-weight: bold;
    text-transform: uppercase;
  }
`;
