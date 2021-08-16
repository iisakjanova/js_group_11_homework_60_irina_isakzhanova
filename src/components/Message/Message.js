import React from 'react';

const Message = ({message}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    <span>{message.author}</span>
                    <span>{message.datetime}</span>
                </h5>
                <p className="card-text">{message.message}</p>
            </div>
        </div>
    );
};

export default Message;