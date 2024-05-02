// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenceObject = {
  'Apache-2.0': {
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  'GNU-v3': {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'Mozilla-2.0': {
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: 'https://opensource.org/licenses/MPL-2.0',
  },
  'BSD': {
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  'MIT': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
  },
  'Unlicenced': {
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    link: 'http://unlicense.org/',
  },
}

function renderLicenseBadge(license) {
  return licenceObject[license].badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenceObject[license].link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    const badge = renderLicenseBadge(license)
    const link = renderLicenseLink(license)
    return `${badge}<br>
    This project is licenced under the [${license}](${link}) license.`
  }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  [${data.credits}](${data.credits})

  ## Instructions For Testing
  ${data.testInstructions}

  ## Licence
  ${renderLicenseSection(data.licence)}
`;
}
