Original author repository: https://github.com/Gaurav-Jain-0781/Eco-Harbour
Project made for non commercial education in order to learn forking of github projects and making contributions to it

In order to run this project you need to have Nodejs at least v20
1. open main folder in cmd
2. npm install in main directory
3. npm install in client directory
4. npm i react-scripts react-router-dom react-toastify react-icons  [client directory]
5. find file .env located in main directory
6. change to your MONGO_URI from your mongodb made cluster
7. find all appearance of process.env.MONGO_URI and swap to your "MONGO_URL"
8. find the location of the file seeder.js and run in nodejs, node seeder.js
9. find the location of the file Availability.js, change local location of Abundance.xlsx
10. open the second console in the main directory and run npm run dev
11. in the first console write node Availability.js
12. the last thing is to open mongodb and set isAdmin from false to true for your made user account   
13. npm run build in client directory to create build version
14. npm run client and npm run server for builded version (or just npm run dev)