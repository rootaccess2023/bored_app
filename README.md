
# Firstmate Bored App

A frontend application that interacts with the Bored API through a Rails backend. This app allows users to download 15 random activities in different formats: JSON, CSV, or log them to the console. 



## Features

- Fetch random activities through an API call to the backend.
- Display activities in JSON format or download them as CSV.
- Log activities to the console.


## Tech Stack

- React with Typescript for the frontend.
- Tailwind CSS for styling.
- Zustand for state management.
- PapaParse for parsing CSV data.
- Bored API (external API for fetching activities).


## Setup

#### 1. Clone the repository

```http
  https://github.com/rootaccess2023/bored_app
  cd bored_app
```

#### 2. Install dependencies

```http
  npm install
```

#### 3. Set up environment:

Make sure the Rails backend API is running. You can refer to the backend README for details on how to set up the backend.

The frontend will communicate with the backend running on http://localhost:3000.

#### 4. Run the frontend application:

```http
  npm run dev
```
## Acknowledgements

 - [Markdown Guide](https://www.markdownguide.org/basic-syntax/#overview)
