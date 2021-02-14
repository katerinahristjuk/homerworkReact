import React from 'react';
import PropTypes from 'prop-types';

export function Textarea (props){

    return(
        <div id='textarea'>
            <p>
                <textarea
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                >
                </textarea>
            </p>
        </div>
    )
}

Textarea.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}