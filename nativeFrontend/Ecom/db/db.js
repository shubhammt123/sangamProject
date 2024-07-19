import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase("cart.db");

export const createTables = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS cartItems (id INTEGER PRIMARY KEY NOT NULL, item TEXT);'
      );
    });
  };
  
  export const insertCartItem = (item) => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO cartItems (item) VALUES (?);', [JSON.stringify(item)]);
    });
  };
  
  export const removeCartItem = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM cartItems WHERE id = ?;', [id]);
    });
  };
  
  export const fetchCartItems = (callback) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM cartItems;', [], (_, { rows: { _array } }) => {
        callback(_array.map(row => JSON.parse(row.item)));
      });
    });
  };
  
  export const clearCart = () => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM cartItems;');
    });
  };
  