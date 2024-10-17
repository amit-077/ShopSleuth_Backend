# ShopSleuth

ShopSleuth is a web application designed to simplify your online shopping experience. The platform enables users to effortlessly track and receive 
notifications for price drops on products listed on Flipkart. By inputting the Flipkart product link into ShopSleuth, users can stay 
informed about any changes in the product's price through automated email notifications.

## How it Works

1. **Input Flipkart Product Link:**
   - Users provide the Flipkart product link through the website.

2. **Scheduled Price Checks:**
   - ShopSleuth utilizes Puppeteer for web scraping and scheduled tasks to regularly check for price variations on the specified product.

3. **Email Notifications:**
   - When a price drop is detected, the user is automatically notified via email.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Web Scraping:** Puppeteer
- **Task Scheduling:** node-cron

## Libraries Used

- **Puppeteer:** Used for web scraping Flipkart product pages.
- **Node-cron:** Implemented for scheduling periodic price checks.

Simplify your shopping strategy with ShopSleuth's straightforward and effective price tracking capabilities.
