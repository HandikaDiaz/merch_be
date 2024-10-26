export interface updateProfileDto {
    id: number;
    username: string
    address: string | null
    gender: Gender | null
    phone: number | null
    image?: ProfileImageDto
}

export enum Gender {
    Male = "Male",
    Female = "Female"
}

export interface ProfileImageDto {
    url: string;
}