export interface Address {
    street: string;
    city: string;
}

export interface Patient {
    id: number;
    amka: string;
    fullName: string;
    address: Address;
    admissionDate: string;
}
