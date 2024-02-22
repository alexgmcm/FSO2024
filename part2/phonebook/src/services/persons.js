import axios from 'axios'
const baseUrl = '/api/persons'

const create = (newPerson) => {
    return axios.post(baseUrl,newPerson)
}

const getAll = () => {
    return axios.get(baseUrl)
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`,newPerson)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {create, getAll, update, remove}