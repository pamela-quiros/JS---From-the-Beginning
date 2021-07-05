const user = {
  email: 'pame@pam.cm'
}

try {
  //Produce a reference error
  //myFunction();

  //Produce a Type Error
  // null.myFunction();

  //Produce Syntax Error
  // eval('Hello');

  //Produce a URIError
  // decodeURIComponent('%');

  if(!user.name){
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e){
  console.log(`User error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally run reguardless of result');
}

console.log('Program continues');