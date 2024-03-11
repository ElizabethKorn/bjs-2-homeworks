//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const maxCacheValuesCount = 5;
        const hash = md5(args);
        const objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) { 
            console.log("Из кеша: " + objectInCache.result); 
            return "Из кеша: " + objectInCache.result;
        }
        let result = func(...args); 
        cache.push({hash, result}) ; 
        if (cache.length > maxCacheValuesCount) { 
          cache.shift(); 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
        func(...args);
        wrapper.count++;
    }
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
        func(...args); 
        wrapper.count++;
    }, delay);
  }
  return wrapper;
}
