import styled from "styled-components";
import { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  animation-name: ${LoadingAnimation};
  margin: auto auto auto;
`;
