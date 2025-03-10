/**
 * Helper script for handling npm installation warnings and deprecations
 * This script is run automatically during the install process to fix common issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Running Context Generator installation helper...');

// Create .npmrc file in client directory if it doesn't exist
const clientDir = path.join(__dirname, '..', 'client');
const clientNpmrcPath = path.join(clientDir, '.npmrc');

if (!fs.existsSync(clientNpmrcPath)) {
  console.log('Creating .npmrc in client directory to reduce npm warnings...');
  
  const npmrcContent = `
# Suppress deprecated package warnings
legacy-peer-deps=true
fund=false
audit=false
  `.trim();
  
  fs.writeFileSync(clientNpmrcPath, npmrcContent);
}

// Create .npmrc file in root directory if it doesn't exist
const rootNpmrcPath = path.join(__dirname, '..', '.npmrc');

if (!fs.existsSync(rootNpmrcPath)) {
  console.log('Creating .npmrc in root directory to reduce npm warnings...');
  
  const npmrcContent = `
# Suppress deprecated package warnings
legacy-peer-deps=true
fund=false
audit=false
  `.trim();
  
  fs.writeFileSync(rootNpmrcPath, npmrcContent);
}

// Ensure Babel config is properly set for React client
const clientBabelConfigPath = path.join(clientDir, '.babelrc');

if (!fs.existsSync(clientBabelConfigPath)) {
  console.log('Creating .babelrc in client directory...');
  
  const babelConfig = {
    "presets": [
      "react-app"
    ],
    "plugins": [
      "@babel/plugin-transform-private-methods",
      "@babel/plugin-transform-class-properties",
      "@babel/plugin-transform-private-property-in-object",
      "@babel/plugin-transform-numeric-separator",
      "@babel/plugin-transform-nullish-coalescing-operator",
      "@babel/plugin-transform-optional-chaining"
    ]
  };
  
  fs.writeFileSync(clientBabelConfigPath, JSON.stringify(babelConfig, null, 2));
}

// Install xss-clean directly
try {
  console.log('Installing xss-clean dependency...');
  execSync('npm install xss-clean@0.1.4 --save-exact', { stdio: 'inherit' });
} catch (error) {
  console.log('Warning: Unable to install xss-clean dependency.');
  console.log('You may need to install it manually with: npm install xss-clean@0.1.4 --save-exact');
}

// Install Firebase dependencies
try {
  console.log('Installing Firebase dependencies...');
  execSync('npm install firebase-admin@^11.11.0 --save', { stdio: 'inherit' });
  execSync('cd client && npm install firebase@^10.8.0 --save', { stdio: 'inherit' });
} catch (error) {
  console.log('Warning: Unable to install Firebase dependencies.');
  console.log('You may need to install them manually with:');
  console.log('  npm install firebase-admin@^11.11.0 --save');
  console.log('  cd client && npm install firebase@^10.8.0 --save');
}

// Update package-lock.json to resolve vulnerabilities where possible
try {
  console.log('Running npm audit fix in client directory...');
  execSync('cd client && npm audit fix --no-fund', { stdio: 'inherit' });
} catch (error) {
  console.log('Warning: Unable to automatically fix all vulnerabilities in client dependencies.');
  console.log('  Consider running "npm audit fix --force" if you need to resolve them all.');
}

console.log('✅ Installation helper completed successfully!');