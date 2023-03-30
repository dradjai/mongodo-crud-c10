import {client, toysCollection} from '../mongoConnect.js';

await client.connect();

const editToy = async () => {
  
  try {
      const updateToy = await toysCollection.findOneAndUpdate(
        {name: 'Power Ranger'},
        {$set: {name: 'Transformer3'}});
    
        console.log(updateToy);
      
    } catch (error) {
      console.log(error);
      
    }
    finally{
      await client.close();
    }

}
editToy();