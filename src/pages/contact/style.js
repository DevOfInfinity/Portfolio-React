import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Item = styled.div`
  margin-top: 40px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  word-break: break-word;

  
  @media (max-width: 760px) {
   font-size: 12px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  margin-top: 40px;
  align-items: center;
  width: auto;
  word-break: break-word;
  line-height: 3;

  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 760px) {
   font-size: 12px;
  }
`;

export const customLinkStyles = {
  color: 'lime',
  textdecoration: 'underline',
  fontSize: '25px',
};