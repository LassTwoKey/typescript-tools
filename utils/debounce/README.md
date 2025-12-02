# Debounce
Creates a debounced function that delays invoking `func` until after `wait`. The debounced function comes with a `cancel` method.

### Example

```ts
const debounced = debounce(() => console.log('hi'), 300);

debounced(); // logs after 300ms
```
