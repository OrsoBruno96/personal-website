export const it = {
  site: {
    title: "Fabio Zoratti",
    description:
      "Pagina personale di Fabio Zoratti: ricerca in informazione quantistica, amministrazione di sistemi Linux, Olimpiadi della Fisica e cybersecurity."
  },
  nav: {
    menu: "Menu",
    toggleLabel: "Apri o chiudi il menu di navigazione",
    home: "Home",
    about: "Chi sono",
    physicsOlympics: "Olimpiadi della Fisica",
    university: "Università",
    starfleet: "Starfleet",
    fibonhack: "FibonHack",
    freeTime: "Svago",
    languageLabel: "Lingua"
  },
  languageSwitcher: {
    italian: "IT",
    english: "EN"
  },
  hero: {
    phd: {
      title: "PhD candidate @SNS",
      body:
        "Mi sono laureato in Fisica Teorica nel 2020 e adesso mi occupo di Informazione Quantistica in SNS.",
      cta: "Scarica CV"
    },
    sysadmin: {
      title: "Linux SysAdmin",
      body1:
        "Collaboro part-time con la Scuola Normale Superiore come sistemista.",
      body2:
        "Perché la foto di una corsa con la bandiera del proprio collegio? Abbiamo un ambiente di lavoro a dir poco singolare, e lo adoro anche per questo.",
      cta: "Scarica CV"
    }
  },
  about: {
    title: "Chi sono.",
    paragraph1Html:
      "Ora sono un perfezionando della Scuola Normale Superiore. Mi occupo di Informazione Quantistica, lavorando per il <a href=\"https://qinfo.sns.it/\">folto gruppo</a> all'interno della Scuola Normale.",
    paragraph2:
      "Sono stato un allievo ordinario della Scuola Normale Superiore. Questo vuol dire che dispongo di una sostanziosa borsa di studio ma devo frequentare sia i corsi alla Scuola Normale Superiore, sia laurearmi all'Università di Pisa, mantenendo una media molto alta.",
    paragraph3Html:
      "Dal 2017 collaboro part-time con la Scuola, occupandomi di amministrazione e manutenzione di aule computer e server dei collegi della Scuola Normale. Il mio team è <a href=\"#starfleet\">Starfleet</a>. Nel 2020 mi sono appassionato particolarmente alla cybersecurity e sono entrato nel CTF team <a href=\"https://fibonhack.it/\">FibonHack</a>.",
    followMe: "Seguimi",
    cta: "Scarica CV",
    photoAlt: "Foto ritratto di Fabio Zoratti"
  },
  physicsOlympics: {
    title: "Olimpiadi della Fisica",
    intro1:
      "Al liceo ho partecipato alle Olimpiadi della Fisica, oltre che a quelle della Matematica e della Chimica. Per due volte ho rappresentato l'Italia alle IPhO (International Physics Olympiad), competizione mondiale fra i migliori studenti liceali del mondo in Fisica. Ho portato a casa una medaglia di bronzo nel 2014 ad Astana (Kazakhstan) e una d'argento nel 2015 in India, a Mumbai, facendo anche la miglior prestazione della squadra italiana.",
    intro2:
      "Le Olimpiadi mi hanno dato molto, quindi ho deciso in diversi modi di ritornare qualcosa a questo fantastico mondo.",
    notes: {
      title: "Dispense per le Olimpiadi",
      bodyHtml:
        "Alla fine del primo anno di Università ho iniziato a scrivere questo testo avanzato per aiutare i ragazzi a prepararsi alla fase nazionale ed internazionale delle Olimpiadi della Fisica. Potete trovare <a href=\"https://gitlab.com/OrsoBruno96/dispenseOlimpiadi\">qui</a> il repository con l'ultima versione delle dispense.<br />Quando trovate un errore, il modo migliore per segnalarlo è <a href=\"https://gitlab.com/OrsoBruno96/dispenseOlimpiadi/issues\">aprire una issue</a>, indicando in modo preciso di che cosa si tratta. Se siete davvero delle brave persone, potete contribuire al progetto <a href=\"https://gitlab.com/OrsoBruno96/dispenseOlimpiadi/merge_requests\">facendo una merge request</a>. Chiaramente potete anche segnalarmi le stesse cose per email, ma i metodi sopra elencati sono molto più efficaci."
    },
    stage: {
      title: "Stage di Fisica a Pisa",
      bodyHtml:
        "Iniziativa di mia invenzione. Ho organizzato con altri allievi della Scuola Normale una settimana di <a href=\"https://stagefisica.sns.it/\">stage avanzato per la preparazione alle Olimpiadi della Fisica</a>, sia con l'obiettivo di migliorare il livello della squadra IPhO alle competizioni internazionali, sia di dare a tutti del materiale su cui imparare argomenti complicati di Fisica anche al liceo, con pochi prerequisiti."
    },
    teamCompetition: {
      title: "Gara a squadre",
      bodyHtml:
        "Nell'anno scolastico 2022/2023, per la prima volta è stata organizzata una <a href=\"https://gas.olifis.it/\">Gara a Squadre di Fisica</a> a livello nazionale, all'interno del progetto OLIFIS ufficiale dell'AIF. Io sono stato il principale responsabile dell'iniziativa."
    }
  },
  university: {
    title: "Università",
    paragraph1:
      "Nel 2018 ho ottenuto la laurea triennale. Lo stesso anno ho partecipato a una scuola estiva a DESY, il sincrotrone tedesco nella città di Amburgo, lavorando per CMS, uno dei due esperimenti principali del CERN. Mi sono occupato di analisi dati, alla ricerca di bosoni di Higgs supersimmetrici.",
    paragraph2Html:
      "Nel 2020 ho scritto la mia <a href=\"https://gitlab.com/OrsoBruno96/tesi-magistrale/\">tesi magistrale</a>, che tratta approcci machine-learning-like su computer quantistici."
  },
  starfleet: {
    title: "Starfleet",
    intro:
      "Qui nel gruppo di sistemisti part-time alla Scuola Normale non ci basta fare solo gli incarichi che ci vengono assegnati: ci divertiamo a provare il software che sembra essere interessante al momento.",
    cards: [
      {
        title: "Architettura a microservizi",
        body:
          "I nostri servizi secondari, come web, monitoring e cron, sono stati principalmente migrati a microservizi messi sul nostro cluster Kubernetes.",
        image: "/images/kubernetes.png",
        imageAlt: "Logo di Kubernetes",
        label: "Kubernetes"
      },
      {
        title: "Controllo versione",
        body:
          "Tutto il software scritto da noi è sotto controllo versione e pesantemente integrato con GitLab.",
        image: "/images/GitLab.png",
        imageAlt: "Logo di GitLab",
        label: "GitLab"
      },
      {
        title: "Configurazione centralizzata",
        body:
          "Qualche tempo fa un nostro server ha avuto un hard-drive failure sulla root filesystem. Grazie alle nostre configurazioni centralizzate, 20 minuti dopo la sostituzione del disco la macchina era di nuovo online e operativa come prima.",
        image: "/images/Ansible.png",
        imageAlt: "Logo di Ansible",
        label: "Ansible"
      },
      {
        title: "Alta affidabilità",
        body:
          "I nostri dati e i nostri servizi sono in alta affidabilità, anche grazie ai filesystem distribuiti che utilizziamo.",
        image: "/images/glusterfs.png",
        imageAlt: "Logo di GlusterFS",
        label: "GlusterFS"
      },
      {
        title: "Monitoring",
        body:
          "Tutti i nostri servizi vengono monitorati costantemente per risolvere il prima possibile eventuali errori. Di solito è qualcuno che gioca con l'alimentazione dei nostri server.",
        image: "/images/icinga.png",
        imageAlt: "Logo di Icinga 2",
        label: "Icinga 2"
      },
      {
        title: "Raccolta log",
        body:
          "L'unico modo per sopravvivere in una valanga di log è centralizzarli, e anche noi abbiamo il nostro motore di ricerca per trovare la fonte degli errori.",
        image: "/images/elastic.png",
        imageAlt: "Logo di Elasticsearch",
        label: "ElasticSearch"
      }
    ]
  },
  fibonhack: {
    title: "FibonHack",
    bodyHtml:
      "Nel 2020, mentre scrivevo la mia tesi magistrale, ho partecipato a <a href=\"https://cyberchallenge.it/\">CyberChallenge</a>, il percorso italiano di formazione in cybersecurity per universitari, vincendo la finale nazionale con il team dell'Università di Pisa. Insieme ad altri studenti e istruttori abbiamo fondato il CTF team <a href=\"https://fibonhack.it/\">FibonHack</a>. Mi occupo in particolare di binary exploitation. Sono anche stato nel team organizzatore di <a href=\"https://olicyber.it/\">Olicyber 2021 e 2022</a>.",
    logoAlt: "Logo di FibonHack"
  },
  freeTime: {
    title: "Svago",
    intro:
      "In Normale lo svago non può mancare. Uno dei passatempi che ho preferito nei primi anni è sicuramente il biliardino.",
    videoTitle: "Trailer della 24h realizzato da Fabio Zoratti",
    videoCaption:
      "Un trailer della 24h da me realizzato, ridoppiando il celebre film Kung Fury."
  },
  footer: {
    designBy: "Design by"
  }
};

export type Dictionary = typeof it;
export type Locale = "it" | "en";
