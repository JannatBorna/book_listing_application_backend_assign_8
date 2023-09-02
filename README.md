# Project : Build a Book Catallog Backend Assignment

## Live Link: <https://example.com>

## Application Routes

### User

    * api/v1/auth/signup (POST) 
    * api/v1/auth/signin (POST)
    * api/v1/users (GET)
    * api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database 
    * api/v1/users/f9b46b31-7d4a-446b-ad1e-da778ee47faa (PATCH)
    * api/v1/users/71e974ea-dc3a-4bc6-864a-f42c818194b3 (DELETE) Include an id that is saved in your database
    * api/v1/profile (GET) 

### Category

    * api/v1/categories/create-category (POST) 
    * api/v1/categories (GET)
    * api/v1/categories/766c7cc6-c93f-4043-99c7-12cdbbebf34b (Single GET) Include an id that is saved in your database
    * api/v1/categories/766c7cc6-c93f-4043-99c7-12cdbbebf34b (PATCH)
    * api/v1/categories/766c7cc6-c93f-4043-99c7-12cdbbebf34b (DELETE) Include an id that is saved in your database 

### Books

    * api/v1/books/create-book (POST)
    * api/v1/books (GET)
    * api/v1/books/8e850422-acf0-4276-8591-6da7b3d66302/category 
    * api/v1/books/5eade5ea-e33e-4639-93e0-551009fdb697 (GET)
    * api/v1/books/5eade5ea-e33e-4639-93e0-551009fdb697 (PATCH)
    * api/v1/books/5eade5ea-e33e-4639-93e0-551009fdb697 (DELETE)

### Review

    * api/v1/reviews/create-review (POST)
    * api/v1/reviews (GET)
    * api/v1/reviews/2070a2d8-c2fd-41a4-a68c-a410ce3d0b72 (GET)
    * api/v1/reviews/2070a2d8-c2fd-41a4-a68c-a410ce3d0b72 (PATCH)
    * api/v1/reviews/2070a2d8-c2fd-41a4-a68c-a410ce3d0b72 (DELETE)

### Orders

    * api/v1/orders/create-order (POST)
    * api/v1/orders (GET)
    * api/v1/orders/:orderId (GET)
