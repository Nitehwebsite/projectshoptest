# NitehTestShop

A React shopping-cart and checkout exercise built with Vite.

## Run locally

```sh
npm install
npm run dev
```

The catalog contains the four products and prices from the exercise. Add items to the cart, update quantities or remove items, choose a shipping method at checkout, and place an order to see its confirmation.

To run the Laravel API locally:

```sh
cd backend
php artisan migrate:fresh --seed
php artisan serve --host=127.0.0.1 --port=8000
```

Set `VITE_API_URL=http://127.0.0.1:8000/api` in a root `.env` file to save checkout orders through the API.

## Database design

- [Entity-relationship diagram](./database/erd.md)
- [SQL schema](./database/schema.sql)
