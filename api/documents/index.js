module.exports = ({
    name, email, phone, linkedin, github, skills,
    exp1_org, exp1_pos, exp1_desc, exp1_dur,
    exp2_org, exp2_pos, exp2_desc, exp2_dur,
    proj1_title, proj1_link, proj1_desc,
    proj2_title, proj2_link, proj2_desc,
    edu1_school, edu1_year, edu1_qualification,
    edu1_desc, edu2_school, edu2_year, edu2_qualification, edu2_desc,
    extra_1, extra_2, extra_3, extra_4, extra_5
}) => {
    return `
      <!doctype html>
      <html>
          <head>
              <style>
                body {
                    font-family: 'Garamond', serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                .container {
                    max-width: 800px;
                    margin: auto;
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                h3 {
                    font-size: 20px;
                    margin-top: 20px;
                }
                .lead {
                    font-size: 16px;
                    margin-bottom: 5px;
                }
                .rule {
                  border-bottom: 1px solid black;
                  width:80%;
                  margin: auto;
                  margin-top: 10px;
                  margin-bottom: 10px;
                }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="row text-center">
                      <h1><b>${name}</b></h1>
                      <p class="lead"><strong>Email:</strong> ${email}</p>
                      <p class="lead"><strong>Contact:</strong> (+91)${phone}</p>
                      <p class="lead"><strong>LinkedIn:</strong> ${linkedin}</p>
                      <p class="lead"><strong>Github:</strong> ${github}</p>
                  </div>

                  <div class="rule"></div>

                  <h3><b>Skills</b></h3>
                  <p class="lead">${skills}</p>

                  <div class="rule"></div>

                  <h3><b>Experience</b></h3>
                  <p class="lead"><b>${exp1_org}, ${exp1_pos}</b> (${exp1_dur})</p>
                  <p>${exp1_desc}</p>
                  <p class="lead"><b>${exp2_org}, ${exp2_pos}</b> (${exp2_dur})</p>
                  <p>${exp2_desc}</p>

                  <div class="rule"></div>

                  <h3><b>Projects</b></h3>
                  <p class="lead"><b>${proj1_title}</b> (${proj1_link})</p>
                  <p>${proj1_desc}</p>
                  <p class="lead"><b>${proj2_title}</b> (${proj2_link})</p>
                  <p>${proj2_desc}</p>

                  <div class="rule"></div>

                  <h3><b>Education</b></h3>
                  <p class="lead"><b>${edu1_school}</b> (${edu1_qualification}, ${edu1_year})</p>
                  <p>${edu1_desc}</p>
                  <p class="lead"><b>${edu2_school}</b> (${edu2_qualification}, ${edu2_year})</p>
                  <p>${edu2_desc}</p>

                  <div class="rule"></div>

                  <h3><b>Extra-Curriculars/Activities</b></h3>
                  <ul>
                      <li><p class="lead"><b>Languages:</b> ${extra_1}</p></li>
                      <li><p class="lead"><b>Hobbies:</b> ${extra_2}</p></li>
                      <li><p class="lead">${extra_3}</p></li>
                      <li><p class="lead">${extra_4}</p></li>
                      <li><p class="lead">${extra_5}</p></li>
                  </ul>

              </div>
          </body>
      </html> 
    `;
}