# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 -------------------------------------------------mongodb-------------------------------------------------------------

 - database used to store and manage data permanently


 sql                                                                  mongodb
 ------------                                                         ------------
-Relational/SQL DBMS                                                  
-Store data in table with rows and column
-Uses fixed schema
-Optimized for complex joins & transactions
-Support rich set of data types
-Declarative query language
-ACID property 
(Atomicity, Consistency, Isolation, Durability)
-Uses traditional business application



db.user.find()      -
db.users.findOne({  emaile: 'sahal@gmail.com'}) -
db.users.insertOne({uname:"bini",age:27})                        - for add one document
db.users.insertMany({uname:"bini",age:27},{uname:"jappu",age:27})  - for add many document
db.users.countDocuments()



1. View All Documents

To fetch all documents in the users collection:
db.users.find().pretty();


2. Find a Specific User
To find a user by a specific field, such as username or _id:

db.users.findOne({ username: 'sahal' });
db.users.findOne({ _id: ObjectId('675fb8201b162e4ec048e068') });

3.  Insert New Users
To add a single new document:

db.users.insertOne({
  username: 'john',
  emaile: 'john@gmail.com',
  password: 'john123',
  github: '',
  linkedin: '',
  profile: ''
});

            To add multiple new users:

db.users.insertMany([
  {
    username: 'ali',
    emaile: 'ali@gmail.com',
    password: 'ali123',
    github: '',
    linkedin: '',
    profile: ''
  },
  {
    username: 'mary',
    emaile: 'mary@gmail.com',
    password: 'mary123',
    github: '',
    linkedin: '',
    profile: ''
  }
]);


4. Update Documents
Update a single user's field:

db.users.updateOne(
  { username: 'sahal' },
  { $set: { github: 'https://github.com/sahal' } }
);

Update multiple documents (e.g., add the same field to all users):

db.users.updateMany(
  {},
  { $set: { status: 'active' } }
);
                  
                  eg:= to change age 22 to 19 
                  db.users.updateMany(
  {age:22},
  { $set: { age: 19 } }
)


5. Delete Users
To delete a single user:

db.users.deleteOne({ username: 'sahal' });


To delete multiple users (e.g., all with an empty profile):

db.users.deleteMany({ profile: '' });

6. Count Users
To count the total number of users in the collection:

db.users.countDocuments();

7. Sort Users
Sort users by username in ascending (1) or descending (-1) order:

db.users.find().sort({ username: 1 });


8. Add Fields to All Documents
For example, add a role field to all users:

db.users.updateMany(
  {},
  { $set: { role: 'user' } }
);

9. Project Specific Fields
To show only specific fields like username and emaile:

db.users.find({}, { username: 1, emaile: 1, _id: 0 });

10. Find Users with a Condition
Fetch users where emaile contains 'gmail':

db.users.find({ emaile: /gmail/ });

Find users where the profile field is empty:

db.users.find({ profile: '' });


11. Aggregate Query
For advanced operations like grouping users by a field (e.g., status):

db.users.aggregate([
  { $group: { _id: '$status', count: { $sum: 1 } } }
]);

12. Drop the Collection
To completely delete the users collection (be careful!):

db.users.drop();

13. Find Users with Operators
You can use MongoDB's operators for conditions:

Find users with specific conditions:

db.users.find({ debit: { $gte: 1000 } }); // Users with debit >= 1000

Find users with multiple conditions:

db.users.find({ $and: [{ debit: { $gte: 500 } }, { balance: { $lte: 1000 } }] });

Find users NOT matching a condition:

db.users.find({ github: { $ne: '' } }); // Users with non-empty GitHub field

14. Use $in and $nin
To filter users based on multiple values:

Find users with emails matching a list:

db.users.find({ emaile: { $in: ['sahal@gmail.com', 'john@gmail.com'] } });

Exclude users with specific usernames:

db.users.find({ username: { $nin: ['ali', 'mary'] } });
15. Update Fields with Operators
Increment a field value:

db.users.updateOne({ username: 'sahal' }, { $inc: { debit: 100 } }); // debit += 100
Rename a field:

db.users.updateMany({}, { $rename: { emaile: 'email' } }); // Rename emaile -> email
Unset (remove) a field:

db.users.updateMany({}, { $unset: { profile: '' } }); // Remove 'profile' field
16. Update with Array Operators
If a document has an array field:

Push an item into an array:

db.users.updateOne({ username: 'sahal' }, { $push: { skills: 'Node.js' } });
Add multiple items to an array:

db.users.updateOne({ username: 'sahal' }, { $addToSet: { skills: { $each: ['React', 'MongoDB'] } } });
17. Create Indexes
Improve query performance with indexing:

Create an index on the username field:

db.users.createIndex({ username: 1 });
List all indexes:

db.users.getIndexes();
18. Find with Case-Insensitive Search
To perform a case-insensitive search:


db.users.find({ username: { $regex: /^sahal$/i } }); // Matches 'sahal' in any case
19. Group and Count with Aggregation
For advanced data manipulation, use aggregation pipelines:

Count users by their status:

db.users.aggregate([
  { $group: { _id: '$status', total: { $sum: 1 } } }
]);

20. Backup and Restore
To back up your database:

bash
Copy code
mongodump --db yourDatabaseName --out /path/to/backup
To restore the database:

bash
Copy code
mongorestore /path/to/backup/yourDatabaseName
21. Limit and Skip Results
To manage result pagination:

Limit the number of results to 5:

