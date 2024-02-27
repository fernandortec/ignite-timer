import * as S from "./button.styles";

interface ButtonProps {
	variant: S.ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
	return (
		<S.ButtonContainer variant={variant}>
			<p>opa</p>
		</S.ButtonContainer>
	);
}
