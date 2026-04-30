# FinSync

FinSync is a modern financial management platform that helps users track, analyze, and optimize their finances in one place. In addition to manual transaction management, FinSync supports intelligent receipt processing: users can upload receipt images or PDFs, extract the content, structure it into JSON using the Gemini API, and store it directly in the database for streamlined expense tracking.

## 🌐 Live Demo

🔗 Website: [https://fin-sync-xi.vercel.app/](https://fin-sync-xi.vercel.app/)

## 🔐 Demo Credentials

- **Email:** `demo@finance.com`
- **Password:** `demo1234`

---

## Features

- Track income, expenses, and savings.
- View financial summaries and analytics.
- Manage transactions in a simple dashboard.
- Upload receipt images or PDFs for automated expense entry.
- Extract receipt content and convert it into structured JSON using the Gemini API.
- Store parsed transaction data directly in the database.
- Secure user authentication and protected financial data handling.
- Responsive design for desktop and mobile devices.

## How It Works

FinSync includes an AI-assisted receipt ingestion workflow. Users upload a receipt as an image or PDF, the system reads the document content, Gemini helps structure the extracted information into a predictable JSON format, and the backend saves the result as transaction data in the database.

### Receipt Processing Pipeline

1. Upload a receipt image or PDF.
2. Extract raw receipt content from the document.
3. Send the extracted content to the Gemini API.
4. Convert the receipt data into structured JSON.
5. Save the parsed fields as a transaction record in the database.[web:37][web:34]

## Gemini API Integration

FinSync uses the Gemini API to turn unstructured receipt text into structured financial data. This makes it easier to automate expense entry, reduce manual typing, and normalize receipt information from different vendors and layouts into a consistent backend format.[web:33][web:37]

Typical fields extracted into JSON may include:
- Merchant or vendor name
- Date of purchase
- Total amount
- Tax amount
- Line items
- Payment method
- Category or transaction notes

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT |
| **Deployment** | Vercel |

## Quick Start

### Installation

```bash
git clone https://github.com/SAIKIRANghb/FinSync.git
cd FinSync
npm install
```

### Setup

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

### Run Locally

```bash
npm run dev
```

## Folder Structure

```bash
FinSync/
├── src/
├── public/
├── components/
├── routes/
├── models/
├── .env
├── package.json
└── README.md
```

## Usage

1. Register or log in to your account.
2. Add income and expense entries manually, or upload a receipt image/PDF.
3. Let the system extract and structure receipt data automatically.
4. View the transaction in your dashboard and analytics.
5. Update or delete transactions as needed.

## Use Cases

- Personal expense tracking
- Automated receipt-based transaction entry
- Financial record digitization
- Budget and spending analysis
- Faster bookkeeping for everyday purchases

## Security Notes

- Keep API keys and secrets in environment variables.
- Do not expose the Gemini API key in frontend code.
- Handle AI requests from the backend for better security and control.[web:33][web:36]