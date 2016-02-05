Validates a South African National Identification Number against it's check digit at the end of the number.

Usage:
```
var validate = require('za-id-validator');
var id = '8001015009087';
if(validate(id)){
  console.log(id, ' is a valid ZA ID number');
} else {
  console.log(id, ' is an invalid ZA ID number');
}
```
