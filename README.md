# MyNotes Project

MyNotes is a collaborative note-sharing platform developed by BCA students. This README.md file provides a guide on setting up the project locally.

## Prerequisites
- Node.js installed
- MongoDB installed

## Setup

### 1. API Configuration

#### 1.1 Create .env file in the `api` folder.

# .env (api)

MONGO_URL=your_db_url_or_local_url

Replace your_db_url_or_local_url with your actual MongoDB database URL.



2. Client Configuration
#### 2.1 Create .env file in the `client` folder.

# .env (client)

VITE_API_BASE_URL=http://localhost:portnumber

Replace portnumber with the actual port number where your API server is running.



3. Install Dependencies
Open your terminal and navigate to the client directory:

cd client


Install the project dependencies:

npm install


4. Run the Development Server
Start the development server:

npm run dev

5. Open new terminal and go to api folder

   cd api

6. Run the comant

   nodemon

   !if node mon not working or giving error use below comand

   node index.js



License
This project is licensed under the MIT License.


In this guide, users are instructed to create .env files in the `api` and `client` folders, configure them with the necessary environment variables, install dependencies in the `client` folder, and run the development server. Adjust the instructions as needed based on your project's actual structure and requirements.

