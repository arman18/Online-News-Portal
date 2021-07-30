# Online-News-Portal
This project is developed by angular as frontend and .NET for backend API. It is developed for our webtech course final project



https://user-images.githubusercontent.com/43715453/127595830-7ce3bde8-52f2-4e67-b91b-6da7adfdc92c.mp4



# how to run 
#running API
1. run microsft SQL server management studio
2. copy connection string and connect with your database
4. goto API_dotnet 
5. run dotnet restore from command prompt
6. open "API_dotnet/Models/DatabaseContext.cs" and change connection string
7. run 'Add-Migration --init' followed by 'Update-Database --verbose'
8. run application by 'dotnet run' or by visual studio IDE
9. make a post request from post-man to create a admin route: 'http://0.0.0.0:5002/api/User/Add' 
10. body(json): {
11.   "email":"your mail",
12.    "fullName":"fullname",
13.    "userName":"username",
14.    "password":"pass",
15.    "nationality":"nationality",
16.    "dateOfBirth":"birth date",
17.    "isAdmin":true
18. }
# running Angular_frontent
1. run 'npm install'
2. run 'ng serve --open'

# project description 

1. There are three kinds of user
	* guest user: can read news, search news, see comment, register for a account, login
	* registered user: in addition to guest user he can commment and manage his account
	* admin: in addition to registered user admin can modify,delete,create and manage account
