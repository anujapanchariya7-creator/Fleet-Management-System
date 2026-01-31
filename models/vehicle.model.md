# Vehicle Model

 Table Name
vehicles

 Columns

| Column Name | Data Type | Constraints |
|------------|----------|-------------|
| id | uuid | Primary Key |
| name | text | Not Null |
| registration_number | text | Unique, Not Null |
| allowed_passengers | integer | Not Null |
| isAvailable | boolean | Default: true |
| driver_id | uuid | Foreign Key → users(id), Nullable |
| rate_per_km | numeric | Not Null |
| owner_id | uuid | Foreign Key → users(id) |
| created_at | timestamp | Default: now() |
