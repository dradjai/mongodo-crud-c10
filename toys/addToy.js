import {client, toysCollection} from '../mongoConnect.js'

await client.connect();

const addToy = async () => {

  try {
    
    const myToy = {
      name: 'GI JOE',
      type: 'Action Figure',
      isCool: false,
      price: 40,
      description: 'Leader autobot, real cool blue semi truck, with sword',
  
    }
    //get collection
    const addedToy = await toysCollection.insertOne(myToy)
    console.log(addedToy);

  } catch (error) {
    console.log(error);
  }
  finally{
    await client.close();
  }
    
  }

addToy();