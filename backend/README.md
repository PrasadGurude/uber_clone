# /users/register Endpoint Documentation

## Description
Registers a new user by accepting the required data and creating a user entry in the database.

## Request
**Method:** POST  
**URL:** /users/register

### Headers
- Content-Type: application/json

### Body
```json
{
  "fullname": {
    "firstname": "string (min: 3 characters)",
    "lastname": "string (optional, min: 3 characters if provided)"
  },
  "email": "string (must be a valid email)",
  "password": "string (min: 6 characters)"
}
```

## Responses
- **201 Created:** User registered successfully, returns user details and authentication token.
- **400 Bad Request:** Missing or invalid fields.
- **500 Internal Server Error:** An error occurred on the server.
