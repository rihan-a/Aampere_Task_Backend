# **Aampere Vehicle Listing API**

This is a **RESTful API** for managing electric vehicles (EVs). It provides endpoints for creating, reading, updating, and deleting vehicle records, as well as searching and filtering vehicles.

---

## **Tech Stack**

-   **Backend**:
    -   **Node.js**: Runtime environment.
    -   **Express.js**: Web framework for building the API.
    -   **Prisma**: ORM for database management.
    -   **PostgreSQL**: Relational database for storing vehicle data.
    -   **Docker**: Containerization for easy setup and deployment.

---

## **API Endpoints**

## 1. Gel All Vehicles

-   **URL**: `/vehicles`
-   **Method**: `GET`
-   **Description**: Retrieve a list of all vehicles.
-   **Response**:
    ```json
    [
        {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "brand": "Tesla",
            "model": "Cybertruck",
            "year": 2023,
            "price": 80000,
            "range_km": 600,
            "color": "Red",
            "condition": "New",
            "battery_capacity_kWh": 100,
            "charging_speed_kW": 250,
            "seats": 5,
            "drivetrain": "AWD",
            "location": "Berlin",
            "autopilot": true,
            "kilometer_count": "0",
            "accidents": false,
            "accident_description": null,
            "images": ["https://example.com/image1.jpg"]
        }
    ]
    ```

## 2. Search Vehicles

**URL:** `/vehicles/search`  
**Method:** `GET`  
**Description:** Search and filter vehicles by brand, model, price range, etc.

### Query Parameters:

-   `q` (optional): Search query (e.g., "Tesla").
-   `brand` (optional): Filter by brand (e.g., "Tesla").
-   `minPrice` (optional): Minimum price (e.g., 30000).
-   `maxPrice` (optional): Maximum price (e.g., 70000).

### Response:

```json
[
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "brand": "Tesla",
        "model": "Model S",
        "year": 2023,
        "price": 80000,
        "range_km": 600,
        "color": "Red",
        "condition": "New",
        "battery_capacity_kWh": 100,
        "charging_speed_kW": 250,
        "seats": 5,
        "drivetrain": "AWD",
        "location": "California",
        "autopilot": true,
        "kilometer_count": "0",
        "accidents": false,
        "accident_description": null,
        "images": ["https://example.com/image1.jpg"]
    }
]
```

## 3. Create a Vehicle

**URL:** `/vehicles`  
**Method:** `POST`  
**Description:** Create a new vehicle record.

### Request Body:

```json
{
    "brand": "Tesla",
    "model": "Model S",
    "year": 2023,
    "price": 80000,
    "range_km": 600,
    "color": "Red",
    "condition": "New",
    "battery_capacity_kWh": 100,
    "charging_speed_kW": 250,
    "seats": 5,
    "drivetrain": "AWD",
    "location": "California",
    "autopilot": true,
    "kilometer_count": "0",
    "accidents": false,
    "accident_description": null,
    "images": ["https://example.com/image1.jpg"]
}
```

### Response:

```json
{
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "brand": "Tesla",
    "model": "Model S",
    "year": 2023,
    "price": 80000,
    "range_km": 600,
    "color": "Red",
    "condition": "New",
    "battery_capacity_kWh": 100,
    "charging_speed_kW": 250,
    "seats": 5,
    "drivetrain": "AWD",
    "location": "California",
    "autopilot": true,
    "kilometer_count": "0",
    "accidents": false,
    "accident_description": null,
    "images": ["https://example.com/image1.jpg"]
}
```

## 4. Update a Vehicle

**URL:** `/vehicles/:id`  
**Method:** `PUT`  
**Description:** Update an existing vehicle record.

### Request Body:

```json
{
    "price": 75000,
    "color": "Blue"
}
```

### Response:

```json
{
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "brand": "Tesla",
    "model": "Model S",
    "year": 2023,
    "price": 75000,
    "range_km": 600,
    "color": "Blue",
    "condition": "New",
    "battery_capacity_kWh": 100,
    "charging_speed_kW": 250,
    "seats": 5,
    "drivetrain": "AWD",
    "location": "California",
    "autopilot": true,
    "kilometer_count": "0",
    "accidents": false,
    "accident_description": null,
    "images": ["https://example.com/image1.jpg"]
}
```

## 5. Delete a Vehicle

**URL:** `/vehicles/:id`  
**Method:** `DELETE`  
**Description:** Delete a vehicle record.

### Response:

`204 No Content`

---

## How to Use

### Prerequisites

-   **Node.js**: Install from [nodejs.org](https://nodejs.org/)
-   **PostgreSQL**: Install from [postgresql.org](https://www.postgresql.org/)
-   **Docker (optional)**: Install from [docker.com](https://www.docker.com/)

### Setup

#### Clone the Repository:

```bash
git clone https://github.com/your-username/aampere-vehicle-api.git
cd aampere-vehicle-api
```

#### Install Dependencies:

```bash
npm install
```

#### Set Up the Database:

1. Create a PostgreSQL database named `ev_platform`.
2. Update the `.env` file with your database credentials:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/ev_platform"
```

#### Run Migrations:

```bash
npx prisma migrate dev --name init
```

#### Seed the Database:

```bash
node prisma/seed.js
```

#### Start the Server:

```bash
npm start
```

### Using Docker

#### Build and Run the Docker Containers:

```bash
docker-compose up --build
```
