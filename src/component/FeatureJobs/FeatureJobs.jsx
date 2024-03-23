import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);

    //  thes is not the best way to load show all  data 

    const [datalength, setDatalength] = useState(4)


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
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={datalength === jobs.length ? 'hidden' : ''}>
                <button  onClick={() => setDatalength(jobs.length)}  className="btn btn-primary">Show all jobes</button>
            </div>
        </div>
    );
};

export default FeatureJobs;