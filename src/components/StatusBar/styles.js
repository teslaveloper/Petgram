import styled from 'styled-components';

export const SDBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  align-items: start;
  z-index: 30;
  width: inherit;
  font-size: 14px;
  align-items: end;
  top: 0;

  & .SdbarContent {
    background: rgba(132, 118, 118, 0.76);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 12px 15px;
    min-width: 193px;
    padding: 20px;
    min-width: 206px;
    max-width: 206px;

    & li.items {
      list-style: none;
      margin: 5px 0;
      word-break: break-word;

      & .btn-logout {
        color: red;
        cursor: pointer;
        & span {
          margin-right: 10px;
        }
      }
    }
  }

`

export const SDBarButton =  styled.div`

  top: 20px;
  position: fixed;
  z-index: 20;
  width: inherit;
  display: flex;
  justify-content: end;

  & span {
    margin: 0 20px 0 0;
  }
`

export const SdbarCloseButton = styled.span`
  align-self: end;
  font-size: 20px;
  cursor: pointer;
`

export const SdbarLogOut = styled.div`
  align-self: end;
  font-size: 20px;
  cursor: pointer;
`




