import styled from "styled-components";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "danger"
	| "success"
	| "neutral";

interface ButtonContainerProps {
	variant: ButtonVariant;
}

const buttonsVariants = {
	primary: "purple",
	secondary: "orange",
	danger: "red",
	success: "green",
	neutral: "blue",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => `background-color: ${buttonsVariants[props.variant]}`}
`;
