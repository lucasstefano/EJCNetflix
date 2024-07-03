import styled from "styled-components";
// Styled Components
export const Title = styled.h2`
  color: white;
  text-align: center;
  margin: 20px 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
  background: #141414;
  height: 100vh;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  width: 50%;
`;

export const Select = styled.select`
  padding: 8px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  width: 30%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #0e3db3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 20%;
  cursor: pointer;
  &:hover {
    background-color: #21a1f1;
  }
`;

export const SubMessage = styled.div`
  color: white;
  margin-top: 10px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;

export const CheckboxLabel = styled.label`
  color: white;
`;
