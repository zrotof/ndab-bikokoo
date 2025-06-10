export interface Canton {
    name: string;
    population: number;
}

export interface CountryCantonData {
    id: string; // Code pays ISO 2 lettres
    name: string; // Nom complet du pays
    latitude: number; // Nouvelle propriété: latitude du point pour l'étiquette
    longitude: number; // Nouvelle propriété: longitude du point pour l'étiquette,
    cantons: Canton[];
}
