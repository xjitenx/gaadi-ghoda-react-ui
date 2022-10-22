export interface RootState {
  example: ExampleState;
}

export interface ExampleState {
  id: number;
}

export type ButtonVariants = 'primary' | 'secondary';

export interface IOptions {
  label: string;
  value: string;
  disabled?: boolean;
}
