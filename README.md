# Secret Messages API Documentation

## Overview

This API is designed for instructors to integrate secret message tasks into their assignments. There are 40 unique tasks, each associated with a distinct word. Students must send a POST request to the API with the specific task identifier to receive the corresponding secret message.

## API Endpoint

POST `https://secret-messages-7i4e.onrender.com/api/task`

This endpoint accepts a JSON payload with a task identifier and returns a secret message associated with that task.

## Request Format

The request should be a POST request with a JSON body containing the task identifier. The format of the JSON body is as follows:

```
{
  "task": "task-1" // Replace 'task-1' with the appropriate task identifier
}
```

## Task Identifiers

The tasks are identified by strings in the format `task-x` where `x` is the task number. There are 40 tasks in total, ranging from `task-1` to `task-40`.

## Example Request

Here's an example of how to make a request to the API using `fetch` in JavaScript:

```javascript
fetch('https://secret-messages-7i4e.onrender.com/api/task', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ task: 'task-22' }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

## Response

The API response will be a JSON object containing the secret message. For example, if you send `task-22`, the response will be:

```
{
  "message": "Spectrum"
}
```

## Error Handling

If an invalid task identifier is sent, the API will respond with a 400 status code and an error message.

## Contributing

For instructors who wish to contribute to the list of tasks or suggest improvements, please contact me on Slack, or put in an issue.

This document provides all the necessary details for instructors to integrate and use the Secret Messages API effectively in their courses.
