# WatchAlong - Watch anything with your loved once.

### WatchAlong is a platform where you can Watch movies, shows, and videos in sync with your loved ones. Create virtual watch rooms and share moments together!

## Table of Contents
 - About the Project
 - Features
 - Installation
 - Project Structure
 - Technologies Used
 - Contributing
 - Licenese 

## About the Project
WatchAlong is the perfect platform to enjoy movies, shows, and videos together with your loved ones, no matter where they are. Create virtual watch rooms to sync your viewing experience, share laughs, and make memories in real time. Stay connected and enjoy entertainment like never before with WatchAlong!

## Installation
#### Prerequisites
Ensure you have the following installed:
 - Node.js 
 - npm or yarn
#### Steps
 1. Clone the repository:
 ```bash
    git clone https://github.com/Rishabh8210/WatchAlong.git
    cd WatchAlong
    
    # WatchAlong WebSocket Service 
    git clone https://github.com/Rishabh8210/WatchAlong-Websocket-Service.git
    cd WatchAlong-Websocket-Service
 ```
 2. Setup Environment Variable Create a `.env.local` file and add `env data`, start variable naming with `NEXT_PUBLIC_`
 ```
    # for example
    NEXT_PUBLIC_WEBSOCKET_URL=localhost:3000
 ```
 3. Install dependencies:
 ```bash
    npm install
 ```
 4. Start the application:
 ```bash
    npm run dev
 ```

### Contributing
Contributions are welcome! Please follow these steps:
 - 1. Fork the repository.
 - 2. Create a branch for your feature (` git checkout -b <feature-name> `).
 - 3. Commit your changes (` git commit -m "<Add feature>" `).
 - 4. Push to the branch (` git push origin <feature-name> `).
 - 5. Open a Pull Request. 
