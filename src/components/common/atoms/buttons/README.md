# Button Components

A comprehensive set of button components built with atomic design principles, offering consistent styling and behavior across different button types.

## Features

- **Type Safety**: Full TypeScript support with comprehensive prop types
- **Accessibility**: Built on shadcn/ui and Radix UI for excellent accessibility by default
- **Loading States**: Integrated loading spinner and disabled states
- **Icon Support**: Flexible icon positioning (left, right, or icon-only)
- **Variants**: Multiple visual styles (primary, secondary, outline, destructive, ghost, link)
- **Consistent API**: Same props across all button types (button, submit, reset)

## Usage

### Basic Button

```tsx
import { Button } from '@/components/common/atoms/Buttons';

// Primary button with text
<Button.Primary text="Click me" />

// Secondary button with left icon
<Button.Secondary
  text="Save"
  iconLeft={<SaveIcon />}
/>

// Icon-only button
<Button.Outline
  icon={<SearchIcon />}
/>
```

### Form Buttons

```tsx
import { Submit, Reset } from '@/components/common/atoms/Buttons';

// Submit button with loading state
<Submit.Primary
  text="Submit Form"
  loading={isSubmitting}
/>

// Reset button
<Reset.Secondary text="Reset" />
```

### Available Variants

- **Primary**: Main call-to-action buttons
- **Secondary**: Secondary actions
- **Outline**: Outlined style buttons
- **Destructive**: For dangerous actions (delete, remove, etc.)
- **Ghost**: Minimal style buttons
- **Link**: Link-styled buttons

### Props

| Prop        | Type        | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| `text`      | `string`    | Button text content                         |
| `iconLeft`  | `ReactNode` | Icon displayed to the left of text          |
| `iconRight` | `ReactNode` | Icon displayed to the right of text         |
| `icon`      | `ReactNode` | Icon for icon-only buttons                  |
| `loading`   | `boolean`   | Shows loading spinner and disables button   |
| `disabled`  | `boolean`   | Disables the button                         |
| `variant`   | `string`    | Button variant (auto-set by component type) |
| `size`      | `string`    | Button size (`sm`, `default`, `lg`, `icon`) |
| `className` | `string`    | Additional CSS classes                      |
| `onClick`   | `function`  | Click handler                               |

All standard HTML button props are also supported (including `aria-label` if needed).

## Architecture

The components use a factory pattern to reduce code duplication:

- **Base.tsx**: Core button component with all functionality
- **factory.ts**: Factory function that generates button variants
- **Button.tsx**: Standard button components
- **Submit.tsx**: Form submit button components
- **Reset.tsx**: Form reset button components
- **types.ts**: TypeScript type definitions

## Accessibility

Built on shadcn/ui and Radix UI foundations providing:

- Automatic accessibility attributes
- Proper focus management
- Loading state announcements
- Keyboard navigation support

## Examples

### Complete Form Example

```tsx
<form>
	<Button.Primary text="Edit" iconLeft={<EditIcon />} />

	<Submit.Primary text="Save Changes" loading={isLoading} disabled={!isValid} />

	<Reset.Secondary text="Reset Form" />

	<Button.Destructive text="Delete" iconLeft={<DeleteIcon />} onClick={handleDelete} />
</form>
```
