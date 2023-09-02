# Project : Build a Book Catallog Backend Assignment

## Live Link: <https://book-listing-application-backend.onrender.com>

## Application Routes

### User

    * api/v1/auth/signup (POST) 
    * api/v1/auth/signin (POST)
    * api/v1/users (GET)
    * api/v1/users/f9b46b31-7d4a-446b-ad1e-da778ee47faa (Single GET) Include an id that is saved in your database 
    * api/v1/users/f9b46b31-7d4a-446b-ad1e-da778ee47faa (PATCH)
    * api/v1/users/f9b46b31-7d4a-446b-ad1e-da778ee47faa (DELETE) Include an id that is saved in your database
    * api/v1/profile (GET) 

### Category

    * api/v1/categories/create-category (POST) 
    * api/v1/categories (GET)
    * api/v1/categories/8e850422-acf0-4276-8591-6da7b3d66302 (Single GET) Include an id that is saved in your database
    * api/v1/categories/8e850422-acf0-4276-8591-6da7b3d66302 (PATCH)
    * api/v1/categories/8e850422-acf0-4276-8591-6da7b3d66302 (DELETE) Include an id that is saved in your database 

### Books

    * api/v1/books/create-book (POST)
    * api/v1/books (GET)
    * api/v1/books/8e850422-acf0-4276-8591-6da7b3d66302/category 
    * api/v1/books/4b0bdedd-da3a-49b7-90a7-c169294fddf4 (GET)
    * api/v1/books/4b0bdedd-da3a-49b7-90a7-c169294fddf4 (PATCH)
    * api/v1/books/4b0bdedd-da3a-49b7-90a7-c169294fddf4 (DELETE)

### Review

    * api/v1/reviews/create-review (POST)
    * api/v1/reviews (GET)
    * api/v1/reviews/27fe78a6-627f-42a7-8c50-b492c8456b83 (GET)
    * api/v1/reviews/27fe78a6-627f-42a7-8c50-b492c8456b83 (PATCH)
    * api/v1/reviews/27fe78a6-627f-42a7-8c50-b492c8456b83 (DELETE)

### Orders

    * api/v1/orders/create-order (POST)
    * api/v1/orders (GET)
    * api/v1/orders/9dc6e639-9f4a-4e6f-a293-dbe14026f4e1 (GET)
