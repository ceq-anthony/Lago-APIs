<div align="center">
  <h1>
    <br/>
    <br/>
    🍋
    <br />
    Lago APIs
    <br />
    <br />
    <br />
    <br />
  </h1>
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
# npm
npm i lago-apis


## 🦄 Usage

Create a new client instance with your API key

```typescript
import { LagoClient } from "lago-apis"

const client = new LagoClient("YOUR_API_KEY","BASE_URL");


const plans = await client.plans.listAllPlans({})

// And many many more...
```

## 📚 Documentation
