import axios from "axios";

export class ContactService {
    static serverURL = `http://localhost:9000`;

    static getAllContacts() {
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(id) {
        let dataURL = `${this.serverURL}/contacts/${id}`;
        return axios.get(dataURL);
    }

    static createContact(contact) {
        let dataURL = `${this.serverURL}/contacts/`;
        return axios.post(dataURL, contact);
    }

    static updateContact(contact, id) {
        let dataURL = `${this.serverURL}/contacts/${id}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(id) {
        let dataURL = `${this.serverURL}/contacts/${id}`;
        return axios.delete(dataURL);
    }

    static getAllGroups() {
        let dataURL = `${this.serverURL}/groups/`;
        return axios.get(dataURL);
    }

    static getGroup(contact) {
        let id = contact.groupId
        let dataURL = `${this.serverURL}/groups/${id}`;
        return axios.get(dataURL);
    }
}