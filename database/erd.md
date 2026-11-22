# E-commerce order database

```mermaid
erDiagram
    CUSTOMERS ||--o{ ORDERS : places
    CATEGORIES ||--o{ PRODUCTS : groups
    ORDERS ||--|{ ORDER_ITEMS : contains
    PRODUCTS ||--o{ ORDER_ITEMS : appears_in

    CUSTOMERS {
        int customer_id PK
        varchar first_name
        varchar last_name
        varchar email UK
        varchar phone
        varchar address
    }
    CATEGORIES {
        int category_id PK
        varchar name UK
    }
    PRODUCTS {
        int product_id PK
        int category_id FK
        varchar name
        decimal price
    }
    ORDERS {
        int order_id PK
        int customer_id FK
        varchar order_status
        varchar shipping_method
        decimal shipping_cost
        decimal total_amount
        datetime created_at
    }
    ORDER_ITEMS {
        int order_item_id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal unit_price
    }
```

`unit_price` records the product price when the order was placed, so a later catalog price change does not alter a past order. `total_amount` stores the checkout total, including shipping.
