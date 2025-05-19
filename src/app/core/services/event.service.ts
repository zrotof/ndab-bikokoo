import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/events';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private http = inject(HttpClient);

  private baseUrlPlanner = environment.baseUrl + "planners/";
  
  defaultEvents: Event[] = [
    {
      id: 1,
      coverImage: 'img/about/team/1.jpeg',
      title:
        "Assemblée Générale annuelle des membres Bassa'a en Italie – Un avenir solidaire pour la diaspora",
      date: '15 mai 2025',
      hour: '18:00',
      eventTypeName: 'Assemblée Générale',
      isArticleAssociated: true,
      hasVideo: true,
      videoLink: 'https://example.com/video',
      content:
        "Cette Assemblée Générale est un moment clé pour rassembler tous les membres de la diaspora Bassa'a en Italie. Nous aborderons les enjeux actuels, les défis rencontrés par notre communauté, ainsi que les stratégies et actions à mettre en place pour renforcer notre solidarité. Les discussions porteront sur l’entraide, l’accompagnement social, et les projets de développement pour mieux structurer notre réseau. C’est une occasion unique d’échanger, de proposer des solutions et de renforcer nos liens fraternels à travers un engagement collectif et structuré.",
      description:
        "Cet événement est crucial pour l’ensemble des membres de la diaspora Bassa'a vivant en Italie. Nous ferons un point détaillé sur l’état actuel de notre communauté, les défis rencontrés et les moyens d’améliorer notre engagement collectif. Ce sera aussi l’occasion de présenter les nouvelles initiatives mises en place, d’annoncer les projets à venir et de discuter des stratégies pour optimiser notre réseau d’entraide. Chaque membre pourra exprimer ses idées et contribuer activement aux décisions prises. La réunion se clôturera par un moment convivial favorisant les échanges et la fraternité.",
    },
    {
      id: 2,
      coverImage: 'img/events/56b17e74-7cef-4caf-b09f-904474c455fa (1).jpeg',
      title:
        "Réunion stratégique de l'Assemblée Générale Bassa'a en France – Soutien et projets communautaires",
      date: '10 juin 2025',
      hour: '19:00',
      eventTypeName: 'Assemblée Générale',
      isArticleAssociated: true,
      hasVideo: false,
      content:
        "Cette réunion stratégique réunira les membres actifs de la diaspora Bassa'a en France pour une réflexion approfondie sur les actions communautaires. Nous discuterons de la mise en place d’un fonds de solidarité pour venir en aide aux familles en difficulté, de la création de partenariats avec des associations locales et du renforcement des liens intergénérationnels. Ce moment d’échange sera aussi l’occasion de faire un bilan sur les actions passées et de poser les bases pour de nouvelles initiatives porteuses d’espoir et d’unité.",
      description:
        "Ce rendez-vous incontournable permettra aux membres de la diaspora Bassa'a en France de structurer leurs efforts pour assurer un meilleur soutien à notre communauté. Nous analyserons les actions précédentes, identifierons les améliorations possibles et mettrons en place des stratégies pour accroître notre impact. L’accent sera mis sur l’accompagnement des familles en difficulté, la formation professionnelle, l’entraide intergénérationnelle et la transmission de notre culture. Une session de brainstorming collectif permettra d’échanger sur des solutions innovantes pour améliorer l’organisation de nos initiatives et garantir leur succès à long terme.",
    },
    {
      id: 3,
      coverImage: 'img/events/a5d72ed8-3de9-4939-af78-5f6d10a2e206.jpeg',
      title:
        'Journée de solidarité et levée de fonds pour les familles en difficulté',
      date: '20 juillet 2025',
      hour: '14:00',
      eventTypeName: 'Événement Caritatif',
      isArticleAssociated: true,
      hasVideo: true,
      videoLink: 'https://example.com/video3',
      content:
        'Dans un esprit de fraternité et de soutien mutuel, cette journée spéciale sera consacrée à la collecte de fonds et de dons matériels pour venir en aide aux membres les plus vulnérables de notre diaspora. Au programme : des animations culturelles, des ventes solidaires, des témoignages et des appels aux dons pour assurer un soutien durable. Chaque contribution, qu’elle soit financière ou matérielle, aidera à alléger le fardeau de ceux qui traversent des moments difficiles. Ensemble, nous pouvons faire une réelle différence.',
      description:
        'Cette journée de solidarité est l’occasion parfaite pour renforcer notre engagement en faveur des familles les plus touchées par des difficultés financières ou sociales. En plus des levées de fonds et des collectes de dons, nous organiserons des conférences et des témoignages inspirants pour sensibiliser aux réalités de notre communauté. Des stands d’information seront mis en place pour orienter les bénéficiaires vers les dispositifs d’aide existants. La journée sera ponctuée par des spectacles culturels et des activités ludiques destinées à sensibiliser petits et grands à la nécessité d’unir nos forces pour un avenir meilleur.',
    },
    {
      id: 4,
      coverImage: 'img/events/d247de31-fe52-428a-be6a-28552cc3e521.jpeg',
      title:
        "Forum des jeunes Bassa'a – Entrepreneuriat et leadership dans la diaspora",
      date: '5 septembre 2025',
      hour: '10:00',
      eventTypeName: 'Conférence',
      isArticleAssociated: true,
      hasVideo: false,
      content:
        "Ce forum est une opportunité exceptionnelle pour les jeunes Bassa'a désireux de s’investir dans l’entrepreneuriat et le leadership communautaire. À travers des ateliers interactifs, des conférences animées par des experts et des échanges avec des entrepreneurs issus de la diaspora, les participants pourront développer leurs compétences, élargir leur réseau et découvrir des opportunités pour créer de la valeur au sein de la communauté.",
      description:
        'En mettant l’accent sur le développement des compétences entrepreneuriales et le leadership, ce forum offrira aux jeunes de la diaspora un cadre propice à l’épanouissement personnel et professionnel. Nous explorerons les différentes étapes de la création d’entreprise, les opportunités d’investissement et les moyens de mobiliser les ressources nécessaires pour réussir. Un espace de networking permettra aux participants de rencontrer des professionnels aguerris et d’échanger avec des mentors prêts à les accompagner dans leurs ambitions. Nous aborderons également la responsabilité sociale et l’engagement communautaire comme piliers d’une réussite durable et solidaire.',
    },
    {
      id: 5,
      coverImage: 'img/events/6b59a5c3-ee2a-4f92-b035-7ff4db59afcd.jpeg',
      title: 'Célébration culturelle Bassa’a – Traditions et Héritage',
      date: '18 décembre 2025',
      hour: '17:00',
      eventTypeName: 'Festival Culturel',
      isArticleAssociated: false,
      hasVideo: true,
      videoLink: 'https://example.com/video5',
      content:
        'Plongez dans la richesse et la beauté de la culture Bassa’a à travers un festival unique qui met en avant nos traditions ancestrales. Les participants auront l’occasion d’assister à des spectacles de danse et de musique traditionnelle, de déguster des plats typiques et d’échanger avec des aînés sur l’importance de préserver notre héritage. C’est une célébration qui unit toutes les générations dans une ambiance festive et authentique.',
      description:
        'Ce festival est bien plus qu’un simple événement culturel ; il représente un véritable hommage à l’histoire et aux valeurs du peuple Bassa’a. À travers des expositions, des conférences et des performances artistiques, nous mettrons en lumière la transmission des savoirs ancestraux et leur importance dans la préservation de notre identité. Nous inviterons des conteurs, des historiens et des artisans pour partager leur expertise et sensibiliser la nouvelle génération aux richesses de notre patrimoine. Cette journée sera marquée par un grand banquet traditionnel où chacun pourra goûter aux saveurs uniques de notre gastronomie locale.',
    },
  ];



  getEventList(): Observable<any[]> {
    return of(this.defaultEvents);
  }
  getEventById(id: number): Observable<any> {
    const event = this.defaultEvents.find((event) => event.id === +id);
    return of(event); // Simule une requête HTTP
  }
}
