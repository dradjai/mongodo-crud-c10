import {client, fruitsCollection} from '../mongoConnect.js'

const addFruit = async () => {
  const myFruit = {
    name: "Grapefruit",
    taste: "Juicy",
    price: 3,
    stock: 100,
  };
  try {
    await client.connect()
    const addedFruit = await fruitsCollection.insertOne(myFruit);
    console.log(addedFruit);
    
  } catch (error) {
    console.log(error)
  }finally{
    await client.close()
  }

};

addFruit();