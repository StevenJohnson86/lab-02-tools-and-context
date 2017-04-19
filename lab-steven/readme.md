# 401 Lab 2 - Testing with .call and .apply

### Objective
**Use context management methods .call and .apply in a modules.
Export the functionality, and test each with at least two tests.**

### Methods
* Mariner constructor
* Batter constructor (which inherits from Mariner using .call)
* Pitcher constructor (which inherits from Mariner using .apply)

### Testing
* Tested Mariner constructor to ensure a number input ends up as a string
* Tested Mariner constructor to ensure all instances have a name property that is not null or undefined
* Tested Batter constructor to check a property has proper type
* Tested Batter constructor to ensure it has an inherited property from the Mariner constructor
* Tested Pitcher constructor to check a property has proper type
* Tested Pitcher constructor to ensure it has an inherited property from the Mariner constructor

#### Other Information
In CLI:
- npm run start - starts runs index.js
- npm run lint - lints code
- npm run test - tests code using mocha
