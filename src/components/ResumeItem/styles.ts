import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Title = styled.div`
  text-transform:uppercase;
`;

export const Value = styled.div<{color: string}>`
  font-weight:bold;
  color:${props => props.color}
`;