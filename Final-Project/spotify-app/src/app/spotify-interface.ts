export interface ExternalUrls {
    spotify: string;
  }

  export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface Copyright {
    text: string;
    type: string;
  }

  export interface ExternalIds {
    upc: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface Track {
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface Tracks {
    href: string;
    items: Track[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
  }

  export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIds;
    external_urls: ExternalUrls2;
    genres: any[];
    href: string;
    id: string;
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    tracks: Tracks;
    type: string;
    uri: string;
  }

  export interface Followers {
    href:string;
    number:number;
  }

  export interface Profile {
   // birthdate:string;
    country:string;
    display_name:string;
    email:string;
    external_urls:ExternalUrls2;
    followers:Followers;
    images:Image[];
    product:string;
    type:string;
    uri:string;
  }

/*   {"birthdate":"1937-06-01","country":"SE","display_name":"JM Wizzler","email":"email@example.com",
  "external_urls":{"spotify":"https://open.spotify.com/user/wizzler"},"followers":{"href":null,"total":3829},
  "href":"https://api.spotify.com/v1/users/wizzler","id":"wizzler",
  "images":[{"height":null,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg","width":null}],
  "product":"premium","type":"user","uri":"spotify:user:wizzler"} */