import React from 'react';
import Base from './Base';
import { type Props } from './types';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link';

interface ButtonVariants {
	Primary: React.ComponentType<Props>;
	Secondary: React.ComponentType<Props>;
	Outline: React.ComponentType<Props>;
	Destructive: React.ComponentType<Props>;
	Ghost: React.ComponentType<Props>;
	Link: React.ComponentType<Props>;
}

export const createButtonVariants = (buttonType: ButtonType): ButtonVariants => {
	const variants: ButtonVariant[] = ['default', 'secondary', 'outline', 'destructive', 'ghost', 'link'];

	const buttonComponents = variants.reduce((acc, variant) => {
		const ComponentName = variant === 'default' ? 'Primary' : variant.charAt(0).toUpperCase() + variant.slice(1);

		const Component = (props: Props) => {
			return React.createElement(Base, { type: buttonType, variant, ...props });
		};

		Component.displayName = `${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}.${ComponentName}`;

		acc[ComponentName as keyof ButtonVariants] = Component;
		return acc;
	}, {} as ButtonVariants);

	return buttonComponents;
};
