# ClassNames Clone
> Created for fun, using the latest technologies that make it tiny and pretty fast
### Not Another Clone 🥱

- Blazing Fast⚡
- Teensy Small (204B) 🤏
- Really Easy To Use 👶
- Completely Type Safe 👷‍♀️

### Installation
To install classnames-clone, use:

```bash
npm i classnames-clone
```
### Well What Does It Do?
Ever wanted to conditionally render your classnames? Well before your code used to look like this:
```js
<div
  className={
    `text-2xl italic ${isActive ? "bg-gray-400" : ""}`
  }
>
  Hmm not the best
</div>
```

Now it looks like this:
```js
<div
  className={
    classNames('text-2xl italic', {"bg-gray-400" : isActive})
  }
>
  Yummy! 🥞
</div>
```

### Usage:
```js
import { classNames } from "classnames-clone";

// Joins strings
classNames("bg-white", "text-red-300") // ==> returns "bg-white text-red-300"

// Joins object keys with truthy values
classNames("bg-white", {"text-red-300": true}) // ==> returns "bg-white text-red-300"

// Even flattens out arrays
classNames("bg-white", ["text-red-300"]) // ==> returns "bg-white text-red-300"

// Ignores falsy values
classNames("bg-white", {"text-red-300": false}) // ==> returns "bg-white"
```

#### Opinions: 
The official package for classnames allows numbers in it's type definition, however that doesn't make sense when it comes to writing classes so for this package's purpose that has been left out.

Perfect for conditional state class formatting like isActive etc.

This package was created using [TSDX](https://tsdx.io/) 
