import Head from 'next/head'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import {getAll, postValue} from '../services/firebaseService'

export default function Home({data}) {
  const [newMessage, setNewMessage] = useState(" ")
  const [newNotice, setNewNotice] = useState("")
  const [currentMessage, setCurrentMessage] = useState("")
  // const [errorMessage, setErrorMessage] = useState("")


  const getData = () => {
    getAll().then((snapshot) => setCurrentMessage(snapshot.val()))
  }
  useEffect(  () => {
        // setCurrentMessage( getAll());
        getData();
  }, [])

 


  
  const changeHandler = (e) => 
  {
      const input = e.target.value;
      if(input.length > 10 && input.length < 33)
      {
        setNewMessage(input);
        console.log(input);
      }
  }
    
  //   if (input.length > 10 && input.length <33)
  //   {
  //     setErrorMessage('')
  //     setNewMessage(input);
  //   }
  // }

  const formHandler = (e) => 
  { 
       
      e.preventDefault();
      
      if (newMessage)
      {
        postValue({message: newMessage})
      }
      getData();

}


  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Notice Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>Smart Notice Board</h3>
        <form>
          <input name="message" className={styles.message} type="text" placeholder="Type a new message here" onChange={(e) => changeHandler(e)} minLength="10" maxLength="32" required/>
          <br></br>
  {/* <p className={styles.errorMessage}>{errorMessage}</p>*/} 
          <button onClick={(e) => formHandler(e)}>Submit</button>
       </form>
        <br></br>
        <br></br>
        <h3>Current Message</h3>
        <p>{currentMessage ? currentMessage : 'no data'}</p>
        </div>
    </div>
  )
}

// export async function getServerSideProps(ctx)
// {     const data = await getAll();
//         console.log(data)

//   return {
//     props: {
//       data,
//     }
//   }
// }


