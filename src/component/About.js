export default function About(){
    return (
    <div className="AboutUS">
    <h1>About Element</h1>
    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397183737/b887fa9f2881e66851039950e5aeb6f2.png" alt="Aboutme"/>
    <button onClick={()=>{fetch('http://localhost:4000/graphql', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: "{ hello }"})
        })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));}
    }>submit</button>
    </div>
    );
}
