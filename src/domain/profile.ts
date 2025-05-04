export interface CompanyProfile {
    id: string;
    name: string;
    logo: string;
    coverPhoto: string;
    about: string;
    industry: string;
    founded: string;
    size: string;
    website: string;
    contact: {
        email: string;
        phone: string;
        socialMedia: {
            linkedin?: string;
            twitter?: string;
            facebook?: string;
        };
    };
    location: {
        address: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
        coordinates?: {
            latitude: number;
            longitude: number;
        };
    };
    gallery: string[];
}

export interface ProfileFormData extends Omit<CompanyProfile, 'id' | 'gallery'> {
    gallery?: File[];
}