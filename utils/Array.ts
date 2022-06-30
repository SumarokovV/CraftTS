export function isArray<T>(value: T) {  
  return Object.prototype.toString.call(value) === "[object Array]";
}