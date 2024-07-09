import styled from "styled-components";
import BGI from '../../assets/FundoG.svg'
interface BackgroundImageProps {
    src: string;
    position: "bottom-left" | "top-right" | "bottom-right";
}

export const RightSide = styled.div`    
    position: relative;
  
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding-bottom: 60px;
    background:   #2287F3;
    opacity: 0.4; 
    z-index: -1; 
    }
`;

export const InputContainer = styled.div`
    margin-bottom: 15px;
    width: 40%;
`;

export const InputLabel = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 20px; /* 48px * 0.65 */
    font-weight: 700;
    color: #001238;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const CheckboxContainer = styled.div`
    margin-bottom: 15px;
`;

export const CheckboxLabel = styled.label`
    display: block;
    margin-bottom: 5px;
      font-size: 20.2px; /* 48px * 0.65 */
    font-weight: 700;
    color: #001238;
    font-weight: bold;

    input {
        margin-right: 5px;
    }
`;

export const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ThumbnailImg = styled.img`
    width: 100px;
    height: 100px;

`;
export const ImagePreview = styled.div`
  width: 200px;
  height: 100px;
  background: linear-gradient(#22A2F2, #2287F3);
  box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.2); /* 10px * 0.65 */
`;
export const SubMessage = styled.text`
    color: white;
    font-size: 19.5px; /* 30px * 0.65 */
    font-weight: 400;
    margin-right: 6.5px; /* 10px * 0.65 */
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        font-size: 14px;
        margin-right: 8px; /* 10px * 0.65 */
    }
    
`;

export const ReturnArrow = styled.img`
    width: 16.25px; /* 25px * 0.65 */
    height: 16.25px; /* 25px * 0.65 */
    z-index: 1;
    margin: 0 19.5px; /* 30px * 0.65 */
    @media (max-width: 768px) {
        margin: 0 13px; /* 30px * 0.65 */
    }
`;
export const ThumbnailTitle = styled.text`
    font-size: 16.9px; /* 26px * 0.65 */
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: white;
`;

export const ModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.94);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 10%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  z-index: 1;
  gap: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  gap: 10px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin: 20px 20px;
`;

export const SearchBar = styled.input`
  width: 20%;
  padding: 10px;
  margin: 20px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 25px;
`;