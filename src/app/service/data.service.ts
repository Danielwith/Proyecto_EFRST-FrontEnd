import { Injectable } from '@angular/core';
import { Campaign } from '../model/campaign.model';
import { Pet } from '../model/pet.model';
import { Faq } from '../model/faq.model';
import { DonationStory, Donor } from '../model/donation.model';
import { Code } from '../model/code.model';
import { Compatibility } from '../model/compatibility.model';
import { Sponsor } from '../model/sponsor.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getPet() {
    const PET_DATA: Pet[] = [
      {
        id: 1,
        pet_name: 'Buddy',
        pet_description:
          'Buddy es un perro muy amigable y juguetón. Tiene dos años de edad y es conocido por su vitalidad y alegría contagiosa. A Buddy le encanta interactuar con las personas y disfrutar de juegos activos al aire libre. Con un peso de 15 kg y un tamaño de 30 cm, es el compañero perfecto para aquellos que buscan una mascota activa y cariñosa. Su energía inagotable y su personalidad juguetona lo convierten en una opción ideal para hogares activos y amantes de los animales.',
        pet_species: 'Perro',
        pet_age: 2,
        pet_weight: 15,
        pet_size: 30,
        pet_image: './assets/img/pet/buddy.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Energético',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'Sí',
      },
      {
        id: 2,
        pet_name: 'Whiskers',
        pet_description:
          'Whiskers es un gato mimoso y curioso con tan solo un año de edad. Aunque ya ha sido adoptado, queremos compartir su historia. Whiskers solía ser el gatito más juguetón y adorable. Su curiosidad y afecto lo hacen único. Con un peso de 10 kg y un tamaño de 25 cm, Whiskers es el compañero perfecto para aquellos que buscan un gato cariñoso que disfrute de largas siestas al sol y sesiones interminables de juego.',
        pet_species: 'Gato',
        pet_age: 1,
        pet_weight: 10,
        pet_size: 25,
        pet_image: './assets/img/pet/whiskers.jpg',
        pet_status: 'Adoptado',
        pet_personality: 'Juguetón',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
      {
        id: 3,
        pet_name: 'Rocky',
        pet_description:
          'Rocky es un perro leal y protector de tres años de edad. Su lealtad inquebrantable lo convierte en un gran compañero. Con un peso de 20 kg y un tamaño de 35 cm, Rocky es ideal para aquellos que buscan un perro valiente y protector. Su presencia reconfortante y su valentía hacen de Rocky la elección perfecta para hogares que valoran la seguridad y la compañía fiel.',
        pet_species: 'Perro',
        pet_age: 3,
        pet_weight: 20,
        pet_size: 35,
        pet_image: './assets/img/pet/rocky.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Valiente',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'No',
      },
      {
        id: 4,
        pet_name: 'Sassy',
        pet_description:
          'Sassy es una gata independiente y atrevida de dos años. Su espíritu independiente la hace única. Con un peso de 8 kg y un tamaño de 22 cm, Sassy es perfecta para aquellos que buscan una compañera felina con una personalidad fuerte y atrevida. Aunque disfruta de su independencia, Sassy también puede ser cariñosa cuando lo desea.',
        pet_species: 'Gato',
        pet_age: 2,
        pet_weight: 8,
        pet_size: 22,
        pet_image: './assets/img/pet/sassy.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Atrevido',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'Sí',
      },
      {
        id: 5,
        pet_name: 'Max',
        pet_description:
          'Max es un perro juguetón y afectuoso de un año. Aunque ya ha sido adoptado, su espíritu juguetón es digno de ser compartido. Max es conocido por su amor incondicional y su energía positiva. Con un peso de 12 kg y un tamaño de 28 cm, Max es el compañero ideal para hogares que buscan una mascota amigable y llena de alegría.',
        pet_species: 'Perro',
        pet_age: 1,
        pet_weight: 12,
        pet_size: 28,
        pet_image: './assets/img/pet/max.jpg',
        pet_status: 'Adoptado',
        pet_personality: 'Amigable',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'Sí',
      },
      {
        id: 6,
        pet_name: 'Luna',
        pet_description:
          'Luna es una gata gentil y elegante de cuatro años. Su elegancia y encanto la hacen destacar. Con un peso de 9 kg y un tamaño de 20 cm, Luna es la compañera perfecta para aquellos que buscan una gata distinguida y amable. Su suavidad y gracia hacen de Luna una adición maravillosa a cualquier hogar.',
        pet_species: 'Gato',
        pet_age: 4,
        pet_weight: 9,
        pet_size: 20,
        pet_image: './assets/img/pet/luna.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Elegante',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
      {
        id: 7,
        pet_name: 'Rusty',
        pet_description:
          'Rusty es un perro aventurero y curioso de dos años. Su espíritu aventurero lo hace perfecto para aquellos que aman explorar. Con un peso de 18 kg y un tamaño de 32 cm, Rusty es ideal para hogares activos que disfrutan de actividades al aire libre. Su curiosidad y energía hacen de Rusty un compañero emocionante.',
        pet_species: 'Perro',
        pet_age: 2,
        pet_weight: 18,
        pet_size: 32,
        pet_image: './assets/img/pet/rusty.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Curioso',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'No',
      },
      {
        id: 8,
        pet_name: 'Mittens',
        pet_description:
          'Mittens es una gata dulce y gentil de tres años. Su ternura y afecto la convierten en una compañera amorosa. Con un peso de 11 kg y un tamaño de 26 cm, Mittens es ideal para aquellos que buscan una gata cariñosa y amigable. Su suavidad y personalidad afable hacen de Mittens una adición encantadora a cualquier hogar.',
        pet_species: 'Gato',
        pet_age: 3,
        pet_weight: 11,
        pet_size: 26,
        pet_image: './assets/img/pet/mittens.jpg',
        pet_status: 'Adoptado',
        pet_personality: 'Afable',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'Sí',
      },
      {
        id: 9,
        pet_name: 'Coco',
        pet_description:
          'Coco es un perro juguetón y cariñoso de un año. Su energía positiva y afecto lo hacen especial. Con un peso de 14 kg y un tamaño de 29 cm, Coco es perfecto para hogares que buscan una mascota cariñosa y activa. Su alegría y disposición juguetona hacen de Coco un compañero inigualable.',
        pet_species: 'Perro',
        pet_age: 1,
        pet_weight: 14,
        pet_size: 29,
        pet_image: './assets/img/pet/coco.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Cariñoso',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'Sí',
      },
      {
        id: 10,
        pet_name: 'Shadow',
        pet_description:
          'Shadow es un gato misterioso y elegante de dos años. Su misterio y gracia lo hacen fascinante. Con un peso de 10 kg y un tamaño de 24 cm, Shadow es la elección perfecta para aquellos que buscan una compañía felina distinguida y enigmática. Su elegancia y personalidad misteriosa hacen de Shadow un compañero único.',
        pet_species: 'Gato',
        pet_age: 2,
        pet_weight: 10,
        pet_size: 24,
        pet_image: './assets/img/pet/shadow.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Misterioso',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
      {
        id: 11,
        pet_name: 'Charlie',
        pet_description:
          'Charlie es un gato tranquilo y relajado de dos años. Su calma y serenidad lo convierten en un compañero perfecto para aquellos que buscan un amigo felino relajado. Con un peso de 12 kg y un tamaño de 25 cm, Charlie es ideal para hogares que valoran la tranquilidad y la armonía. Su naturaleza relajada hace que sea un placer tenerlo como parte de la familia.',
        pet_species: 'Gato',
        pet_age: 2,
        pet_weight: 12,
        pet_size: 25,
        pet_image: './assets/img/pet/charlie.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Relajado',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'No',
      },
      {
        id: 12,
        pet_name: 'Daisy',
        pet_description:
          'Daisy es una perrita energética y cariñosa de un año. Su vitalidad y amor desbordante la hacen única. Con un peso de 10 kg y un tamaño de 22 cm, Daisy es la compañera perfecta para aquellos que buscan una mascota activa y afectuosa. Su alegría y disposición juguetona la convierten en una adición maravillosa a cualquier hogar.',
        pet_species: 'Perro',
        pet_age: 1,
        pet_weight: 10,
        pet_size: 22,
        pet_image: './assets/img/pet/daisy.jpg',
        pet_status: 'Adoptado',
        pet_personality: 'Juguetona',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'Sí',
      },
      {
        id: 13,
        pet_name: 'Oliver',
        pet_description:
          'Oliver es un gato curioso y travieso de tres años. Su espíritu juguetón y su curiosidad lo hacen fascinante. Con un peso de 14 kg y un tamaño de 28 cm, Oliver es ideal para hogares que disfrutan de la compañía de un gato activo y travieso. Su encanto y travesuras lo convierten en un miembro adorable de la familia.',
        pet_species: 'Gato',
        pet_age: 3,
        pet_weight: 14,
        pet_size: 28,
        pet_image: './assets/img/pet/oliver.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Travieso',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'No',
      },
      {
        id: 14,
        pet_name: 'Milo',
        pet_description:
          'Milo es un perro leal y afectuoso de dos años. Su devoción y cariño lo hacen especial. Con un peso de 18 kg y un tamaño de 32 cm, Milo es perfecto para hogares que buscan una mascota amorosa y fiel. Su afectuosidad y energía positiva lo convierten en un compañero inigualable.',
        pet_species: 'Perro',
        pet_age: 2,
        pet_weight: 18,
        pet_size: 32,
        pet_image: './assets/img/pet/milo.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Afectuoso',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
      {
        id: 15,
        pet_name: 'Chloe',
        pet_description:
          'Chloe es una gata independiente y dulce de un año. Su independencia y ternura la hacen única. Con un peso de 9 kg y un tamaño de 20 cm, Chloe es la compañera perfecta para aquellos que valoran la independencia pero buscan también el cariño de una gata dulce. Su naturaleza equilibrada la convierte en una adición encantadora a cualquier hogar.',
        pet_species: 'Gato',
        pet_age: 1,
        pet_weight: 9,
        pet_size: 20,
        pet_image: './assets/img/pet/chloe.jpg',
        pet_status: 'Adoptado',
        pet_personality: 'Dulce',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'Sí',
      },
      {
        id: 16,
        pet_name: 'Teddy',
        pet_description:
          'Teddy es un perro inteligente y juguetón de un año. Su inteligencia y vitalidad lo hacen destacar. Con un peso de 15 kg y un tamaño de 30 cm, Teddy es ideal para hogares que buscan un compañero enérgico y astuto. Su disposición juguetona y curiosa lo convierten en un amigo leal.',
        pet_species: 'Perro',
        pet_age: 1,
        pet_weight: 15,
        pet_size: 30,
        pet_image: './assets/img/pet/teddy.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Inteligente',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
      {
        id: 17,
        pet_name: 'Lola',
        pet_description:
          'Lola es una gata sociable y cariñosa de cuatro años. Su naturaleza sociable y su cariño la hacen encantadora. Con un peso de 11 kg y un tamaño de 26 cm, Lola es la compañera perfecta para aquellos que buscan una gata afectuosa y amigable. Su sociabilidad y amor la convierten en una adición alegre a cualquier hogar.',
        pet_species: 'Gato',
        pet_age: 4,
        pet_weight: 11,
        pet_size: 26,
        pet_image: './assets/img/pet/lola.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Sociable',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'Sí',
      },
      {
        id: 18,
        pet_name: 'Maximus',
        pet_description:
          'Maximus es un perro fuerte y valiente de tres años. Su fortaleza y coraje lo hacen destacar. Con un peso de 20 kg y un tamaño de 35 cm, Maximus es ideal para hogares que buscan un compañero robusto y valiente. Su lealtad y energía positiva lo convierten en un protector devoto.',
        pet_species: 'Perro',
        pet_age: 3,
        pet_weight: 20,
        pet_size: 35,
        pet_image: './assets/img/pet/maximus.jpg',
        pet_status: 'Adoptado',
        pet_personality: 'Valiente',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
      {
        id: 19,
        pet_name: 'Mia',
        pet_description:
          'Mia es una gata juguetona y amigable de dos años. Su naturaleza juguetona y su amigabilidad la hacen irresistible. Con un peso de 10 kg y un tamaño de 24 cm, Mia es la compañera perfecta para aquellos que buscan una gata alegre y amigable. Su energía positiva y disposición amistosa la convierten en una amiga leal.',
        pet_species: 'Gato',
        pet_age: 2,
        pet_weight: 10,
        pet_size: 24,
        pet_image: './assets/img/pet/mia.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Amigable',
        pet_ubication: 'Refugio ABC',
        pet_sterilized: 'Sí',
      },
      {
        id: 20,
        pet_name: 'Rocco',
        pet_description:
          'Rocco es un perro energético y divertido de un año. Su energía positiva y su alegría contagiosa lo hacen especial. Con un peso de 14 kg y un tamaño de 29 cm, Rocco es perfecto para hogares que buscan una mascota divertida y llena de vida. Su disposición juguetona lo convierte en un compañero animado.',
        pet_species: 'Perro',
        pet_age: 1,
        pet_weight: 14,
        pet_size: 29,
        pet_image: './assets/img/pet/rocco.jpg',
        pet_status: 'Disponible',
        pet_personality: 'Divertido',
        pet_ubication: 'Refugio XYZ',
        pet_sterilized: 'No',
      },
    ];
    return PET_DATA;
  }

  getCampaign() {
    const CAMPAIGN_DATA: Campaign[] = [
      {
        campaign_year: 2022,
        campaign_carrousel: [
          {
            id: 5,
            campaign_name: 'Campaña de Adopción de Primavera',
            campaign_date: new Date('2022-04-10'),
            campaign_description:
              'Celebra la llegada de la primavera adoptando a una nueva mascota. ¡Encuentra a tu compañero peludo!',
            campaign_active: false,
          },
          {
            id: 6,
            campaign_name: 'Campaña de Rescate de Animales Abandonados',
            campaign_date: new Date('2022-08-15'),
            campaign_description:
              'Ayuda a rescatar a animales abandonados y dales una segunda oportunidad en la vida.',
            campaign_active: false,
          },
          {
            id: 7,
            campaign_name: 'Campaña de Adopción de Verano',
            campaign_date: new Date('2022-06-20'),
            campaign_description:
              'Únete a nuestra campaña de adopción de verano y brinda un hogar a un amigo de cuatro patas.',
            campaign_active: false,
          },
        ],
      },
      {
        campaign_year: 2023,
        campaign_carrousel: [
          {
            id: 1,
            campaign_name: 'Campaña de Adopción de Verano',
            campaign_date: new Date('2023-06-15'),
            campaign_description:
              '¡Acompáñanos en nuestra campaña de adopción de verano y da un hogar a un amigo peludo!',
            campaign_active: false,
          },
          {
            id: 2,
            campaign_name: 'Campaña de Rescate de Invierno',
            campaign_date: new Date('2023-12-10'),
            campaign_description:
              'Ayúdanos a rescatar a animales necesitados durante el frío invierno. ¡Tu apoyo es esencial!',
            campaign_active: true,
          },
          {
            id: 3,
            campaign_name: 'Campaña de Cuidado de Mascotas Mayores',
            campaign_date: new Date('2023-08-20'),
            campaign_description:
              'Dediquemos nuestro amor y cuidado a las mascotas mayores. ¡Únete a nuestra campaña!',
            campaign_active: false,
          },

          {
            id: 4,
            campaign_name: 'Campaña de Adopción Especial',
            campaign_date: new Date('2023-09-25'),
            campaign_description:
              'Descubre a nuestras mascotas especiales que necesitan un hogar lleno de amor y atención.',
            campaign_active: false,
          },
        ],
      },
    ];

    return CAMPAIGN_DATA;
  }

  getFAQ() {
    const FAQ_DATA: Faq[] = [
      {
        type_faq: 'Adopción',
        question_faq: '¿Cómo puedo adoptar un animal de StayFriends?',
        answer_faq:
          'Puedes visitar nuestro centro de adopción o revisar nuestras mascotas en línea. Luego, sigue el proceso de adopción que incluye llenar un formulario y cumplir con ciertos requisitos.',
      },
      {
        type_faq: 'Donaciones',
        question_faq:
          '¿Cómo puedo hacer una donación para apoyar a StayFriends?',
        answer_faq:
          'Agradecemos tu interés en apoyarnos. Puedes hacer una donación en línea a través de nuestro sitio web o visitar nuestras instalaciones para contribuir con alimentos, juguetes o suministros necesarios para nuestros animales.',
      },
      {
        type_faq: 'Voluntariado',
        question_faq: '¿Cómo puedo ser voluntario en StayFriends?',
        answer_faq:
          '¡Nos encantaría tener tu ayuda! Puedes registrarte como voluntario en nuestro sitio web o comunicarte con nosotros directamente. Hay diversas oportunidades de voluntariado, desde cuidado directo de animales hasta actividades administrativas.',
      },
      {
        type_faq: 'Estado de Adopción',
        question_faq:
          '¿Cómo puedo conocer el estado de una solicitud de adopción?',
        answer_faq:
          'Te mantendremos informado sobre el estado de tu solicitud. Puedes comunicarte con nuestro equipo de adopciones para obtener actualizaciones y conocer el proceso actual de tu solicitud.',
      },
      {
        type_faq: 'Requisitos de Adopción',
        question_faq:
          '¿Cuáles son los requisitos para adoptar un animal de StayFriends?',
        answer_faq:
          'Los requisitos pueden variar, pero generalmente incluyen una revisión del formulario de adopción, una entrevista y la garantía de que proporcionarás un hogar amoroso y seguro para el animal. Infórmate más específicamente en nuestra sección de adopciones.',
      },
      {
        type_faq: 'Contacto',
        question_faq: '¿Cómo puedo ponerme en contacto con StayFriends?',
        answer_faq:
          'Puedes contactarnos a través de nuestro formulario en línea en la sección de contacto de nuestro sitio web. También estamos disponibles por teléfono durante horas laborables. ¡Esperamos escucharte pronto!',
      },
    ];

    return FAQ_DATA;
  }

  getDonationStories() {
    const DONATION_DATA: DonationStory[] = [
      {
        story_date: new Date('2023-02-15'),
        story_title: 'Transformando Vidas: El Rescate de Luna',
        story_info:
          'Gracias a las generosas donaciones, pudimos rescatar a Luna, una perrita abandonada. Después de cuidados y rehabilitación, Luna ahora disfruta de un hogar amoroso y está llena de vida. Tu contribución hace posible cambiar vidas como la de Luna.',
      },
      {
        story_date: new Date('2023-03-22'),
        story_title: 'Construyendo Refugios Seguros',
        story_info:
          'Las donaciones han permitido mejorar nuestras instalaciones para brindar refugio y comodidad a más animales necesitados. Con tu apoyo continuo, podemos seguir construyendo refugios seguros y sostenibles para aquellos que no tienen voz.',
      },
      {
        story_date: new Date('2023-04-18'),
        story_title: 'Cuidado Médico para Rescates Urgentes',
        story_info:
          'Tu donación contribuye directamente al cuidado médico urgente que necesitan muchos de nuestros rescates. Desde tratamientos veterinarios hasta cirugías, cada contribución ayuda a garantizar que todos los animales reciban la atención que merecen.',
      },
      {
        story_date: new Date('2023-05-10'),
        story_title: 'Promoviendo la Adopción Responsable',
        story_info:
          'StayFriends no solo rescata, sino que también fomenta la adopción responsable. Gracias a las donaciones, podemos llevar a cabo campañas educativas y eventos de adopción para encontrar hogares amorosos y permanentes para nuestros animales rescatados.',
      },
    ];

    return DONATION_DATA;
  }

  getDonors() {
    const DONOR_DATA: Donor[] = [
      {
        donor_name: 'Ana García',
        donor_reason:
          'Contribuir al cuidado médico y encontrar hogares amorosos para animales necesitados.',
      },
      {
        donor_name: 'Carlos Martínez',
        donor_reason:
          'Impactado por la historia de Luna, quiero ser parte del cambio positivo para más animales.',
      },
      {
        donor_name: 'Isabel Rodríguez',
        donor_reason:
          'Apoyar la construcción de refugios seguros y promover la adopción responsable.',
      },
      {
        donor_name: 'Miguel Sánchez',
        donor_reason:
          'Admiro la rehabilitación de animales por StayFriends y quiero ser parte de ese impacto positivo.',
      },
      {
        donor_name: 'Laura Díaz',
        donor_reason:
          'Inspirada por la dedicación de StayFriends en el rescate, mi donación es un pequeño aporte para una gran diferencia.',
      },
      {
        donor_name: 'Juan López',
        donor_reason:
          'Cada animal merece amor. Mi donación es para garantizar que más animales tengan la oportunidad de vivir plenamente.',
      },
      {
        donor_name: 'María Fernández',
        donor_reason:
          'Como amante de los animales, estoy comprometida con organizaciones que mejoran sus vidas.',
      },
      {
        donor_name: 'Pedro Ramírez',
        donor_reason:
          'Cada contribución cuenta. Mi donación respalda los esfuerzos de StayFriends en el rescate y cuidado de animales.',
      },
    ];

    return DONOR_DATA;
  }

  getAppCompatibility() {
    const COMPATIBILITY_DATA: Compatibility[] = [
      {
        app_step: 1,
        app_test: {
          test_question: '¿Con qué frecuencia te gustaría pasear a tu mascota?',
          test_answers: [
            'Diariamente',
            'Varias veces a la semana',
            'Ocasionalmente',
            'No estoy interesado en pasear',
          ],
        },
      },
      {
        app_step: 2,
        app_test: {
          test_question:
            '¿Cuánto tiempo estás dispuesto a dedicar al cuidado diario de tu mascota?',
          test_answers: [
            'Más de una hora',
            '30 minutos a una hora',
            'Menos de 30 minutos',
            'No estoy seguro',
          ],
        },
      },
      {
        app_step: 3,
        app_test: {
          test_question: '¿Cómo describirías tu nivel de actividad física?',
          test_answers: [
            'Muy activo',
            'Moderadamente activo',
            'Poco activo',
            'Sedentario',
          ],
        },
      },
      {
        app_step: 4,
        app_test: {
          test_question:
            '¿Cuánto espacio tienes disponible para una mascota en tu hogar?',
          test_answers: [
            'Casa con patio grande',
            'Casa con patio pequeño',
            'Apartamento con espacio limitado',
            'No tengo mucho espacio',
          ],
        },
      },
      {
        app_step: 5,
        app_test: {
          test_question:
            '¿Qué tan importante es para ti la interacción social de una mascota?',
          test_answers: [
            'Muy importante, quiero una mascota sociable',
            'Importante, pero no es lo primordial',
            'No es muy importante',
            'Prefiero una mascota independiente',
          ],
        },
      },
    ];

    return COMPATIBILITY_DATA;
  }

  getFavourites() {
    const FAVOURITE_DATA = this.getPet().filter((pet) =>
      [7, 8, 9, 10, 11, 17, 18].includes(pet.id)
    );
    return FAVOURITE_DATA;
  }

  getCodes() {
    const today = new Date();
    const CODE_DATA: Code[] = [
      {
        code_date: new Date(today.setDate(today.getDate() + 2)),
        code: 'AB3C89',
        code_status: 'Valido',
        pet_id: 8,
      },
      {
        code_date: new Date(today.setDate(today.getDate() - 2)),
        code: 'P2Q9X5',
        code_status: 'Invalido',
        pet_id: 15,
      },
      {
        code_date: new Date(today.setDate(today.getDate() + 3)),
        code: 'K5R1G7',
        code_status: 'Valido',
        pet_id: 1,
      },
      {
        code_date: new Date(today.setDate(today.getDate() - 5)),
        code: 'V8F2D4',
        code_status: 'Invalido',
        pet_id: 9,
      },
      {
        code_date: new Date(today.setDate(today.getDate() + 2)),
        code: 'M9L6Z3',
        code_status: 'Valido',
        pet_id: 4,
      },
      {
        code_date: new Date(today.setDate(today.getDate() - 1)),
        code: 'T4S7N1',
        code_status: 'Invalido',
        pet_id: 16,
      },
    ];

    return CODE_DATA;
  }

  getSponsors() {
    const SPONSOR_DATA: Sponsor[] = [
      {
        sponsor_name: 'PetCo',
        sponsor_image: './assets/img/sponsor/petco_logo.png',
      },
      {
        sponsor_name: 'Purina',
        sponsor_image: './assets/img/sponsor/purina_logo.png',
      },
      {
        sponsor_name: 'VetClinic',
        sponsor_image: './assets/img/sponsor/vetclinic_logo.jpg',
      },
      {
        sponsor_name: 'AnimalCare Foundation',
        sponsor_image: './assets/img/sponsor/animalcarefoundation_logo.jpg',
      },
      {
        sponsor_name: 'PetSmart',
        sponsor_image: './assets/img/sponsor/petsmart_logo.png',
      },
      {
        sponsor_name: 'HealthyPaws',
        sponsor_image: './assets/img/sponsor/healthypaws_logo.png',
      },
      {
        sponsor_name: 'HappyTails Resorts',
        sponsor_image: './assets/img/sponsor/happytails_logo.png',
      },
      {
        sponsor_name: 'Chewy',
        sponsor_image: './assets/img/sponsor/chewy_logo.png',
      },
      {
        sponsor_name: 'BarkBox',
        sponsor_image: './assets/img/sponsor/barkbox_logo.webp',
      },
      {
        sponsor_name: 'Royal Canin',
        sponsor_image: './assets/img/sponsor/royalcanin_logo.png',
      },
    ];
    return SPONSOR_DATA;
  }

  getPetByID(id: number) {
    const PET = this.getPet().filter((pet) => [id].includes(pet.id));
    return PET;
  }

  getPetsByIDs(ids: number[]) {
    const PET = this.getPet().filter((pet) => ids.includes(pet.id));
    return PET;
  }

  getPetPersonalities() {
    const PERSONALITIES = this.getPet().map((pet) => pet.pet_personality);
    const PERSONALITY_DATA = Array.from(new Set(PERSONALITIES));

    return PERSONALITY_DATA;
  }

  getPetsByPersonality(personality: string) {
    const PETS = this.getPet().filter((pet) =>
      [personality].includes(pet.pet_personality)
    );

    return PETS;
  }

  getPetsByName(n: string) {
    const PETS = this.getPet().filter((pet) =>
      pet.pet_name.toLowerCase().includes(n.toLowerCase())
    );
    return PETS;
  }
}
