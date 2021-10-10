// Create the employee cards based on user's inputs
const generateCards = employeeArray => {
    //Returns manager card, followed by cards for each engineer and then each intern
    return `
        <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
        <div class="flex-row justify-space-between">

        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./managerImage" alt="Card image cap">${elements.getRole()}
            <div class="card-body">
                <h5 class="card-title">${employeeArray[0].getName()}</h5>
                <p class="card-text">
                Name: ${employeeArray[0].getName()} <br/>
                ID: ${employeeArray[0].getID()} <br/>
                Email: <a href="mailto:${employeeArray[0].getEmail()}" class="">${employeeArray[0].getEmail()}</a> <br/>
                Office Number: ${employeeArray[0].getOfficeNum()} 
                </p>
                
            </div>
        </div>

        ${employeeArray
            .filter(elements => elements.github !== undefined )
            .map(elements => {
                return `
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="./engineerImage" alt="Card image cap">${elements.getRole()}
                    <div class="card-body">
                        <h5 class="card-title">${elements.getName()}</h5><br/>
                        <p class="card-text">
                        ID: ${elements.getID()} <br/>
                        Email: <a href="mailto:${elements.getEmail()}" class="">${elements.getEmail()}</a> <br/>
                        Github: <a href="https://github.com/${elements.getGithub()}" target="_blank" class="">${elements.getGithub()}</a> <br/>
                        </p>
                        
                    </div>
                </div>
                ` 
            }).join("")
        }

        ${employeeArray
        .filter(elements => elements.school !== undefined)
        .map(elements => {
            return `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./internImage" alt="Card image cap">${elements.getRole()}
                <div class="card-body">
                    <h5 class="card-title">${elements.getName()} </h5><br/>
                    <p class="card-text">
                    ID: ${elements.getID()} <br/>
                    Email: <a href="mailto:${elements.getEmail()}" class="">${elements.getEmail()}</a> <br/>
                    School: ${elements.getSchool()} 
                    </p>
                    
                </div>
            </div>
            `
            }).join("")
        }

        </div>
        </section>
    `;
};

// export function to generate entire page
module.exports = employeeArray => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary">Project Manager</h1>
        </div>
        </header>
        <main class="container my-5">
            ${generateCards(employeeArray)}
        </main>

        <footer>
        </footer>

    </body>
    </html>
    `;
};