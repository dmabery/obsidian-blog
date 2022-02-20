import Head from 'next/head';

const Meta = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta property="og:title" content={props.title}/>
                <meta property="og:description" content={props.description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://daltonmabery.com/"/>
                <meta property="og:image" content=""/>
            </Head>
        </>
    )
}

export default Meta;