let idCard = document.getElementById('submit');

function createidCard(){
  var FirstName = document.getElementById('FirstName').value;
  var LastName = document.getElementById('LastName').value;
  var Address = document.getElementById('Address').value;
  var FullName = FirstName + LastName;
  var Age = document.getElementById('Age').value;
  var PhoneNumber = document.getElementById('PhoneNumber').value;
  console.log(FirstName);
  console.log(LastName);
  console.log(Address);

  let array = [];

  array.push(Age, PhoneNumber);
  console.log(array);

  for(var i=0; i < array.length; i++) {
    if(array[i] <=100){
      console.log('This would be our var Age' + "" + Age)
      document.getElementById('postAge').innerHTML = 'Age:' + "" + Age;
    }
    else {
      console.log('This is our default PhoneNumber in our array'+ "" + PhoneNumber)
      document.getElementById('postPhoneNumber').innerHTML = 'PhoneNumber:' + "" + PhoneNumber;
    }
  }
  document.getElementById('postFullName').innerHTML = FullName;
  document.getElementById('postAddress').innerHTML = Address;
}

idCard.addEventListener('click', createidCard);
