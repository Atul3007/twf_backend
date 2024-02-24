
# English to French Converter - Node.js Backend
This simple Node.js backend application is designed to convert English text to French using a translation service. It provides a straightforward API endpoint for language translation.

## Getting Started
### Prerequisites
* Node.js installed on your machine
* npm (Node Package Manager) installed
## API Endpoint
### Endpoint: /
Method: GET
Response:
{
"Welcome to English to French translator app!!!"
}
### Endpoint: /translate
Method: POST
Request Body:
{
"text": "Hello, how are you?"
}
### Response
{
 "translation": "Bonjour, comment ça va ?"
}
