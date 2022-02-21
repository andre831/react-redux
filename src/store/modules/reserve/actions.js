function addReserveRequest(id){
    return {
        type:'ADD_RESERVE_REQUEST',
        id
    };
};

function addReserveSuccess(trip){
    return {
        type:'ADD_RESERVE_SUCCESS',
        trip
    };
};

function removeReserve(id){
    return {
        type: "REMOVE_RESERVE",
        id,
    };
};


export {addReserveRequest, addReserveSuccess, removeReserve };