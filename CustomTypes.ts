export interface SocialNetworkType {
    facebook: string,
    instagram: string,
    linkedin: string,
    skypse: string,
    twitter: string
}

export interface PersonType {
    avatar: string,
    city: string,
    company: string,
    id: number,
    key?: string,
    isContact: boolean,
    isFavourite: boolean,
    name: string,
    position: string,
    social_networks: SocialNetworkType
}

export interface CompanyType {
    name: string,
    key: string
}

export interface StateType {
    people: PersonType[],
    listPeople: PersonType[],
    isListView: boolean,
    search: string,
    location: string,
    companies: CompanyType[],
    isLoad: boolean
}

export interface SwapItemType {
    index: number,
    item: object,
    separators: object
}