// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {

  if (data.license === 0) {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  };


  if (data.license === 1) {
    return "![License:APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  };


  if (data.license === 2) {
    return "![License: GPL 2.0](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  };


  if (data.license === 3) {
    return "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  };


  if (data.license === 4) {
    return "";
  };
};





// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  if (data.license === 0) {
    return "https://opensource.org/licenses/MIT";
  };


  if (data.license === 1) {
    return "https://opensource.org/licenses/Apache-2.0";
  };


  if (data.license === 2) {
    return "https://www.gnu.org/licenses/gpl-3.0";
  };


  if (data.license === 3) {
    return "https://opensource.org/licenses/BSD-3-Clause";
  };


  if (data.license === 4) {
    return "";
  };
};




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 0) {
    return `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `;
  };

  if (data.license === 1) {
    return `
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
       
      http://www.apache.org/licenses/LICENSE-2.0
       
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.az
    See the License for the specific language governing permissions and
    imitations under the License.`;

  };


  if (data.license === 2) {
    return `
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

  };


  if (data.license === 3) {
    return `
        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        
        `;
  };

};

function technologiesUsed(data) {
  let htmlBadge = "";
  let cssBadge = "";
  let jsBadge = "";
  let nodeBadge = "";
  let bootstrapBadge = "";
  let vsBadge = "";
  let jqueryBadge = "";
  let bulmaBadge = "";
  const technologiesUsed  = data.technology
  for (let i = 0; i < technologiesUsed.length; i++) {
    if(technologiesUsed[i] === 'HTML') {
      htmlBadge = `![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`;
    } 
    else if(technologiesUsed[i] === 'CSS') {
      cssBadge = `![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)`;
    } 
    else if(technologiesUsed[i] === 'JavaScript') {
      jsBadge = `![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)`;
    }
    else if(technologiesUsed[i] === 'NodeJs') {
      nodeBadge = `![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`;
    }
    else if(technologiesUsed[i] === 'Bootstrap') {
      bootstrapBadge = `![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)`;
    }
    else if(technologiesUsed[i] === 'VS Code') {
      vsBadge = `![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)`;
    }
    else if(technologiesUsed[i] === 'jQuery') {
      jqueryBadge = `![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)`;
    }
    else if(technologiesUsed[i] === 'Bulma') {
      bulmaBadge = `![Bulma](https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white)`;
    }
  };
  let allTechnologies = htmlBadge + cssBadge + jsBadge + nodeBadge + bootstrapBadge + vsBadge + jqueryBadge + bulmaBadge
  return allTechnologies;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
  
  ## Description
  ${data.description}

  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#Contribution)
  * [Tests](#tests)
  * [Contact](#contact)
  
  ## Made With
  ${technologiesUsed(data)}
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  To view this application,the following image shows the landing page of the application, or click on https://${data.username}.github.io/${data.title}
  ![${data.title}](${data.screenshot})

  ## License
  ${renderLicenseBadge(data)}

  Link to license: ${renderLicenseLink(data)} 

  Copyright (C) ${new Date().getFullYear()} ${data.name}
  ${renderLicenseSection(data)}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.test}

  ## Questions
  ${data.questions}
  

  ## Contact
  * For any question about this project, please email me at: ${data.email}
  * To see more of my projects, follow me on Github at: http://github.com/${data.username}
  
  [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})
  [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.username}) 

  `
};

module.exports = generateMarkdown;
