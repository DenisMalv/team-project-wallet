import styled from '@emotion/styled';

export const Page = styled.div`
  @media screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
    background: #e7eaf2;
  }
  @media screen and (min-width: 768px) {
    // backdrop-filter: blur(50px);
  }
`;

export const PageCurrensy = styled.div`
  @media screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
    background: #e7eaf2;
    min-height: 100vh;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    flex-direction: row;
    height: 80vh;
  }
`;

export const Section = styled.section`
  padding: 0px 20px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 800px;
    padding: 0px 16px 0 69px;
    // border-left: 1px solid #e7e5f2;
    position: relative;
  }
`;
export const NavBalanceCurrencyBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 32px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin-top: 40px;
    padding: 0 69px 0 16px;
  }
`;

export const NavigationBalanceBox = styled.div`
  @media screen and (max-width: 767px) {
    padding: 0px 20px;
  }
`;
