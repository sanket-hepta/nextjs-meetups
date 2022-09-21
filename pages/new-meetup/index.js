import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage(){

    const router = useRouter();

    async function onAddMeetup(data){
        console.log(data);
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const response_data = await response.json();
        console.log(response_data);

        router.push('/');
    }

    return <NewMeetupForm onAddMeetup={onAddMeetup} />
}

export default NewMeetupPage;