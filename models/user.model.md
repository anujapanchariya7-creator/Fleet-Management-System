 User Model

 Table Name
users

 Columns

| Column Name | Data Type | Constraints |
|------------|----------|-------------|
| id | uuid | Primary Key, auto-generated |
| name | text | Not Null |
| email | text | Unique, Not Null |
| password | text | Not Null |
| role | text | customer / owner / driver |
| created_at | timestamp | Default: now() |

 Constraints
- Email must be unique
- Role must be one of: customer, owner, driver

 Relationships
- One user (owner) can have many vehicles
- One user (customer) can have many trips
- One user (driver) can be assigned to one vehicle
