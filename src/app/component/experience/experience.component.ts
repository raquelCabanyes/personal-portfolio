import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { IExperience } from '../../interfaces/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public experienceList: IExperience[] = [
    {
      title: 'Impulsyn',
      dates: [
        'Mayo 2024 - Actualmente',
        'Diciembre 2023 - Abril 2024',
        'Febrero 2023 - Julio 2024',
      ],
      descriptionExperience:
        'Red social del mundo del deporte con Angular Universal (Angular 14) y arquitectura en AWS. App híbrida publicada en Apple Store y Play Store desarrollada en Ionic 5 y Angular 10 con arquitectura backend en AWS. Servicios GraphQL y base de datos de grafos con tecnología Neptune (AWS). Notificaciones con OneSignal. Envío automático de emails con SES, tratamiento, optimización y almacenamiento de vídeos e imágenes en la nube con herramientas propias de AWS.',
    },
    {
      title: 'Seidor',
      dates: ['Marzo 2024 - Mayo 2024'],
      descriptionExperience:
        'Actualización tecnológica de app hibrida de Ionic 3 y Angular 6 a Ionic 6 y angular 12. Modificación y migración de la estructura del proyecto y actualización de componentes.',
    },
    {
      title: 'Yeeply',
      dates: ['Agosto 2023 - Noviembre 2024'],
      descriptionExperience:
        'Proyecto web con Angular 12 y PrimeNg. Modificación, desarrollo e implementación de componentes y graficas con chartJS.',
    },
    {
      title: 'BBVA',
      dates: ['Julio 2018 - Enero 2021'],
      descriptionExperience:
        'Desarrollador de Frontend realizando componentes en proyecto Agent para BBVA Empresas, para la visualización de movimientos de empresasrelacionados con prestamos. Las tecnologías utilizadas son Polymer (cells), HTML5, CSS3, Javascript ES6, GIT para el control de versiones. Maquetación, modificación y creación de componentes primeramente con Polymer y posteriormente con Lit-Element implementándolo en distintos implementación de Adobe analytics, modificando estudios existentes y realizando nuevos estudios. Analítica web mediante la realización de software para la extracción de información concreta para determinar el comportamiento y uso de los clientes dentro de las distintas operativas web. Tecnologías utilizadas: React, Vue, Ionic, Cordova, Capacitor, AWS, Polymer, LitElement, Google Analytics y Adobe analytics.',
    },
    {
      title: 'MYMOID',
      dates: ['Marzo 2018 - Junio 2018'],
      descriptionExperience:
        'Maquetación, modificación y creación de componentes ReactJS, para desarrollo web de una pasarela de pagos.',
    },
  ];
}
