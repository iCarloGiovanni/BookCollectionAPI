# Node.js + Express API for Managing Books

This Express API allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. It provides endpoints for managing books such as retrieving all books, retrieving a single book by its ID, adding a new book, updating an existing book, and deleting a book.

## Getting Started

To get started with this API, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/iCarloGiovanni/BookCollectionAPI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-book-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000` by default. You can change the port by setting the `PORT` environment variable.

## Endpoints

### Retrieve All Books

- **URL:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieves a list of all books.

### Retrieve a Single Book

- **URL:** `/api/books/:id`
- **Method:** `GET`
- **Description:** Retrieves a single book by its ID.

### Add a New Book

- **URL:** `/api/books`
- **Method:** `POST`
- **Description:** Adds a new book to the collection.

### Update a Book

- **URL:** `/api/books/:id`
- **Method:** `PUT`
- **Description:** Updates an existing book by its ID.

### Delete a Book

- **URL:** `/api/books/:id`
- **Method:** `DELETE`
- **Description:** Deletes a book from the collection by its ID.

## Request and Response Examples

### Retrieve All Books

**Request:**
```
GET /api/books
```

**Response:**
```json
[
  { "id": 1, "title": "Book 1" },
  { "id": 2, "title": "Book 2" },
  { "id": 3, "title": "Book 3" }
]
```

### Retrieve a Single Book

**Request:**
```
GET /api/books/1
```

**Response:**
```json
{ "id": 1, "title": "Book 1" }
```

### Add a New Book

**Request:**
```
POST /api/books
Body: { "title": "New Book" }
```

**Response:**
```json
{ "id": 4, "title": "New Book" }
```

### Update a Book

**Request:**
```
PUT /api/books/1
Body: { "title": "Updated Book" }
```

**Response:**
```json
{ "id": 1, "title": "Updated Book" }
```

### Delete a Book

**Request:**
```
DELETE /api/books/1
```

**Response:**
```json
{ "id": 1, "title": "Updated Book" }
```

## Validation

The API validates the input data according to the following rules:

- The book title must be a string with a minimum length of 3 characters.
- If the validation fails, the API returns a 400 Bad Request error with details about the validation error.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [Joi](https://www.npmjs.com/package/joi): Object schema validation library.
