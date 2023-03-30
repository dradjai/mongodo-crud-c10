import {client, toysCollection} from '../mongoConnect.js'

await client.connect();

const deleteToy = async () => {
  
  try {
  const toyDelete = await toysCollection.deleteOne({name: 'Transformer3'});
  console.log(toyDelete);
  
} catch (error) {
  console.log(error);
}
finally{
  await client.close();
}
}

deleteToy();