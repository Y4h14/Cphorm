# Cphorm Dynamic Offline Form

A dynamic, offline-first data entry form for Sudanese health data collection.  
Users can select which fields to include, add custom fields, and submit data even when offline. Data is stored in the browser (IndexedDB) and automatically synced to a backend API when the device is online.

---

## Features

- **Dynamic Form:** Select which fields to include in the form.
- **Custom Fields:** Add your own fields (text, number, date, select/dropdown).
- **Offline Support:** Submissions are saved locally using IndexedDB.
- **Auto Sync:**  AWhen online, all unsynced submissions are sent to the backendPI.
- **User Feedback:** Notifications for successful local save and sync.

---

## Usage

1. **Select Fields:**  
   Check the boxes for the fields you want to include in the form.

2. **Add Custom Fields:**  
   Use the "Add Custom Field" section to create new fields.  
   - For dropdowns, enter options separated by commas.

3. **Fill and Submit:**  
   Fill out the form and click **Submit**.  
   - If offline, data is saved locally.
   - When online, data is sent to the API automatically.

---

## Local Storage & Sync

- **IndexedDB** is used to store submissions in the browser under the `cphorm_db` database, `form_submissions` store.
- When the browser detects an internet connection, it attempts to POST all unsynced records to the API endpoint.
- On successful upload (`HTTP 200`), records are removed from local storage.

---

## API Integration

- **Endpoint:**  
  @karam must update the `API_URL` in `form.js` to the backend endpoint (e.g., `https://your-api-url.com/submit`).

- **Payload:**  
  Each POST request contains a JSON object with all form fields and a `timestamp`.

- **Expected Response:**  
  Return `200 OK` on success.  
  Handle duplicate or repeated submissions gracefully.

---

## For Backend/API Developers

- Accept POST requests at the specified endpoint.
- Each request will contain all form fields as JSON, plus a `timestamp`.
- Ensure idempotency or deduplication as retries may occur.
- You may add authentication or validation as needed.

---

## Development Notes

- **Add new fields:**  
  Edit the `FIELD_DEFS` object in `js/form.js` to add or modify default fields.
- **Custom fields:**  
  Users can add fields at runtime via the UI.
- **Testing:**  
  (Optional) Add Jest or similar for unit testing JS logic.
- **CI:**  
  (Optional) Use GitHub Actions for automated testing on push/PR.

---

## Example FIELD_DEFS

```js
const FIELD_DEFS = {
  full_name: { label: "Full Name", placeholder: "Enter full name" },
  age: { label: "Age", placeholder: "Enter age", type: "number" },
  diagnosis: {
    label: "Diagnosis",
    type: "select",
    options: ['Cholera', 'Malaria(CL)', 'Malaria(VL)', 'Dengue Fever', 'Measles', 'Leishmaniasis']
  },
  city: {
    label: "City",
    type: "select",
    options: [
      "Khartoum", "Port Sudan", "Kassala", "Nyala", "El Obeid",
      "Dongola", "Kadugli", "Wad Madani", "Geneina", "Sennar"
    ]
  },
  // ...more fields...
};
```