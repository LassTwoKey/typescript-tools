const FUNC_ERROR_TEXT = "Expected a function";
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
export function debounce(func, wait) {
    if (typeof func !== "function") {
        throw new Error(FUNC_ERROR_TEXT);
    }
    let timeoutId;
    function debounced(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait || 0);
    }
    debounced.cancel = () => {
        clearTimeout(timeoutId);
        timeoutId = undefined;
    };
    return debounced;
}
