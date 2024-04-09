// console.log("Har Har Mahadev");
const studentsData = JSON.parse(localStorage.getItem("data"));
let studentNonMathwithPys = [];
let studentWithMathAndBio = [];
let studentWithNoBio = [];
handleResult(studentsData)
function handleResult(studentsData){
     studentsData.forEach((studentData) => {
         if(studentData.percentage !== undefined){  
            if(studentData.mark_math === 0 && studentData.mark_pys !== 0 && studentData.mark_bio !== 0){
                  studentNonMathwithPys.push(studentData); 
              }
              else if(studentData.mark_math !== 0 && studentData.mark_pys === 0 && studentData.mark_bio !== 0){
                    studentWithMathAndBio.push(studentData)
              }
              else if(studentData.mark_bio === 0 && studentData.mark_math !== 0 && studentData.mark_pys !== 0){
                    studentWithNoBio.push(studentData);
              }

         }
     });   
}
studentNonMathwithPys = studentNonMathwithPys.map((data) => {
      delete data.mark_math;
      data.sub1 = "English";
      data.sub2 = "Physics";
      data.sub3 = "Chemistry";
      data.sub4 = "Biology";
      data.sub5 = "IT";
      data.sub6 = "Pyschology";
      data.sub7 = "E.V.S";
      data.sub8 = "PHE";
      data.class = "fyjc-sci";
      data.mark1 = data.mark_eng;
      data.mark2 = data.mark_phy;
      data.mark3 = data.mark_chem;
      data.mark4 = data.mark_bio;
      data.mark5 = data.mark_it;
      data.mark6 = data.mark_pys;
      data.mark7 = data.mark_phe;
      data.mark8 = data.mark_evs;
      return data;
});
studentWithMathAndBio = studentWithMathAndBio.map((data) => {
      delete data.mark_pys;
      data.sub1 = "English";
      data.sub2 = "Physics";
      data.sub3 = "Chemistry";
      data.sub4 = "Math";
      data.sub5 = "Biology";
      data.sub6 = "IT";
      data.sub7 = "E.V.S";
      data.sub8 = "PHE";
      data.class = "fyjc-sci";
      data.mark1 = data.mark_eng;
      data.mark2 = data.mark_phy;
      data.mark3 = data.mark_chem;
      data.mark4 = data.mark_math;
      data.mark5 = data.mark_bio;
      data.mark6 = data.mark_it;
      data.mark7 = data.mark_phe;
      data.mark8 = data.mark_evs;
      return data;
});
studentWithNoBio = studentWithNoBio.map((data) => {
      delete data.mark_bio;
      data.sub1 = "English";
      data.sub2 = "Physics";
      data.sub3 = "Chemistry";
      data.sub4 = "Maths";
      data.sub5 = "IT";
      data.sub6 = "Pyschology";
      data.sub7 = "E.V.S";
      data.sub8 = "PHE";
      data.class = "fyjc-sci";
      data.mark1 = data.mark_eng;
      data.mark2 = data.mark_phy;
      data.mark3 = data.mark_chem;
      data.mark4 = data.mark_math;
      data.mark5 = data.mark_it;
      data.mark6 = data.mark_pys;
      data.mark7 = data.mark_phe;
      data.mark8 = data.mark_evs;
      return data;
});
const combinedStudentData = [...studentNonMathwithPys, ...studentWithMathAndBio, ...studentWithNoBio];
combinedStudentData.forEach((studentData) => {
      generateResult(studentData);
})
function generateResult(studentData){
      const div = document.createElement('div');
      div.setAttribute("class", "rc");
      div.innerHTML = `<div id="result">
      <div class="header">
        <img src="/image.png" alt="()" />
      </div>
      <div class="main">
        <div class="title">
          <h1>ACADEMIC YEAR : 2023-24</h1>
          <h3 class="stream">SCIENCE SECTION</h3>
        </div>
        <div class="container">
          <div class="student_info">
            <div class="name_label">
              <p>Student Name:</p>
              <p>Father's Name:</p>
              <p>Mother's Name:</p>
            </div>
            <div class="names_data">
              <p class="student_name">${studentData.student_name}</p>
              <p class="father_name">${studentData.studentFatherName}</p>
              <p class="mother_name">${studentData.fullMotherName}</p>
            </div>
            <div class="extra_data_label">
              <p>Roll No:</p>
              <p>Gr.No:</p>
              <p>class:</p>
            </div>
            <div class="extra_data">
              <p class="roll_no">${studentData.roll_no}</p>
              <p class="gr_no">${studentData.gr_no}</p>
              <p class="class">${studentData.class}</p>
            </div>
          </div>
          <div class="subjects_info">
            <div class="subject_title">
              <div class="s">
                <p>Subjects</p>
              </div>
              <div class="mm">
                <p>Max marks</p>
              </div>
              <div class="pm">
                <p>Passing Marks</p>
              </div>
              <div class="o">
                <p>Obtained</p>
              </div>
            </div>
            <div class="sub_con">
              <div class="subjects">
                <div class="s1">${studentData.sub1}</div>
                <div class="s2">${studentData.sub2}</div>
                <div class="s3">${studentData.sub3}</div>
                <div class="s4">${studentData.sub4}</div>
                <div class="s5">${studentData.sub5}</div>
                <div class="s6">${studentData.sub6}</div>
                <div class="s7">${studentData.sub7}</div>
                <div class="s8">${studentData.sub8}</div>
              </div>
              <div class="maxM">
                <div class="mm1">100</div>
                <div class="mm2">100</div>
                <div class="mm3">100</div>
                <div class="mm4">100</div>
                <div class="mm5">100</div>
                <div class="mm6">100</div>
                <div class="mm7">50</div>
                <div class="mm8">A+</div>
              </div>
              <div class="PassM">
                <div class="pm1">35</div>
                <div class="pm2">35</div>
                <div class="pm3">35</div>
                <div class="pm4">35</div>
                <div class="pm5">35</div>
                <div class="pm6">35</div>
                <div class="pm7">18</div>
                <div class="pm8">c</div>
              </div>
              <div class="ObtM">
                <div class="om1">${studentData.mark1}</div>
                <div class="om2">${studentData.mark2}</div>
                <div class="om3">${studentData.mark3}</div>
                <div class="om4">${studentData.mark4}</div>
                <div class="om5">${studentData.mark5}</div>
                <div class="om6">${studentData.mark6}</div>
                <div class="om7">${studentData.mark7}</div>
                <div class="om8">${studentData.mark8}</div>
              </div>
            </div>
            <div class="totalContainer">
                <p>total</p>
                <p class="MaxTotal">650</p>
                <p class="PassTotal">288</p>
                <p class="obtTotal"></p>
            </div>
            <div class="cal_result_con">
                 <div class="labelresult">
                     <div class="agg">
                         <p>Aggregate</p>
                     </div>
                     <div class="per">
                         <p>Percentage(%)</p>
                     </div>
                     <div class="res">
                         <p>Result</p>
                     </div>
                     <div class="att">
                         <p>Attendance</p>
                     </div>
                     <div class="con">
                         <p>Remark</p>
                     </div>
                 </div>
                 <div class="calresult">
                      <p class="calAgg">${studentData.mark_total}</p>
                      <p class="calPer">${studentData.percentage}%</p>
                      <p class="calRes">Passed and Promoted</p>
                      <p class="calAtt">${studentData.attendancePercentage}%</p>
                      <p class="calCon">Can do better</p>
                 </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
          <div class="signatures">
               <div class="class_teacher">
                  <div></div>
                  class teacher
               </div>
               <div class="college_seal">
                    <div></div>
                    college seal
               </div>
               <div class="principal">
                   <div></div>
                    principal
               </div>
          </div>
         <img src="footer.png" alt="" style="width: 100%;">
      </div>
    </div>`;
    document.querySelector("body").appendChild(div);
}
// function  handleresultGreeting() {
//      studentsData.forEach((data) => {
//           let resultGreetingPercentage = data.percentage;
//           console.log(resultGreetingPercentage);
//      })
// };

// handleresultGreeting();