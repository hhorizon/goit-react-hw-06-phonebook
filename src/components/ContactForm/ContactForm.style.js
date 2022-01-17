import styled from "styled-components";

const StyledForm = styled.form`
  width: 400px;
  padding: 7px;
  border: 2px solid #000;
  /* display: flex;
  flex-direction: column; */
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 20px;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  display: block;
  font-size: 18px;
  border-color: rgba(0, 0, 0, 30%);
  outline: none;
`;

const StyledButton = styled.button`
  display: block;
  /* width: 150px; */
  background-color: #fff;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 30%);
  font-weight: 600;
  font-size: 14px;

  &:active {
    background-color: #035bad;
  }
`;

export { StyledForm, StyledLabel, StyledInput, StyledButton };
