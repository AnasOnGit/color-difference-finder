# Find difference between two colors

This package can be used to find the difference between two colors.

# Installation

### npm installation

```terminal
npm install color-difference-finder
```

### yarn installation

```terminal
yarn add color-difference-finder
```

## Usage

```javascript
import { getDifference } from "color-difference-finder";

// Only supports hex colors
console.log(getDifference("#ff0000", "#00ff00")); // retuns 67
console.log(getDifference("#ffffff", "#ffffff")); // retuns 0
console.log(getDifference("#ffffff", "#000000")); // retuns 100
```
