import styled from 'styled-components'


export const Container = styled.div`
  width:100%;
  max-width:100%;
  max-width:980px;
  margin: 0 auto;
`
export const Header = styled.header`
  width:100%;
  max-width:980px;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  background-color:blue;
  height:150px;
  
  h1{
    font-size:32px;
    font-weight: bold;    
    text-transform:uppercase ;
  }
  `
export const Body = styled.section`
  font-size:12px;
`;

export const Footer = styled.footer`
  width:100%;
  max-width:980px;
  margin: 0 auto;
  display:flex;
  text-transform:uppercase ;
  justify-content:center;
  background-color:green;

  p{
    color:white;
    font-size:21px;
  }
`