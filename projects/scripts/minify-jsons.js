const fs = require('fs');
const { execSync } = require('child_process');

function minifyAndReplace(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const minifiedContent = JSON.stringify(JSON.parse(content));
    fs.writeFileSync(filePath, minifiedContent, 'utf8');
    console.log(`Minified and replaced ${filePath}`);
  } catch (error) {
    console.error(`Error minifying ${filePath}: ${error.message}`);
  }
}

function processFilesInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      processFilesInFolder(filePath); // Recursively process files in subdirectories
    } else if (path.extname(file).toLowerCase() === '.json') {
      minifyAndReplace(filePath); // Minify and replace JSON files
    }
  });
}

// Specify the path to your assets folder
const assetsFolderPath = '../netflix-portfolio/src/assets/jsons';

// Start processing files in the assets folder and its subdirectories
processFilesInFolder(assetsFolderPath);
