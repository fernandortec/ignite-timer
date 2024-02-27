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

export const Button = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.white};

`;
