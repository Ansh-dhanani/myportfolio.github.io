export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    sourceCodeUrl: string;
}

export interface Skill {
    id: number;
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Contact {
    name: string;
    email: string;
    message: string;
}