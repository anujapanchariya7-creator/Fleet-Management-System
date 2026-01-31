Trip Model


 Table Name
trips


 Columns

| Column Name | Data Type | Constraints |
|------------|----------|-------------|
| id | uuid | Primary Key |
| customer_id | uuid | Foreign Key → users(id) |
| vehicle_id | uuid | Foreign Key → vehicles(id) |
| start_date | date | Not Null |
| end_date | date | Nullable |
| location | text | Not Null |
| distance_km | numeric | Not Null |
| passengers | integer | Not Null |
| tripCost | numeric | Calculated |
| isCompleted | boolean | Default: false |
| created_at | timestamp | Default: now() |


 Constraints
- Passengers must not exceed vehicle allowed_passengers
- Trip can be completed only once


 Relationships
- One customer can create many trips
- One vehicle can be used in many trips
