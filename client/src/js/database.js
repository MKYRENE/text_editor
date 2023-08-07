import { openDB } from 'idb';// data base running on repo

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Initialize the database
const dbPromise = initdb();

// Method to add content to the database
export const putDb = async (content) => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  //replace store item with an ID of 1 with an object and property of content and value of content above.*
  await store.add(content);
  await tx.done;
  console.log('Content added to the database:', content);
};

// Method to get all content from the database
export const getDb = async () => {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const content = await store.getAll();
  //get item from the store with id 1 *
  //return item .content *
  console.log('Content retrieved from the database:', content);
  return content; 
};
