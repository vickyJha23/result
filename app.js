console.log("Har Har Mahadev");
const form = document.querySelector(".form-action");
const input = document.querySelector("#excelFile");
console.log(input);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = input.files[0];
    handleFile(file); 
});
function handleFile(file) {
    const reader = new FileReader();
    reader.onload = function(e){
         const data = e.target.result;
         const workbook = XLSX.read(data, {type: 'binary'});
         const sheetNames = workbook.SheetNames[0];
         const worksheet = workbook.Sheets[sheetNames];
         const jsonData = XLSX.utils.sheet_to_json(worksheet);
         handleStudentData(jsonData);         
}
    reader.readAsBinaryString(file);
}
function handleStudentData(jsonData){
    console.log(jsonData);
      const extractedData = jsonData.slice(4);
      const studentDataArr = [];
      for(let i = 0; i < extractedData.length - 1; i++){
             let student = extractedData[i];
             let roll_no = student['__EMPTY_1'];
             let student_name = student['__EMPTY_2'];
             let mother_name = student['__EMPTY_3'];
             let gr_no = student['__EMPTY_4'];
            let mark_eng = student['__EMPTY_10'];
            let mark_phy = student['__EMPTY_16'];
            let mark_chem = student['__EMPTY_22'];
            let mark_math = student['__EMPTY_28'];
            let mark_bio = student['__EMPTY_34'];
            let mark_it = student['__EMPTY_40'];
            let mark_pys = student['__EMPTY_46'];
             let mark_evs = student['__EMPTY_47'];
             let mark_phe = student['__EMPTY_48'];
             let mark_total = student['__EMPTY_49'];
             let percentage = student['__EMPTY_50'];
             let attendancePercentage = student['__EMPTY_51'];
              let studentFatherName = fatherNameGenerator(student_name);
              let fullMotherName = generateMotherName(mother_name, studentFatherName);
              studentDataArr.push({roll_no, student_name,fullMotherName, gr_no, mark_eng, mark_phy, mark_chem, mark_math, mark_bio, mark_it, mark_pys, mark_evs, mark_phe, mark_total, percentage, attendancePercentage, studentFatherName});
      }         
      console.log(studentDataArr);
      sendData(studentDataArr);      
    }
    function fatherNameGenerator(studentName) {
         const parts = studentName.split(" ");
             if(parts.length > 2){
            if(parts[0] === "" && parts[3] === "" && parts[4] === "" && parts[6] === ""){
                return `${parts[1]} ${parts[5]}`
            }
            else if(parts[0] === ""){
                return `${parts[1]} ${parts[3]}`
            }
              return `${parts[0]} ${parts[2]}`;
         }
    }
    function generateMotherName(motherName, father_name){
        let mother_nam;
        if(motherName !== undefined){
             mother_nam = motherName.split(" ");
        }
       let  father_nam = father_name.split(" ");
       if(mother_nam !== undefined) {return `${father_nam[0]} ${mother_nam[0].toUpperCase()} ${father_nam[1]}`};
    }
    function sendData(studentDataArr){
        const jsonString = JSON.stringify(studentDataArr);
        localStorage.setItem("data", jsonString);
        
    }

