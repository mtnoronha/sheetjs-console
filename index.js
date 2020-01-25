const XLSX = require('xlsx')


console.log(">>>>>>>>>>>>>>>>>> 1")
let workbook = XLSX.readFile("student_template.xlsx")
console.log(">>>>>>>>>>>>>>>>>> 2")
let first_sheet_name = workbook.SheetNames[0]
console.log(">>>>>>>>>>>>>>>>>> 3")
let worksheet = workbook.Sheets[first_sheet_name]
console.log(">>>>>>>>>>>>>>>>>> 4")
let rows = XLSX.utils.sheet_to_json(worksheet)  
console.log(">>>>>>>>>>>>>>>>>> 5")

console.log(rows)
console.log(">>>>>>>>>>>>>>>>>> 6")
