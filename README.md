introduction: 
---------------------------------------------------------------------------------------------------------------------------------------
this is the full stack version of the project
---------------------------------------------------------------------------------------------------------------------------------------
 Designed and implemented dynamic, responsive visualizations using MUI, Recharts, Vite, and React, creating stylized lucid charts and tables to display key financial performance indicators for the company
 
• Built and maintained the backend server using Node.js and Express.js, effectively managing API requests. The entire project was primarily developed using TypeScript, ensuring robust and scalable architecture.

• Implemented a linear regression model using regression.js to forecast next year’s revenue based on existing data

• Managed over 4,000 lines of data with Mongoose via Atlas, committed changes over 60 times, and deployed the application using Vercel for frontend and Docker with Fly.io for the backend


-------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
