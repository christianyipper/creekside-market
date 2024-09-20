const Link = ( { text, link } ) => {

    return (
        <a className='link' href={ link }>
            <p>{ text }</p>
        </a>
    );
};

export default Link;