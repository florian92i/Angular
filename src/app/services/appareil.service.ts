export class AppareilService {
  isAuth = false;

  onAllumer() {
    console.log('On allume tout !');
  }
  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  appareils:any = [
    {
      name: 'Machine à laver',
      status: 'éteint',
      loveIts: 0,

    },
    {
      name: 'Frigo',
      status: 'allumé',
      loveIts: 0,
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
      loveIts: 0,
    }
  ];


}
