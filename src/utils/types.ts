import React from "react";
import { Control, UseFormReturn } from "react-hook-form";

export type MiniSize = "sm" | "md" | "lg";
export type FullMiniSize = MiniSize | "xl";
export type Size = "xs" | FullMiniSize;
export type FullSize = Size | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
export type ExtraFullSize = FullSize | "7xl" | "8xl" | "9xl" | "10xl";

/**
 * Used to type custom registered controlled fields
 */
export interface RegisteredControlledFieldProps {
  name: string;
  defaultValue: unknown;
  control: Control<any>;
}

/**
 * Used to type custom registered uncontrolled fields
 */
// TODO Probably refactor all registered components to use more strict types
export interface RegisteredUnControlledFieldProps {
  name: string;
  formMethods: UseFormReturn<any>;
}

/**
 * Type utility to make one or more fields optional
 */
export type SelectivePartial<T, K extends keyof T> = Pick<Partial<T>, K> &
  Omit<T, K>;

/**
 * Type utility to make one or more fields required
 */
export type SelectiveRequired<T, K extends keyof T> = Pick<Required<T>, K> &
  Omit<T, K>;

/**
 * Type utility to change the type of the specified field F of an interface T to the given type N (Plus making it required)
 */
export type RetypeField<T, F extends keyof NonNullable<T>, N> = Omit<
  NonNullable<T>,
  F
> &
  {
    [key in NonNullable<F>]-?: N;
  };

/**
 * Same as RetypeField except It makes the field optional
 */
export type RetypeOptionalField<T, F extends keyof NonNullable<T>, N> = Omit<
  NonNullable<T>,
  F
> &
  {
    [key in NonNullable<F>]?: N;
  };

/**
 * Type utility that adds N as union to the specified field F of an interface T (Plus making it required)
 */
export type AugmentField<T, F extends keyof NonNullable<T>, N> = RetypeField<
  T,
  F,
  N | NonNullable<T>[F]
>;

/**
 * Same as AugmentField except It makes the field optional
 */
export type AugmentOptionalField<T, F extends keyof NonNullable<T>, N> =
  RetypeOptionalField<T, F, N | NonNullable<T>[F]>;

export type ClickListener<T extends HTMLElement> = React.MouseEventHandler<T>;

export type ButtonClickLister = ClickListener<HTMLButtonElement>;

/**
 * Quickly type setState functions
 */
export type StateDispatcher<T> = React.Dispatch<React.SetStateAction<T>>;

export type PropsWithState<T, K> = K & {
  value: T;
  onChange: StateDispatcher<T>;
};

export type PropsWithRequiredChildren<T> = T & { children: React.ReactNode };

// TODO Refactor existing types to use this utility
export type PropsWithClassName<T> = T & { className?: string };

/**
 * See https://stackoverflow.com/a/52761156/9006761
 */
export type OverloadedReturnType<T> = T extends {
  (...args: any[]): infer R;
  (...args: any[]): infer R;
  (...args: any[]): infer R;
  (...args: any[]): infer R;
}
  ? R
  : T extends {
      (...args: any[]): infer R;
      (...args: any[]): infer R;
      (...args: any[]): infer R;
    }
  ? R
  : T extends { (...args: any[]): infer R; (...args: any[]): infer R }
  ? R
  : T extends (...args: any[]) => infer R
  ? R
  : any;
