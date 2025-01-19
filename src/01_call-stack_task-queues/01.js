
    console.log("Hi 1")
    const res = await Promise.resolve("Hiii")
    console.log(res)

setTimeout( function settimeout ()  {
    console.log("Hi 2")
}, 0);

Promise.resolve("Hi 3").then(function promise_hi_3(resolve)  { console.log(resolve)})
Promise.resolve("Hi 4").then(function promise_hi_4(resolve) { console.log(resolve) })


console.log("Hi 5")

}
