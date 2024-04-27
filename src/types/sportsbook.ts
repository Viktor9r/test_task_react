export interface ISportsbook {
    id: number;
    logo: string;
    title: string;
    headline: string;
    about: string;
    rating: number;
    link: string;
    payout_min: number;
    payout_max: number;
    benefits: string[];
    code: string;
}