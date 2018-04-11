/**
 * get all react components from yaml files and create js files in .cache folder
 *
 */
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const camelCase = require("camelcase");

const componentFolder = "src/components/ui-components";
const cacheFolder = "src/.cache";
const importPath = `../components/ui-components`;
const componentsPath = `../../${cacheFolder}`;

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
				subFolderFiles.push(name);
			}
		}
	}
	return subFolderFiles;
};

const deleteFolderRecursive = path => {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach((file, index) => {
			let curPath = path + "/" + file;
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
 */
const generateComponents = () => {
	cleanCache();
	fs.mkdirSync(cacheFolder, 0x777);

	let tamplate = [];
	let importList = [
`//
// this file was generated automatically by pre-build.js. Don't change this file manully
// If you add new yaml files in ${componentFolder}, run: "npm run prebuild" to update this file 
//`
	];

	getFiles(componentFolder).forEach(element => {
		// Get yaml, or throw exception on error
		try {
			const doc = yaml.safeLoad(
				fs.readFileSync(`${componentFolder}/${element}`, "utf8")
			);

			if (doc && doc.examples) {
				let componentExamples = [];

				for (let i in doc.examples) {
					// write component files to cache folder
					let suffix = `${i}.js`;
					let eleName = element.replace(/\.yaml/, suffix);
					let filepath = `${cacheFolder}/${eleName}`;
					fs.writeFileSync(filepath, doc.examples[i].react);
					console.log(`Create file: ${filepath}`);

					// write component infomation to import template
					const data = getComponentPath(`${componentsPath}/${eleName}`);
					if (data) {
						componentExamples.push(data);
					}
				}

				//write file infor into import template file
				let elName = camelCase(element.replace(/\.yaml/, ""));
				importList.push(`import ${elName} from "${importPath}/${element}"`);
				tamplate.push(getComponentData(elName, componentExamples));
			}
		} catch (e) {
			console.log(e);
		}
	});
	// this function will generate .cache/tamplate.js. It looks like:
	//
	// import A from "../.cache/components/ui-components/A";
	// export const Examples = {
	// 	A: {
	// 		yaml: A,
	// 		components: [
	// 			import("../components/ui-components/.cache/A0"),
	// 			import("../components/ui-components/.cache/A1")
	// 		]
	// 	}
	// };

	importList.push(`export const Examples = {${tamplate}}`);
	fs.writeFileSync(`${cacheFolder}/template.js`, importList.join("\n"));
};

const getComponentPath = data => {
	return data ? `import("${data}")` : null;
};

const getComponentData = (elName, componentsPath) => {
	return `${elName}: {
		yaml: ${elName},
		components: [
			${componentsPath.join(",")}
		]
	}`;
};

generateComponents();