db.users.find().limit(5);
Skip the first 5 documents:

db.users.find().skip(5);
Combine Limit and Skip for pagination:

db.users.find().skip(5).limit(5); // Page 2 with 5 documents per page
22. Use findOneAndUpdate
To update and return the updated document:


db.users.findOneAndUpdate(
  { username: 'sahal' },
  { $set: { github: 'https://github.com/sahal' } },
  { returnDocument: 'after' }
);
23. Count with Filters
Count documents that meet specific conditions:

db.users.countDocuments({ emaile: /gmail/ });
24. Drop Database
To delete the entire database (be cautious!):


db.dropDatabase();
25. Export Collection to JSON
To export users collection data:

bash
Copy code
mongoexport --db yourDatabaseName --collection users --out users.json





---------------------------------------------------------------------------------------------------------------------------



MongoDB
----------
-database used to store and manage data permanently




SQL                                        
----- 
-relation/SQL DBMS
-store data in table with
rows and column
-uses fixed schema
-optimized for complex joins & transactions  
-support rich set of data types
-declerative query language
-ACID property (atomicity,consitency,isolation,durablitiy)


 MongoDB
---------
-document oriented/NoSQL DB
-store data as collection of JSON documents
-uses dynamic schema   
-optimized for scalablity and performance
-limited set of datatypes 
-expressive query languages based on json
-NOSql  based on CAP (consitency,availablity,partion tolerance)
-used in bigdata and real time app 






connection name must start with small letters and it must a plural word
-mongoDb will create a unique id for alll new documnt , which is a hexdecimal object id is stored in '
_id




CRUD operations
---------------

* read all document stored in a collection : find()  
* read a document stored in a collection which satisfy a condition : findOne({key:"value"})
if the condition satisfy then it will return the entire document,else return null

*insert a data in mongodb collection : insertOne({key:"value"})
*insert multiple data in mogodb collection: insertMany([{name:"ajay",age:"77"},{name:"loki",age:"47"}])
*disply total document count in a collection:countDocuments()
*to limit count of dicument read from collection:limit (number)
*to sort data : sort(condition)
*to skip data while reading the document : skip(number)
*$gt/$gte/$lt/$lte - used to perform querying while reading the documents
*$in/$nin - used to check documents are included or not
*$expr used to compare 2 fields in a document
*to update document use updateOne/updateMany()


      -




-Aggregation:used to join multiple collection to get common result

 $lookup:similar as left outer-jion in sql

syntax:{
$lookup:{

from : <collection to join>,
localField:<field from the input document>,
foreignField:<field from the document of 'from collection>,
as:<output field)

}
}        





Node js-----server/Backend
---------------------------

1) run time environment for js + js libraries
2)Features
   -Extreamly Fast
   -Asychronus
   -Single threaded and event loop
   -higly scaleacle (can handle large amount of data)
   -open source
3)Node js Global object  
    -it can be accessed anywhere from node js application without exporting/importing
      eg console.log(),setTimeout()

4)Node.js Module System : A file is considered as module in node.js to access data from one file it has to export from there,and before using
it in another file it has to import

  -to import module : require('module_name or path')
  - to export module : module. Exports

5)built in modules in node js

  -fs:file system ,hanling file related events
  -http : create http webserver
  -https: create https webserver
  -crypto:providing tool like hshing,encryption etc
  -events:handling eventEmitter
  -process:used to provide currently running process in the nod e js

  -process: environmental variable-used to hold confiqaration/confidante data reagrading the projects,to access ev throughout the application use      '   'process.env.variable_name'


6) node js package


	-used to  resolve common problems
        -install packages via npm	
	-it add package.json, package-lock-json , node_modules
	

-backend concepts
	-client-server architecture
	-REST API= http request and json derver
	-CRUD operations: create(POST) read(GET) update(PUT) delete(DELETE)
	-CORS (cross origin resorce sharing)protocol must enabeled in server


-express
	-frame work node js to create webserver in client-server archituture
 -step to create server using express
	-create a folder for server
	-inside folder create packege.json file using the command 'npm int -y'
	-update package.json "script" value as "start":"node index.js" insted of test
	-install packages for creating express web server
		-express 
		-cors
		-dotenv
	-create .env file
	-create.gitignore file and add node_modules and .env file
	-create index.js file to define express server
	-import dotenv,express ,cros
	-create express server
	-use cross in express server
	-use json parser in express server
	-create port for server app
	-start to listen server app for client request


-create routs in express server
	-create a folder
		-create router.js file inside the folder 
		-import express library react an object of router class of Express
		-router object is capable of defining route for the app
		-export router from the file
		-import router in index.js
		-use router in express server

-create model to define scheme and model for mongoDb using mongoose

	-crate a folder
	-create a js file to define scheme & model
	-create model
	-export model
	


	MONGOOSE - OBJECT DATA MODEL (ODM) FOR NODE JS
	----------------------------------------------
		1 install mongoose : npm i mongoose
		2 create scheme : structure of the document that we want to store in a collection
			-create object for schema class

		3 model: copy of collection in mongoDb
			-create model, call model() method









$lookup : similar as left outer-join in sql 

syntax : {
  $lookup:{

    from : <collection to jpoin>,

    localField : <field from the input doc>,

    foreignField : <field from the doc of 'from' collection>,
    
    as : <output field>

  }
}

to join --

db.users.aggregate({$lookup :{from : "projects, localField: "email", foreignField : "userId",as : "userProjects"}})#   P r o j e c t - F A I R - F r o n t e n d  
 