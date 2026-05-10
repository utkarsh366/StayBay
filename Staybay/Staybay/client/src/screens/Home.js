import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Hostel from "../components/Hostel"
import {getAllHostel} from "../actions/hostel_action"
import Loading from "../components/Loading"
import Error from "../components/Error"
// import Filter from "../components/Filter"
import Sidebar from "./Sidebar"
//import pizzas from "../pizzaData";

const Home = () => {
     const dispatch = useDispatch();
     const hostelState = useSelector(state => state.getAllHostelReducer)
    
     const {hostels,loading,error} = hostelState  ;

    useEffect(()=>{
       dispatch(getAllHostel());
    },[])
   
   
   

    return (
        <div className="min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
                <div className="w-full md:w-1/4">
                   <Sidebar />
                </div>
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (<Loading />): error ? ( <Error error="something went worng" /> ) :
                            ( hostels.map(hostel => {
                                return (
                                    <div key={hostel._id} className="w-full">
                                        <Hostel hostel={hostel} />
                                    </div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;