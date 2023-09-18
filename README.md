# Project : Build a Book Catallog Backend Assignment

## Live Link: <https://book-listing-application-backend.onrender.com>

## Application Routes

### User

    * api/v1/auth/signup (POST) 
    * api/v1/auth/signin (POST)
    * api/v1/users (GET)
    * api/v1/users/629c745c-d062-47d6-b8d3-117c2fcf8614 (Single GET) Include an id that is saved in your database 
    * api/v1/users/b4e0e466-5487-4a5f-96c5-10e6806fc315 (PATCH)
    * api/v1/users/b4e0e466-5487-4a5f-96c5-10e6806fc315 (DELETE) Include an id that is saved in your database
    * api/v1/profile (GET) 

### Category

    * api/v1/categories/create-category (POST) 
    * api/v1/categories (GET)
    * api/v1/categories/c05cd9df-cbca-4e30-86d3-4fd843847504 (Single GET) Include an id that is saved in your database
    * api/v1/categories/850ba366-4cd9-4fc7-bd5f-cea4d5855c0f (PATCH)
    * api/v1/categories/850ba366-4cd9-4fc7-bd5f-cea4d5855c0f (DELETE) Include an id that is saved in your database 

### Books

    * api/v1/books/create-book (POST)
    * api/v1/books (GET)
    * api/v1/books/da500acb-a65a-45e6-b50c-bf62ddd03638/category 
    * api/v1/books/927ae3d3-b41c-4833-b444-e807cad15e4e (GET)
    * api/v1/books/927ae3d3-b41c-4833-b444-e807cad15e4e (PATCH)
    * api/v1/books/927ae3d3-b41c-4833-b444-e807cad15e4e (DELETE)

### Review

    * api/v1/reviews/create-review (POST)
    * api/v1/reviews (GET)
    * api/v1/reviews/421a7678-9a39-4731-b530-863fb3b5f1cf (GET)
    * api/v1/reviews/421a7678-9a39-4731-b530-863fb3b5f1cf (PATCH)
    * api/v1/reviews/421a7678-9a39-4731-b530-863fb3b5f1cf (DELETE)

### Orders

    * api/v1/orders/create-order (POST)
    * api/v1/orders (GET)
    * api/v1/orders/ea2e9a76-a8e6-4cda-a165-9fd2b3bc51e1 (GET)
