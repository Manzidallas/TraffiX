# Setup Instructions for TraffiX

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Make sure you have [npm](https://www.npmjs.com/) which comes with Node.js.
- It is also advised to have a stable internet connection.

## Installation Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Manzidallas/TraffiX.git
   cd TraffiX
   ```

2. **Install dependencies**:  
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the root directory and add the following variables:
   ```plaintext
   PORT=3000
   DATABASE_URL=your_database_url_here
   ```
   Replace `your_database_url_here` with your actual database URL.

4. **Run the application**:
   After the setup is complete, you can start the application by running:
   ```bash
   npm start
   ```

5. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000` to view the application.

## Troubleshooting
- If you encounter issues during installation, make sure all prerequisites are met and that you have the correct versions of Node.js and npm.
- Check the terminal for error messages to determine what went wrong.