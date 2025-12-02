/**
 * Creates a debounced function that delays invoking `func` until after `wait`.
 * The debounced function comes with a `cancel` method.
 *
 * @example
 * const debounced = debounce(() => console.log('hi'), 300);
 * debounced(); // logs after 300ms
 *
 * @returns A debounced version of `func` with a `cancel` method.
 */
export declare function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): {
    (this: ThisParameterType<T>, ...args: unknown[]): void;
    cancel(): void;
};
