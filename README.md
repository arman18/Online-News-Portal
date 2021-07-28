# Online-News-Portal
This project is made by angular as frontend and .NET for backend API
# how to run 
#running API
1. run microsft SQL server management studio
2. copy connection string and connect with your database
4. goto API_dotnet 
5. run dotnet restore from command prompt
6. open "API_dotnet/Models/DatabaseContext.cs" and change connection string
7. run 'Add-Migration --init' followed by 'Update-Database --verbose'
8. run application by 'dotnet run' or by visual studio IDE
9. make a post request from post-man to create a admin route: 'http://0.0.0.0:5002/api/User/Add' body(json): {
    "email":"your mail",
    "fullName":"fullname",
    "userName":"username",
    "password":"pass",
    "nationality":"nationality",
    "dateOfBirth":"birth date",
    "isAdmin":true
}
#running Angular_frontent
1. run 'npm install'
2. run 'ng serve --open'
