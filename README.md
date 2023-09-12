### Live Link: https://build-a-book-catallog-backend.onrender.com/

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/bea2cf9f-2f4d-41d6-adc1-6cbc9850c673 (Single GET) Include an id that is saved in your database
- api/v1/users/bea2cf9f-2f4d-41d6-adc1-6cbc9850c673 (PATCH)
- api/v1/users/bea2cf9f-2f4d-41d6-adc1-6cbc9850c673 (DELETE) Include an id that is saved in your database
- api/v1/users/profile (GET) Profile

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/918c66fd-cdd8-4a72-8f6c-17ae10d65590 (Single GET) Include an id that is saved in your database
- api/v1/categories/918c66fd-cdd8-4a72-8f6c-17ae10d65590 (PATCH)
- api/v1/categories/918c66fd-cdd8-4a72-8f6c-17ae10d65590 (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/000c3285-06db-4101-9aa4-7b4c2fd4e36c/category (GET)
- api/v1/books/d09856a2-0e27-42e8-a7e0-548d0b2f0283 (GET)
- api/v1/books/d09856a2-0e27-42e8-a7e0-548d0b2f0283 (PATCH)
- api/v1/books/d09856a2-0e27-42e8-a7e0-548d0b2f0283 (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:449b28b6-f9eb-430b-b248-aaf627714a71 (GET Order For Admin)
- api/v1/orders/449b28b6-f9eb-430b-b248-aaf627714a71/customer (GET Order For customer)
