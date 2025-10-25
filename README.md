# 🛸 UFO Sightings API

## 📎About
Welcome to the **Humanmade UFO Sightings Database** — an Express.js and MongoDB-powered API for tracking extraterrestrial encounters. This backend service allows users to manage sightings, witnesses, and media evidence. Built with peace in mind (mostly) ☮.

---

## 🚀 Technologies Used

- Node.js + Express.js for server and routing
- MongoDB Atlas for cloud database
- Mongoose for schema modeling and queries
- dotenv for environment variable management

---

## 📡 API Endpoints

### 🧠 Root

- `GET /`  
  Returns a welcome message from your alien-friendly backend.

---

### 👽 Sightings

| Method | Route              | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/sightings`       | Get all sightings               |
| GET    | `/sightings/:id`   | Get a specific sighting by ID   |

---

### 🧍 Witnesses

| Method | Route               | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | `/witnesses`        | Get all witnesses                    |
| GET    | `/witnesses/:id`    | Get a specific witness by ID         |
| POST   | `/witnesses`        | Create a new witness                 |
| DELETE | `/witness/:id`      | Delete a witness by ID               |

---

### 📷 Media

| Method | Route               | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | `/media`            | Get all media entries                |
| GET    | `/media/:id`        | Get a specific media entry by ID     |
| POST   | `/media`            | Create a new media entry             |
| PUT    | `/media/:id`        | Update a media entry by ID           |
| DELETE | `/media/:id`        | Delete a media entry by ID           |

---

### 📷 Media +🧍 Witnesses

| Method | Route                     | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/witnesses/:id/media`    | Get a specific withness media        |


---

## 🧪 Notes

- All routes expect and return JSON.
- MongoDB `_id` values are used for resource identification.
- Error responses include helpful messages like `{ Oops: "error message" }`.

---

## 📂 File Structure

```
├── models/
│   ├── Sighting.js
│   ├── Witness.js
│   └── Media.js
├── index.js
├── .env
└── README.md
```

---

## 🧠 Indexing Strategy

- Indexed frequently queried fields like `format`, `witness`, `name`, `gender`, and `credibilityScore`.
- Skipped indexing on write-heavy fields like `url` and `age` for performance reasons.
- Comments included in schema files to explain indexing decisions.

---

## 🪶Copyright

Pull requests are welcome. No Rights Reserved.

---

## 🤩Acknowledgement

A special thank you to Kaggle.

