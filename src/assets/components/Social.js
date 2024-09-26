const Social = ( { link, icon } ) => {
    return (
        <a className="social" href={ link }>
            <img src={ icon } />
        </a>
    );
};

export default Social;