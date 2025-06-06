## React Configure-Price-Quote Calculator

This project is a lightweight CPQ (Configure, Price, Quote) calculator built in React. It simulates the core functionality of Salesforce CPQ by allowing users to:

- Select products from a catalog
- Configure product options dynamically
- Apply quantity and customizations
- View a real-time pricing breakdown
- Generate a summarized quote

### Key Features
- ⚛️ Built with React functional components and Hooks
- 💡 Dynamic option rendering and pricing logic
- 🧾 Real-time quote preview
- 📄 Optional PDF quote generation
- 📦 Modular, component-driven architecture

### Purpose
This app is designed to demonstrate front-end development skills in a real-world business context—perfect for those transitioning from Salesforce development (e.g. LWC) to React.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en) (version 16 or higher)
- npm (comes with Node.js)

### Quick Start
1. **Clone the repository**
   ```
   git clone https://github.com/ellisn19/react-cpq-calculator.git
   cd react-cpq-calculator
   ```

2. **Install dependencies and start development server**
   ```
   npm run all
   ```
   This command will install all dependencies and automatically start the development server.

   **Or run commands separately:**
   ```
   npm install
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run all` - Install dependencies and start development server
- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run clean` - Remove node_modules and package-lock.json (useful for troubleshooting)

### Development
The application will automatically reload when you make changes to the source files. Start editing in the `src/` directory to customize the CPQ calculator for your needs.
  npm run all

## License
This project is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) - see the [LICENSE](LICENSE) file for details.

This means you can use, modify, and share this project for non-commercial purposes, as long as you provide attribution and share any derivatives under the same license.
