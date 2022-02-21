function addReserve(trip){
    return {
        type:'ADD_RESERVE',
        trip
    };
};

function removeReserve(id){
    return {
        type: "REMOVE_RESERVE",
        id,
    };
};


export { addReserve, removeReserve };