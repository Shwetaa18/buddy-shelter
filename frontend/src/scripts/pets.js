import { Post, Get, Patch, Delete } from "./apiClient";

export function getPets(){
    // api call to get login into our system
    return Get('/api/pets',{});
}

export function createPets(data){
    // api call to register a new user
    return Post('/api/pets',data);
}

export function updatePet(id, data){
    // api which will return information about user
    return Patch(`/api/pets/update/${id}`, data)
}

export function deletePets(id){
    return Post(`/api/pets/delete/${id}`,{});
}
