/**
 * get all react components from yaml files and create js files in .cache folder
 *
 */
const yamlJS = require("js-yaml");
const fs = require("fs");
const path = require("path");
const camelCase = require("camelcase");

const rootFolder = "src";
const yamlsFolder = "yamls";

const componentsPath = `${rootFolder}/${yamlsFolder}`;
const cacheFolder = `${rootFolder}/.cache`;
const componentsImportPath = `../../${cacheFolder}`;

/**
 * get all yaml fils' name of a folder
 *
 * @param {[string]} dir [folder path]
 */
const getFiles = dir => {
  let subFolderFiles = [];
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let filePath = dir + "/" + files[i];
    let name = files[i];
    if (fs.statSync(filePath).isDirectory()) {
      subFolderFiles = subFolderFiles.concat(getFiles(filePath));
    } else {
      if (name.indexOf(".yaml") >= 0) {
        subFolderFiles.push(filePath);
      }
    }
  }
  return subFolderFiles;
};

const deleteFolderRecursive = path => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      let curPath = `${path}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};
const cleanCache = () => {
  // delete .cache folder
  if (fs.existsSync(cacheFolder)) {
    console.log("Removing " + cacheFolder);
    deleteFolderRecursive(cacheFolder);
  }
};

/**
 * this function will generate .cache/*.js
 * the .cache/tamplate.js will look like:
 *
 * import A from "../.cache/components/ui-components/A";
 * export const Examples = {
 *  A: {
 *    yaml: A,
 *    components: [
 *      import("../components/ui-components/.cache/A0"),
 *      import("../components/ui-components/.cache/A1")
 *    ]
 *  }
 * };
 */
const generateComponents = () => {
  cleanCache();
  fs.mkdirSync(cacheFolder, 0x777);

  let tamplate = [];
  let importList = [
    `//
// this file was generated automatically by pre-build.js. Don't change this file manully
// If you add new yaml files in ${componentsPath}, run: "npm run prebuild" to update this file
//`
  ];

  getFiles(componentsPath).forEach(yamlPath => {
    // Get yaml, or throw exception on error
    try {
      const yamlDoc = yamlJS.safeLoad(fs.readFileSync(yamlPath, "utf8"));
      const componentName = camelCase(path.basename(yamlPath, ".yaml"));

      //get yaml import path
      const yamlsImportPath = yamlPath.replace(
        new RegExp(`^${rootFolder}/`, "g"),
        "../"
      );

      let yamlExamples = null;
      let yamlScripts = null;
      let yamlCss = null;
      let codeType = "";

      if (yamlDoc && yamlDoc.examples) {
        yamlExamples = [];
        yamlScripts = [];
        yamlCss = [];
        for (let i in yamlDoc.examples) {
          // write component files to cache folder
          // create react js components
          let jsWithSuffix = `${componentName}${i}.js`;
          // create react js components but this will not display its codes
          let scriptWithSuffix = `${componentName}Script${i}.js`;
          // will load html as raw text, so use .htm to avoid webpack default loader
          let htmlWithSuffix = `${componentName}${i}.htm`;
          let cssWithSuffix = `${componentName}${i}.css`;

          let jsPath = `${cacheFolder}/${jsWithSuffix}`;
          let scriptPath = `${cacheFolder}/${scriptWithSuffix}`;
          let htmlPath = `${cacheFolder}/${htmlWithSuffix}`;
          let cssPath = `${cacheFolder}/${cssWithSuffix}`;

          if (yamlDoc.examples[i].react) {
            fs.writeFileSync(jsPath, yamlDoc.examples[i].react);
            codeType = "react";
            // write component infomation to import template
            yamlExamples.push(
              getComponentPath(`${componentsImportPath}/${jsWithSuffix}`)
            );
            console.log(`Create js file: ${jsPath}`);
          } else if (yamlDoc.examples[i].html) {
            // if don't have react examples, try html
            let content = "";
            if (yamlDoc.examples[i].css) {
              content = `<style>\n${yamlDoc.examples[i].css}\n</style>\n`;
            }
            fs.writeFileSync(
              htmlPath,
              `${content}\n${yamlDoc.examples[i].html}`
            );
            codeType = "html";
            // write component infomation to import template
            yamlExamples.push(
              getComponentPath(`${componentsImportPath}/${htmlWithSuffix}`)
            );
            console.log(`Create html file: ${htmlPath}`);
          }

          if (yamlDoc.examples[i].css) {
            fs.writeFileSync(cssPath, yamlDoc.examples[i].css);
            // write css to import template
            yamlCss.push(
              getComponentPath(`${componentsImportPath}/${cssWithSuffix}`)
            );
            console.log(`Create css file: ${cssPath}`);
          }

          if (yamlDoc.examples[i].script) {
            fs.writeFileSync(scriptPath, yamlDoc.examples[i].script);
            // write script infomation to import template
            yamlScripts.push(
              getComponentPath(`${componentsImportPath}/${scriptWithSuffix}`)
            );
            console.log(`Create script file: ${scriptPath}`);
          }
        }
      }
      //write file infor into import template file
      importList.push(`import ${componentName} from "${yamlsImportPath}"`);
      tamplate.push(
        getComponentData(componentName, yamlExamples, yamlScripts, codeType, yamlCss)
      );
    } catch (e) {
      console.log(e);
    }
  });

  importList.push(`export const Examples = {${tamplate}}`);
  fs.writeFileSync(`${cacheFolder}/template.js`, importList.join("\n"));
};

const getComponentPath = data => {
  return data ? `import("${data}")` : null;
};

const getComponentData = (elName, comPath, scripts, codeType, css) => {
  return `${elName}: {
    yaml: ${elName},
    type: "${codeType}",
    components: [${comPath ? comPath.join(",") : ""}],
    scripts:[${scripts ? scripts.join(",") : ""}],
    css:[${css ? css.join(",") : ""}]
  }`;
};

generateComponents();
