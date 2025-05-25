import { ReactNode, ComponentProps } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/styles/ui/button';

export type Props = Omit<ComponentProps<'button'>, 'children'> &
	VariantProps<typeof buttonVariants> & {
		icon?: ReactNode;
		iconLeft?: ReactNode;
		text?: string;
		iconRight?: ReactNode;
		loading?: boolean;
	};
