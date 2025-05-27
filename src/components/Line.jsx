import React, {useEffect, useState} from 'react'
import SignOut from './SignOut'
import {db} from '../firebase'
import SendMessage from "./SendMessage";

function Line() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt', 'desc').limit(50).onSnapshot(
            (snapshot) => {
                setMessages(snapshot.docs.map(doc => ({
                    data: doc.data()
                })))
            }
        );
    }, [])

    return (
        <div>
            <SignOut/>
            <div className='msgs'>
                {messages.map(({data}) => (
                    <div key={data.id}>
                        <img src={data.photoURL} alt=""/>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    )
}

export default Line
