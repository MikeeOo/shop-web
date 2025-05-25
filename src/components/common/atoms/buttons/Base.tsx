import { ReactNode } from 'react';
import { Button as ShadcnButton } from '@/styles/ui/button';
import { cn } from '@/lib/helpers/style-utils';
import { type Props } from './types';

const Base = ({
	variant = 'default',
	size = 'default',
	type = 'button',
	icon,
	iconLeft,
	text,
	iconRight,
	disabled,
	loading,
	className,
	...props
}: Props) => {
	const isIconOnly = Boolean(icon && !text && !iconLeft && !iconRight);
	const isDisabled = disabled || loading;

	const renderContent = (): ReactNode => {
		if (loading) {
			return (
				<>
					{/* TODO: Loading icon or props loadingIcon */}
					<span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
					{text}
				</>
			);
		}

		if (isIconOnly) {
			return icon;
		}

		return (
			<>
				{iconLeft}
				{text}
				{iconRight}
			</>
		);
	};

	return (
		<ShadcnButton
			type={type}
			variant={variant}
			size={isIconOnly ? 'icon' : size}
			className={cn(className)}
			disabled={isDisabled}
			{...props}
		>
			{renderContent()}
		</ShadcnButton>
	);
};

Base.displayName = 'BaseButton';

export default Base;
