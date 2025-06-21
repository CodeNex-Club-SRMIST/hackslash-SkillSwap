# SkillSwap - Real-Time Skill Barter Platform

**SkillSwap** is a unique, real-time skill barter platform where users can trade their skills with each other. It's a modern digital version of the barter system — no money involved! Users can offer their expertise (e.g., web development, design) and receive other skills in return (e.g., marketing, content creation). 

This project was built as part of a **hackathon** by a 2-person team using the **MERN stack** and real-time communication features.

---

## 🚀 Features

- **Skill Profiles**: Users create profiles showcasing their skills (what they offer and what they want).
- **Smart Matchmaking**: Real-time skill-matching algorithm based on skill tags, availability, and ratings.
- **Live Chat**: Real-time chat for negotiating trades with optional contracts.
- **Location Awareness**: Optional proximity matching for face-to-face skills exchange.
- **Trade Valuation**: AI-based estimation of fair skill trade values.
- **Reputation System**: Gamified user profiles with XP, badges, and "SkillCoins".

---

## 🛠️ Technologies Used

- **Frontend**:
  - React.js + Tailwind CSS (UI)
  - WebSockets (real-time chat)
  - Google Maps API (location matching)
  
- **Backend**:
  - Node.js + Express.js
  - MongoDB for database
  - Socket.IO for real-time communication
  - OpenAI API (optional AI-powered trade value estimation)
  - JWT for user authentication
  
---

## ⚡ Features Breakdown

### 1. **Skill Profiles**
Users can create a profile to list their skills, both for what they offer and what they seek in return.

### 2. **Real-Time Skill Matching**
We use a smart matchmaking system based on user skills, availability, and proximity. The system pairs users who have matching skill sets or who can benefit from each other's expertise.

### 3. **Live Chat and Negotiation**
A chat feature allows users to negotiate their skills exchange in real-time. Users can also create and manage skill barter contracts.

### 4. **Gamified Reputation System**
Earn **SkillCoins** for successful skill trades, gain **badges**, and level up your profile based on feedback and activity.

---

## 📂 Project Structure

- **backend/**: Contains all the backend logic (routes, models, services).
- **frontend/**: React.js frontend for user interaction.
- **.env**: Store environment variables like DB credentials and API keys.
- **README.md**: Project overview and instructions.

---

## 🚀 Getting Started

To set up the project locally:

1. **Clone the repo**:
    ```bash
    git clone https://github.com/CodeNex-Club-SRMIST/hackslash-pixelpilots-sakshambajpai1604-armaanit.git
    cd skill-swap
    ```

2. **Backend Setup**:
    - Navigate to the `backend/` directory:
    ```bash
    cd backend
    ```
    - Install dependencies:
    ```bash
    npm install
    ```
    - Create a `.env` file and add your environment variables:
      ```
      DB_URI=mongodb://localhost/skill-swap
      JWT_SECRET=your_secret_key
      GOOGLE_MAPS_API_KEY=your_api_key
      ```
    - Run the backend server:
    ```bash
    npm start
    ```

3. **Frontend Setup**:
    - Navigate to the `frontend/` directory:
    ```bash
    cd frontend
    ```
    - Install dependencies:
    ```bash
    npm install
    ```
    - Run the frontend app:
    ```bash
    npm start
    ```

---

## 📈 Future Enhancements

- **AI-Powered Skill Matching**: More advanced matchmaking algorithms based on user preferences.
- **Mobile App**: Create a mobile app version of the platform using React Native.
- **Blockchain**: Integrate blockchain for secure and transparent barter transactions.
- **Skill Trading Points**: Allow users to accumulate points for skills provided.

---

## 🤝 Contributing

Feel free to fork this repository and contribute. If you have any questions or ideas, open an issue or submit a pull request.

---

## 📝 License

This project is licensed under the MIT License.