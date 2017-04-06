# Javascript

## Add external dependencies to be used in the project

E.g. add d3 to the project
```
npm install d3 --save
```

## Create modules

Apply modules in the html with the following syntax:
```data-module="<module-name>"```

Create file in ```src/js/modules``` with name <module-name>.js 

Add the following code:
```
export default class <module-name-in-camel-case> {
  constructor(element) {
  }
}


```

### Example

Syntax: ```data-module="graph"```
File name: ```graph.js```

Code in graph.js:
```
export default class Graph {
  constructor(element) {
  }
}

### Dependencies example 1

Import all functions from d3:
```
import * as d3 from 'd3';

export default class DistortionGraph {
  constructor(element) {
    this.svg = d3.select(element)
  }
}
```

###  Dependencies example 2

Import only the "select" function from d3:
```
import {select} from 'd3';

export default class DistortionGraph {
  constructor(element) {
    this.svg = select(element);
  }
}
```
