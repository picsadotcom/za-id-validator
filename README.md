Validates a South African National Identification Number against it's check digit at the end of the number.

Usage:
```
import validate from 'za-id-validator';
const id = '8001015009087';
if(validate(id)){
  console.log(id, ' is a valid ZA ID number');
} else {
  console.log(id, ' is an invalid ZA ID number');
}
```
