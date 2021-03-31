import firebase from "../firebase";

const db = firebase.ref("/Users");




export const getAll = () => {
  return db
};

export const create = (user) => {
  return db.push(user);
};

export const update = (id, user) => {
  return db.child(id).update(user);
};

export const remove = (id) => {
  return db.child(id).remove();
};

export const deleteAll = () => {
  return db.remove();
};
