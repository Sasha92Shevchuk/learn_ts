//add watch command  tsc app.ts -w

const some = "str2";

// для компілювання всіх файлівпотрібно створити проект  command tsc --init має з'явитисяфайл tsconfig.json
// потім команда лише tsc і буде стежити за всіма файлами
// налаштуванняпроекту "rootDir": "./src"
// "outDir": "./",  директорія де хочемо бачити файли js
// налаштування lib []

const app = document.getElementById("app");
console.log(app);
