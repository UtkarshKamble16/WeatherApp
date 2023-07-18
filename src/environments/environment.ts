interface ObjectWithWeatherApiBaseUrl {
    weatherApiBaseUrl: string;
  }

export const environment = {
    production: true,

    weatherApiBaseUrl: 'https://openweather43.p.rapidapi.com/weather',

    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'openweather43.p.rapidapi.com',

    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue:'ceb0299a19mshc1ea2944ad27449p1932dejsnbf664a959ecb',
};
