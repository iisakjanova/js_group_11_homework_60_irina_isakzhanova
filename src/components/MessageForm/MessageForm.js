import React from 'react';

const MessageForm = props => {
    return (
        <>
            <h5 className="text-center pt-3">Send message</h5>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                           className="form-control"
                           name="author"
                           placeholder="enter your name"
                           required
                           value={props.value.author || ''}
                           onChange={e => props.onChange(e.target.value, props.value.text)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control"
                              rows="3"
                              name="message"
                              placeholder="type something to your groupmates"
                              required
                              value={props.value.text || ''}
                              onChange={e => props.onChange(props.value.author, e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    onClick={() => props.onSend()}
                >
                    Send
                </button>
            </form>
        </>
    );
};

export default MessageForm;