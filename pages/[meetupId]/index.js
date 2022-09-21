import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props){
    return <MeetupDetail 
        _id= {props.meetupData._id}
        image= {props.meetupData.image}
        title= {props.meetupData.title}
        address= {props.meetupData.address}
        description= {props.meetupData.description}
    />
}

export async function getStaticPaths(){

    const response = await fetch('http://localhost:3000/api/meetups', {
        method: 'GET'
    });

    const meetups = await response.json();
    const all_data = await meetups.result;

    return {
        fallback: false,
        paths: all_data.map((data) => ({
            params:{ meetupId: data._id }
        }))
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    //fetch the data from API

    const response = await fetch(`http://localhost:3000/api/meetup?meetupId=${meetupId}`, {
        method: 'GET'
    });

    const meetup = await response.json();
    const data = await meetup.result;

    return {
        props: {
            meetupData: {
                _id: meetupId,
                image: data.image,
                title: data.title,
                address: data.address,
                description: data.description,
            }
        }
    };
}

export default MeetupDetails;