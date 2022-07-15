interface User {
    title: string;
    status: boolean;
    id: number;
}
interface Name {
    firstname: string;
    lastname: string;
}
declare const user1: Name;
declare const user2: Name;
declare const printName: (obj: Name) => string;
interface Address {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}
interface PersonDetails {
    Prefix: string;
    phones: string[];
    addresses: string[];
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
}
declare const personDetails: PersonDetails;
declare let alldetail: any[];
declare const PhoneBook: (obj: PersonDetails) => void;
