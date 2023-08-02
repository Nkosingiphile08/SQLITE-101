import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await db.migrate()

// call the query using an await
//const result = await db.all('select * from greetings');    
//console.log(result)

// create a function that return all the greeting the db
  export async function getGreetings() {
    const result = await db.all('select * from greetings');
    return result;
  }

  const result = await getGreetings()

  console.log(result)

  // async function deleteGreetByLanguage(language){
  //}

   //Delete the duplicted data
  export async function addGreeting(language, greeting){
    const sql = 'insert into greetings (language, greeting) values (?, ?)';
    await db.run(sql, [language, greeting]);
  }

  export async function deleteGreeting(id) { // delete function
    const sql = 'delete from greetings where id = ?'
    await db.run(sql, [id])
  }

export async function updateGreeting (language, greeting, id) {
    const sql = 'update greetings set language =?, greeting = ? where id = ?';
    await db.run(sql, [language, greeting, id])
}
  const result1 = await getGreetings()
  console.log(result1);
  console.log('========')
  
  await updateGreeting('Sepedi', 'Thobela', 35) //update the data in the table

  await deleteGreeting(47); // delete duplicated data in the table
  await deleteGreeting(48)
  await deleteGreeting(49);
  await deleteGreeting(50)
  await deleteGreeting(51);
  await deleteGreeting(52)
  await deleteGreeting(53);
  await deleteGreeting(54)
  await deleteGreeting(55);
  await deleteGreeting(56)
  await deleteGreeting(57);
  await deleteGreeting(58)
  await deleteGreeting(59);
  await deleteGreeting(60);

  //await addGreeting('Sepedi', 'Dumela');
  
  console.log('========')

  const result2 = await getGreetings()
  //console.log(result2);


//call the query using a promse
db
   .all('select * from greetings')
   .then(result => {
       console.log(result)
   })

//     const countResult = await db.get('select count(*) as count from greetings') 

//     console.log(countResult.count);

// // console.log(result);
 
console.log('end')