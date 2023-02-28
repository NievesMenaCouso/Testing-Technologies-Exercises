//Task 1
    class User {
        constructor(name, surname){
            this.name = name;
            this.surname = surname;
        }
        greet(){
            return 'Hello, ' + this.name + ' ' + this.surname;
        }
    }
    const user1 = new User ('John', 'Doe');
    const user2 = new User ('Jane', 'Doe');
    console.log(user1.greet());
    console.log(user2.greet());

//Task 2: Encapsulation 
    class User2 {
        constructor(name, surname){
            this._name = name;
            this._surname = surname;
        }
        get name(){
            return this._name;
        }
        get surname(){
            return this._surname;
        }
        set name (newName){
            this._name = newName;
        }
        set surname (newSurname){
            this._surname = newSurname;
        }
        //Overriden method
        greet(){
            return 'Hello World!';
        }
    }
    //Create User2 object
    let user = new User2 ('Lisa', 'Simpson');
    //Display it using get methods
    console.log(user.name, user.surname);
    //Reset its values using set methods
    user.name = 'Nieves';
    user.surname = 'Mena Couso';
    //Call greet() method
    console.log (user.greet());
    //Display the new name and surname using the get method
    console.log('My name is ' + user.name, user.surname);

//Task 3: Inheritance (Subclass and Superclass)
    class User3 {
        constructor (){
            this._username = "";
        }
        set username (newUsername){
            this._username = newUsername;
        }
    }
    class Admin extends User3 {
        expressYourRole(){
            return 'Admin'
        }
        sayHello(){
            return 'Hello admin, ' + this._username;
        }
    }
    //Create an admin object
    let admin = new Admin();
    //Set the username
    admin._username = 'Balthazar'
    //Display the calling of the expressYourRole() function of the Admin class
    console.log(admin.expressYourRole());
    //Display the calling of the sayHello() function of the Admin class
    console.log(admin.sayHello());

//Task 4: Polimorphism
    class User4 {
        constructor () {
            //Inithialising the articles variable
            this._articles = 0;
        }
        get articles () {
            return this._articles;
        }
        set articles (newArticles) {
            this._articles = newArticles;
        }
        //Methd to calculate the scores to be changed in the sub-classes
        calcScores(){
        return this._articles
        }
    }
    class Author extends User4 {
        //Override Method
        calcScores(){
            return this.articles * 10 + 20;
        }
    }
    class Editor extends User4 {
        //Override Method
        calcScores() {
            return this.articles * 6 + 15;
        }
    }
    //Create an Author object
    let author = new Author;
    //Set number of articles
    author.articles = 8;
    //Display the calling of the calcScores() function to display the author scores
    console.log(author.calcScores());
    //Create an Editor object
    const editor = new Editor;
    //Set number of articles
    editor.articles = 15;
    //Display the calling of the calcScores() function to display the editor scores
    console.log(editor.calcScores());

//Task 5 
    class User5 {
        constructor(username){
            this._username = username;
            //Prevent creating objects from this class (to make it abstract)
            if(this.constructor === User5){
                throw new TypeError("Cannot construct Abstrct instances directly");
            }
        }
        stateYourRole(){
            //Prevent method to be called directly (to make it abstract)
            throw new TypeError("You have to implement the method \"stateYourRole()\"");
        }
        set username(username){
            this._username = username;
        }
        get username(){
            return this._username;
        }
    }
    class Admin2 extends User5{
        constructor(username){
            super(username);
        }
        //Override method
        stateYourRole(){
            return "Admin";
        }
        //Just for testing
        foo(){
            // Calls abstract.stateYourRole();
            super.stateYourRole();
        }
    }
    class Viewer extends User5{
        constructor(username){
            super(username);
        }
        //Override method
        stateYourRole(){
            return "Viewer";
        }
    }
    //Create an Admin2 object
    let admin2 = new Admin2 ('Balthazar');
    //admin.foo(); Calls User5.foo() and throws an error
    //Display the username of the Admin2 object
    console.log(admin2.username);
    //Display the calling of the stateYourRole() function in Admin2 object
    console.log(admin2.stateYourRole());
    //Create a Viewer object
    let viewer = new Viewer ('Melchior');
    //Display the username of the Viewer object
    console.log(viewer.username);//Melchior
    //Display the calling of the stateYourRole() function in Viewer object
    console.log(viewer.stateYourRole()); //Viewer