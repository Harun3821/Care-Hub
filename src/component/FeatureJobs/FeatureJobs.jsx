import { useEffect, useState } from "react";




const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);


    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Features Jobs: {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex totam! Explicabo sapiente sequi ducimus!</p>
            </div>
        </div>
    );
};

export default FeatureJobs;