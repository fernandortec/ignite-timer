import * as S from "./button.styles";

interface ButtonProps {
	variant: S.ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
	return (
		<S.Button variant={variant}>
			<p>opa</p>
		</S.Button>
	);
}