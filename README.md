# ChainScan 🔗
> Web3 Contract Scanner + Gas Tracker — powered by Claude AI

## Deploy to Vercel in 5 minutes

### Step 1 — Get your Anthropic API key
1. Go to https://console.anthropic.com
2. Click **API Keys** → **Create Key**
3. Copy the key (starts with `sk-ant-...`)

---

### Step 2 — Upload to GitHub
1. Go to https://github.com and create a new repository (call it `chainscan`)
2. Upload all these files keeping the same folder structure:
   ```
   chainscan/
   ├── api/
   │   └── chat.js
   ├── public/
   │   └── index.html
   ├── package.json
   └── vercel.json
   ```

---

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com and sign up (free)
2. Click **Add New Project**
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects everything

---

### Step 4 — Add your API key (IMPORTANT)
1. In Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** `sk-ant-your-key-here`
3. Click **Save**
4. Go to **Deployments** → click **Redeploy**

---

### Step 5 — You're live! 🚀
Your app will be at: `https://chainscan.vercel.app` (or whatever name you chose)

---

## Custom domain (optional)
1. Buy a domain on Namecheap or GoDaddy (e.g. `chainscan.xyz` ~$10/yr)
2. In Vercel → **Settings** → **Domains** → add your domain
3. Follow the DNS instructions Vercel gives you

---

## Project structure
```
api/chat.js       ← Backend: holds API key, proxies Claude requests
public/index.html ← Frontend: the full ChainScan UI
vercel.json       ← Tells Vercel how to route requests
package.json      ← Node.js config
```
