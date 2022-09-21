//import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props){
    

    /*const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        //send http request and fetch the data
        setLoadedMeetups(DUMMY_DATA);
    }, []);

    return <MeetupList meetups={loadedMeetups} /> */

    return (
        <Fragment>
            <Head>
                <title>React NextJS</title>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
        
    )

        
}

/*export async function getServerSideProps(context){

    const req = context.req;
    const res = context.res;

    //fetch the data from API
    return {
        props: {
            meetups: DUMMY_DATA
        }
    };
}*/

export async function getStaticProps(){
    //fetch the data from API

    const response = await fetch('http://localhost:3000/api/meetups', {
        method: 'GET'
    });

    const meetups = await response.json();

    return {
        props: {
            meetups: meetups.result
        },
        revalidate: 10
    };
}

export default HomePage;