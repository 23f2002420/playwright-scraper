name: Scrape Table Sums with Playwright

on:
  push:
    branches: [main]
  workflow_dispatch:  # Allows you to run it manually from GitHub UI

jobs:
  scrape:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Playwright and dependencies
        run: |
          npm init -y
          npm install playwright
          npx playwright install chromium
          npx playwright install-deps chromium

      # ⚠️ IMPORTANT: Your email MUST appear in the step name below
      - name: Run Playwright scraper - 23f2002420@ds.study.iitm.ac.in
        run: node scraper.js
