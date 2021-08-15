import {useEffect, useState} from 'react';
import axios from "axios";

import React from 'react';
import Message from "../../components/Message/Message";

import {URL} from "../../constants";

const ERROR_MESSAGE_TEXT = 'Something went wrong... Error status ';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const messages = await getMessages();
                setMessages(messages);
                setError('');
            } catch (e) {
                setError(ERROR_MESSAGE_TEXT + e.response.status);
            }
        })();
    }, []);

    const getMessages = async () => {
        const response = await axios.get(URL);
        return response.data;
    };

    return (
        <>
            {error ? <div className="text-center bg-danger text-white py-2">{error}</div> : null }
            <h4 className="text-center">Hello!</h4>
            <h5 className="text-center">Welcome to JS group 10-11 chat!</h5>
            <div className="col-md-8 col-sm-12 px-3 py-3 mx-auto bg-light">
                {messages.map(message => (
                    <Message
                        message={message}
                        key={message._id}
                    />
                ))}
            </div>
        </>
    );
};

export default Chat;