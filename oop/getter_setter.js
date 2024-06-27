class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh` // when someone access the password they will get the getter value
    }

    set password(value){
        this._password = value  //we have use new password  property bcoz we are setting the password both in constructor as well as in setter
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);