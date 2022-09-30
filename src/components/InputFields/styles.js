import styled from 'styled-components';

export const STLForm = styled.form`
  padding: 16px 40px;
`

export const STLInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

  &[disabled] {
    opacity .3;
  }
`

export const STLSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity .3;
  }
`

export const STLButton = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity .3;
  }
`

