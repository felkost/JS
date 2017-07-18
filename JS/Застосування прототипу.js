function User(forename, username, password)
{
    this.forename = forename
    this.username = username
    this.password = password

    User.prototype.showUser = function() //такий метод буде у всіх класі один і той же, як посилання на нього,
                                         // а не копія; по суті метод є статичним; 
                                         // аналоогічно створюється статична властивість
    {
        document.write("Forename: " + this.forename + "<br>")
        document.write("Username: " + this.username + "<br>")
        document.write("Password: " + this.password + "<br>")
    }
}