# Project Setup and Testing Instructions

## Running the Application

Follow these steps to get the application up and running:

### Prerequisites
- Ensure that [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) are installed on your machine.

### Steps to Run
1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the project.
3. Run the following command to start all services defined in the `docker-compose.yml` file:
     ```bash
     docker-compose up
     ```
   This command builds the Docker images if they don't exist and starts the containers.
  
4. Once the containers are running, open a web browser and visit http://localhost:3000/ to view the application.

### Testing the Application
To test the application, you can use tools like Postman or curl to send HTTP requests to the available endpoints. Here are the endpoints you can test:

## 1. GET /
 Returns all records from the table. You can test this using:
   ```bash
   curl http://localhost:3000/
   ```
## 2. GET /item/1 
  Returns the record with ID 1 from the table. Test this endpoint with:
   ```bash
   curl http://localhost:3000/item/1
   ```
## 3. GET /average 
  Calculates and returns the average value of the value field from the table. Use this command to test it:
   ```bash
   curl http://localhost:3000/average
   ```
