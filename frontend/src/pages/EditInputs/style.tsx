import styled from "styled-components";
import 'fontsource-poppins';
export const ScreenView = styled.div`
  display: flex;
  background: #212124;
  height: 100vh;
  flex-direction: row;
`;

export const ReturnArrow = styled.img`
    width: 16px; /* 25px * 0.65 */
    height: 16px; /* 25px * 0.65 */
    z-index: 1;
    margin: 0 19.5px; /* 30px * 0.65 */
    @media (max-width: 768px) {
        margin: 0 13px; /* 30px * 0.65 */
    }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: #1d1d1d;
  max-width: 350px;
  height: 200px;
`;

export const InputImg = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: white;
  display: none;
`;
export const UploadButton = styled.label`
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;


export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover; 
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  margin: 0px 0px 4px 0;
`;

export const ButtonContainer = styled.div`
    gap: 6px;
    display: flex;
    flex-direction: row;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 20px 20px;

`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  width:90%;
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

export const ConfirmImageButton = styled.button`
background-color: #4CAF50; /* Verde */
color: white;
padding: 10px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
margin-bottom: 10px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #45a049; /* Verde mais escuro */
}
`;

export const DeleteContainer = styled.div`
padding:10px;
 width: 290px;
  height: 100px;
  right: 0;
  top: 16px;
  position: absolute;
  border: 1px solid #a2a0ad;
  background-color: #2b283c;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const DeleteButtonContainer = styled.div`
display: flex;
flex-direction: row;
`;