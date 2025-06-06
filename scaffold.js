const fs = require('fs');
const path = require('path');

const dirs = [
	'src',
	'src/assets',
	'src/components',
	'src/components/UI',
	'src/data',
	'src/hooks',
	'src/utils',
	'src/styles',
];

const files = {
	'index.html':
		'<!DOCTYPE html>\n<html>\n<head><title>React CPQ Calculator</title></head>\n<body><div id="root"></div></body>\n</html>',
	'src/index.js':
		"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
	'src/App.jsx':
		'export default function App() {\n  return <div>React CPQ Calculator</div>;\n}',
	'src/components/ProductSelector.jsx': '',
	'src/components/ConfigurationPanel.jsx': '',
	'src/components/PricingSummary.jsx': '',
	'src/components/QuoteActions.jsx': '',
	'src/data/products.json': '[]',
	'src/hooks/usePricingCalculator.js': '',
	'src/utils/priceUtils.js': '',
	'src/styles/main.css': '',
	'.gitignore': 'node_modules/\ndist/',
	'package.json': `{
  "name": "react-cpq-calculator",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}`,
	'vite.config.js':
		"import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n});",
	'README.md':
		'# React CPQ Calculator\n\nA lightweight CPQ calculator built in React.\n',
};

dirs.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));

for (const [filePath, content] of Object.entries(files)) {
	fs.writeFileSync(filePath, content);
}

console.log('✅ React CPQ Calculator structure created!');
