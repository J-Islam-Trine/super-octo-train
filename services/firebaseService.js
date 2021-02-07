import rtdb from '../config/firebase'
// import 'firebase/database'
const firertdb = rtdb.database();
const db = firertdb.ref('/content');
// console.log(db);
const getAll = () => 
{  
    const readRef = firertdb.ref('/content/message')
    return readRef.once('value', async (snapshot) => {
       let newNotice = await snapshot.val();
       return newNotice;
        // console.log(newNotice);
      }); 
      
    //   return noticeArray[0];
}

const postValue = (newData) => {
    db.update(newData)
}
export {
    getAll,
    postValue
}