export interface Technology {
    name: string;
    img: string;
}

export interface Project {
    name: string;
    techStack: string[];
    id: number;
    description: string;
    img?: string;
    github: string;
    category: string;
    detail: {
        title: string;
        description: string;
        links: string;
        videoLink?: string;
    }[];
}


export interface FormData {
    userName: string;
    email: string;
    msg: string;
}