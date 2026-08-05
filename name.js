async function fetchAndPrintUsers() {
  try {
   
    const response = await fetch('C:\Users\student\Downloads\FULLSTACK');
    
 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
   
    const users = await response.json();
    

    users.forEach(user => {
      console.log(`ID: ${user.id}`);
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
   
      console.log(`City: ${user.address.city}`); 
      console.log('-------------------------');
    });
    
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}


fetchAndPrintUsers();