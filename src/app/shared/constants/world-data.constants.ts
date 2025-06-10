
import { CountryCantonData } from '../../core/models/map';

export const MAHOL_COUNTRIES_DATA: CountryCantonData[]  = [
    {
      id: 'DE',
      name: 'Germany',
      cantons: [
        { name: 'Baden Württemberg', population: 148 },
        { name: 'Bayern', population: 31 },
        { name: 'Berlin', population: 84 },
        { name: 'Hambourg', population: 284 },
        { name: 'Nordrhein - Westfalen', population: 170 },
        { name: 'Nordrhein - Westfalen Bis', population: 60 },
        { name: 'Hessen', population: 158 },
      ],
      latitude: 51.1657, // Centre approximatif de l'Allemagne
      longitude: 10.4515
    },
    {
      id: 'GB',
      name: 'United Kingdom',
      cantons: [
        { name: 'Nguissi Mère (London)', population: 209 },
        { name: 'Nguissi Nord (Manchester)', population: 151 },
        { name: 'Birmingham', population: 288 },
      ],
      latitude: 55.3781, // Centre approximatif du Royaume-Uni
      longitude: -3.4360
    },
    {
      id: 'AU',
      name: 'Australia',
      cantons: [
        { name: 'Australie', population: 259 },
      ],
      latitude: -25.2744, // Centre géographique de l'Australie
      longitude: 133.7751
    },
    {
      id: 'AT',
      name: 'Austria',
      cantons: [
        { name: 'Autriche', population: 199 },
      ],
      latitude: 48.2082, // Vienne
      longitude: 16.3738
    },
    {
      id: 'BE',
      name: 'Belgium',
      cantons: [
        { name: 'Belgique Mère', population: 119 },
        { name: 'Linoyoi li Belgique', population: 297 },
        { name: 'Mawanda ma Belgique Mère', population: 105 },
        { name: 'Nsebla u Belgique', population: 99 },
      ],
      latitude: 50.8503, // Bruxelles
      longitude: 4.3517
    },
    {
      id: 'ES',
      name: 'Spain',
      cantons: [
        { name: 'Barcelone', population: 226 },
        { name: 'Madrid', population: 38 },
        { name: 'Nem Masse ma Bilbao', population: 237 },
      ],
      latitude: 40.4168, // Madrid
      longitude: -3.7038
    },
    {
      id: 'FR',
      name: 'France',
      cantons: [
        { name: 'Bilama bi Côte d’Azur', population: 293 },
        { name: 'Bordeaux', population: 134 },
        { name: 'Cœur de Lyon', population: 71 },
        { name: 'Cœur de Toulouse', population: 109 },
        { name: "Côte d'azur Monaco", population: 257 },
        { name: 'Gloire de Lyon', population: 93 },
        { name: 'Grand Est', population: 207 },
        { name: 'Grand Ouest', population: 150 },
        { name: 'La Lorraine', population: 95 },
        { name: 'Le Mans Mère', population: 57 },
        { name: 'Like li nkeke li Lyon', population: 163 },
        { name: 'Makwassi ma Lyon', population: 45 },
        { name: 'Mivag mi Grand Est', population: 173 },
        { name: 'Marseille', population: 32 },
        { name: 'Masse ma Lyon', population: 135 },
        { name: 'Mère de Lyon', population: 107 },
        { name: 'Paris Adna', population: 71 },
        { name: 'Paris Ambiance', population: 157 },
        { name: 'Paris Bisai -', population: 294 },
        { name: 'Paris Bords de Marne', population: 246 },
        { name: 'Paris Centre', population: 188 },
        { name: 'Paris Espoir', population: 193 },
        { name: 'Paris Est Mère', population: 73 },
        { name: 'Paris Est Etoile', population: 77 },
        { name: 'Paris Est Karis', population: 11 },
        { name: 'Paris Est Normandie', population: 198 },
        { name: 'Paris Est Rive de Seine', population: 264 },
        { name: 'Paris Est Sanaga', population: 73 },
        { name: 'Paris Est Victoire', population: 154 },
        { name: 'Paris Est Village', population: 111 },
        { name: 'Paris Grand Nord', population: 235 },
        { name: 'Paris Hémle', population: 284 },
        { name: 'Paris Lipém -', population: 87 },
        { name: 'Paris Lumière', population: 297 },
        { name: 'Paris Maéba', population: 202 },
        { name: 'Paris Maliga', population: 177 },
        { name: 'Paris Maliga 18ième -', population: 28 },
        { name: 'Paris Mahol', population: 236 },
        { name: 'Paris Manogla', population: 15 },
        { name: 'Paris Midi Convivialité', population: 151 },
        { name: 'Paris Midi Express', population: 59 },
        { name: 'Paris Midi Mère', population: 235 },
      ],
      latitude: 46.2276, // Centre géographique de la France
      longitude: 2.2137
    },
    {
      id: 'IT',
      name: 'Italy',
      cantons: [
        { name: 'Florence', population: 167 },
        { name: 'Milan Mère', population: 284 },
        { name: 'Porta di Roma', population: 75 },
        { name: 'Rome', population: 204 },
      ],
      latitude: 41.9028, // Rome
      longitude: 12.4964
    },
    {
      id: 'LU',
      name: 'Luxembourg',
      cantons: [
        { name: 'Trois Frontières', population: 162 },
      ],
      latitude: 49.8153, // Luxembourg-Ville
      longitude: 6.1296
    },
    {
      id: 'NL',
      name: 'Netherlands',
      cantons: [
        { name: 'Hollande', population: 64 },
      ],
      latitude: 52.3676, // Amsterdam
      longitude: 4.9041
    },
    {
      id: 'CH',
      name: 'Switzerland',
      cantons: [
        { name: 'Mahol ma Suisse', population: 211 },
        { name: 'Mane ma Suisse', population: 120 },
      ],
      latitude: 46.8182, // Centre approximatif de la Suisse
      longitude: 8.2275
    },
    {
      id: 'US',
      name: 'United States',
      cantons: [
        { name: 'USA Mère', population: 182 },
        { name: 'Libak li America', population: 239 },
        { name: 'Liyomba li America', population: 81 },
        { name: 'Massoda ma America', population: 40 },
        { name: 'Minkwel mi America', population: 118 },
      ],
      latitude: 39.8283, // Centre géographique des États-Unis contigus
      longitude: -98.5795
    },
    {
      id: 'JP',
      name: 'Japan',
      cantons: [
        { name: 'Tokyo', population: 264 },
      ],
      latitude: 35.6762, // Tokyo
      longitude: 139.6503
    }
  ];