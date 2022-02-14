import React from 'react';

const PublicTemplate = (props) => {
    return <section className='public'>
        {props.children}
    </section>
}

export default PublicTemplate;