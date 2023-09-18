# Project : Build a Book Catallog Backend Assignment

## Live Link: <https://book-listing-application-backend.onrender.com>

## Application Routes

### User

    * api/v1/auth/signup (POST) 
    * api/v1/auth/signin (POST)
    * api/v1/users (GET)
    * api/v1/users/77d506c7-0568-4169-b205-aa2acedb61f0 (Single GET) Include an id that is saved in your database 
    * api/v1/users/77d506c7-0568-4169-b205-aa2acedb61f0 (PATCH)
    * api/v1/users/77d506c7-0568-4169-b205-aa2acedb61f0 (DELETE) Include an id that is saved in your database
    * api/v1/profile (GET) 

### Category

    * api/v1/categories/create-category (POST) 
    * api/v1/categories (GET)
    * api/v1/categories/20b0c0ed-f49a-4510-984a-f2b4ea91fc6f (Single GET) Include an id that is saved in your database
    * api/v1/categories/20b0c0ed-f49a-4510-984a-f2b4ea91fc6f (PATCH)
    * api/v1/categories/20b0c0ed-f49a-4510-984a-f2b4ea91fc6f (DELETE) Include an id that is saved in your database 

### Books

    * api/v1/books/create-book (POST)
    * api/v1/books (GET)
    * api/v1/books/62960adb-f13a-4742-8308-fead5bdbc4a5/category 
    * api/v1/books/c9ac52ee-8eee-4ec4-8c0d-f3440c647929 (GET)
    * api/v1/books/c9ac52ee-8eee-4ec4-8c0d-f3440c647929 (PATCH)
    * api/v1/books/c9ac52ee-8eee-4ec4-8c0d-f3440c647929 (DELETE)

### Review

    * api/v1/reviews/create-review (POST)
    * api/v1/reviews (GET)
    * api/v1/reviews/5949a36c-a8c6-4821-bfe7-f5717d074311 (GET)
    * api/v1/reviews/5949a36c-a8c6-4821-bfe7-f5717d074311 (PATCH)
    * api/v1/reviews/5949a36c-a8c6-4821-bfe7-f5717d074311 (DELETE)

### Orders

    * api/v1/orders/create-order (POST)
    * api/v1/orders (GET)
    * api/v1/orders/f59a97ce-f71b-4f9d-943a-1c518e857255 (GET)
