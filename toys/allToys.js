import {client, toysCollection} from '../mongoConnect.js';

await client.connect();

const allToys = async () => {
  
  try {
    const getAllToys = await toysCollection.find().toArray();
    console.log(getAllToys);
    
  } catch (error) {
    console.log(error);
  }
  finally{
    await client.close();
  }
};

allToys();