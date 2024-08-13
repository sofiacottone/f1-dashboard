import { defineStore } from 'pinia';
import axios from 'axios';

export const useF1Store = defineStore('f1', {
    state: () => ({

        /* apis */
        openF1Api: 'https://api.openf1.org/v1/',
        ergastApi: 'http://ergast.com/api/f1/',
        ergastApiSeason: 2024,


        drivers: [],
        sessionKeys24: [],
        driverPoints: [],
        teamPoints: [],
        teams: {
            'Red Bull Racing':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png',
                fullName: 'Oracle Red Bull Racing',
                base: 'Milton Keynes, United Kingdom',
                teamChief: 'Christian Horner',
                technicalChief: 'Pierre Waché',
                chassis: 'RB20',
                powerUnit: 'Honda RBPT',
            },
            'Mercedes':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/mercedes-logo.png',
                fullName: 'Mercedes-AMG PETRONAS F1 Team',
                base: 'Brackley, United Kingdom',
                teamChief: 'Toto Wolff',
                technicalChief: 'James Allison',
                chassis: 'W15',
                powerUnit: 'Mercedes',
            },
            'Ferrari':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/ferrari-logo.png',
                fullName: 'Scuderia Ferrari',
                base: 'Maranello, Italy',
                teamChief: 'Frédéric Vasseur',
                technicalChief: 'Enrico Gualtieri',
                chassis: 'SF-24',
                powerUnit: 'Ferrari',
            },
            'McLaren':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/mclaren-logo.png',
                fullName: 'McLaren Formula 1 Team',
                base: 'Woking, United Kingdom',
                teamChief: 'Andrea Stella',
                technicalChief: 'Neil Houldey',
                chassis: 'MCL38',
                powerUnit: 'Mercedes',
            },
            'Aston Martin':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/aston-martin-logo.png',
                fullName: 'Aston Martin Aramco F1 Team',
                base: 'Silverstone, United Kingdom',
                teamChief: 'Mike Krack',
                technicalChief: 'Dan Fallows',
                chassis: 'AMR24',
                powerUnit: 'Mercedes',
            },
            'Alpine':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/alpine-logo.png',
                fullName: 'BWT Alpine F1 Team',
                base: 'Enstone, United Kingdom',
                teamChief: 'Bruno Famin',
                technicalChief: 'David Sanchez',
                chassis: 'A524',
                powerUnit: 'Renault',
            },
            'RB':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/rb-logo.png',
                fullName: 'Visa Cash App RB Formula One Team',
                base: 'Faenza, Italy',
                teamChief: 'Laurent Mekies',
                technicalChief: 'Jody Egginton',
                chassis: 'VCARB 01',
                powerUnit: 'Honda RBPT',
            },
            'Kick Sauber':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/kick-sauber-logo.png',
                fullName: 'Stake F1 Team Kick Sauber',
                base: 'Hinwil, Switzerland',
                teamChief: 'Alessandro Alunni Bravi',
                technicalChief: 'James Key',
                chassis: 'C44',
                powerUnit: 'Ferrari',
            },
            'Haas F1 Team':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/haas-logo.png',
                fullName: 'MoneyGram Haas F1 Team',
                base: 'Kannapolis, United States',
                teamChief: 'Ayao Komatsu ',
                technicalChief: 'Andrea De Zordo',
                chassis: 'VF-24',
                powerUnit: 'Ferrari',
            },
            'Williams':
            {
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/williams-logo.png',
                fullName: 'Williams Racing',
                base: 'Grove, United Kingdom',
                teamChief: 'James Vowles',
                technicalChief: 'Pat Fry',
                chassis: 'FW46',
                powerUnit: 'Mercedes',
            },
        },
    }),

    actions: {

        /** OpenF1 -> Driver / Season 
        *
        *   
        *? GET https://api.openf1.org/v1/drivers
        * 
        ** Drivers: [
        *   {
        *        "broadcast_name": "M VERSTAPPEN",
        *       "country_code": "NED",
        *        "driver_number": 1,
        *       "first_name": "Max",
        *        "full_name": "Max VERSTAPPEN",
        *       "headshot_url": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
        *        "last_name": "Verstappen",
        *        "meeting_key": 1219,
        *        "name_acronym": "VER",
        *        "session_key": 9158,
        *        "team_colour": "3671C6",
        *        "team_name": "Red Bull Racing"
        *    }] 
        * 
        *
        *? GET https://api.openf1.org/v1/sessions
        * 
        **   Sessions: [
        *   {
        *        "circuit_key": 7,
        *        "circuit_short_name": "Spa-Francorchamps",
        *        "country_code": "BEL",
        *        "country_key": 16,
        *        "country_name": "Belgium",
        *        "date_end": "2023-07-29T15:35:00+00:00",
        *        "date_start": "2023-07-29T15:05:00+00:00",
        *        "gmt_offset": "02:00:00",
        *        "location": "Spa-Francorchamps",
        *        "meeting_key": 1216,
        *        "session_key": 9140,
        *        "session_name": "Sprint",
        *        "session_type": "Race",
        *        "year": 2023
        *   }]
        * 
        *   
        */

        async getOpenF1Drivers() {
            // check whether driver and session data are already in the localStorage
            const driversData = localStorage.getItem('driversData');
            const sessionsData = localStorage.getItem('sessionsData');

            if (driversData && sessionsData) {
                // if the data are in the localStorage, load data
                this.drivers = JSON.parse(driversData);
                this.sessionKeys24 = JSON.parse(sessionsData);
                console.log('Dati caricati dal localStorage');
                return;
            }

            try {
                // make both requests at once
                const [driversResponse, sessionsResponse, ergastData] = await Promise.all([
                    axios.get(`${this.openF1Api}drivers`),
                    axios.get(`${this.openF1Api}sessions`, {
                        params: {
                            session_type: 'Race',
                            year: '2024',
                        }
                    }),
                    this.getErgastDriverStandings()  // Ergast data call
                ]);

                // associate sessions with the state variable
                this.sessionKeys24 = sessionsResponse.data.map(session => session.session_key);
                localStorage.setItem('sessionsData', JSON.stringify(this.sessionKeys24));

                // filter drivers based on their session_key and remove duplicates based on their driver_number
                const filteredDrivers = driversResponse.data
                    .filter(driver => this.sessionKeys24.includes(driver.session_key))  // filter by session_key
                    .reduce((accumulator, driver) => {
                        // add the driver only if not already present (duplicate check)
                        if (!accumulator.some(d => d.driver_number === driver.driver_number)) {
                            accumulator.push(driver);
                        }
                        return accumulator;
                    }, []);

                // add additional details to drivers and update the state
                this.drivers = filteredDrivers.map(driver => {
                    const teamInfo = this.teams[driver.team_name] || {};

                    // search for the driver's points in the Ergast dataset
                    const ergastDriver = ergastData.find(ed => ed.Driver.familyName === driver.last_name || ed.Driver.permanentNumber === driver.driver_number.toString());

                    return {
                        ...driver,
                        carImage: teamInfo.carImage || '',
                        teamLogo: teamInfo.teamLogo || '',
                        teamDetails: {
                            fullName: teamInfo.fullName || 'N/A',
                            base: teamInfo.base || 'N/A',
                            teamChief: teamInfo.teamChief || 'N/A',
                            technicalChief: teamInfo.technicalChief || 'N/A',
                            chassis: teamInfo.chassis || 'N/A',
                            powerUnit: teamInfo.powerUnit || 'N/A',
                        },
                        points: ergastDriver ? ergastDriver.points : 0,  // add points or 0 if not found
                        position: ergastDriver ? ergastDriver.position : 'N/A'  // add position or 'N/A'
                    };
                });
                localStorage.setItem('driversData', JSON.stringify(this.drivers));

            } catch (error) {
                console.error("Errore durante il recupero dei dati:", error);
            }
        },

        /** Ergast -> Driver Stadings / Constructor Standings 
        *
        *   
        *? GET https://ergast.com/api/f1/current/driverStandings
        * 
        ** Driver Standing: [
        *   "MRData": {
        *    "xmlns": "",
        *    "series": "f1",
        *    "url": "http://api.jolpi.ca/ergast/f1/2023/driverstandings/",
        *    "limit": "30",
        *    "offset": "0",
        *    "total": "22",
        *   "StandingsTable": {
                "season": "2023",
                "round": "22",
                "StandingsLists": [
                    {
                        "season": "2023",
                        "round": "22",
                        "DriverStandings": [
                            {
                                "position": "1",
                                "positionText": "1",
                                "points": "575",
                                "wins": "19",
                                "Driver": {
                                    "driverId": "max_verstappen",
                                    "permanentNumber": "33",
                                    "code": "VER",
                                    "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                                    "givenName": "Max",
                                    "familyName": "Verstappen",
                                    "dateOfBirth": "1997-09-30",
                                    "nationality": "Dutch"
                                },
                                "Constructors": [
                                    {
                                        "constructorId": "red_bull",
                                        "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                                        "name": "Red Bull",
                                        "nationality": "Austrian"
                                    }
                                ]
                            }, 
        * 
        *
        *? GET https://ergast.com/api/f1/current/constructorStandings
        * 
        **   Constructor Standings: 
        *   {
        *        "MRData": {
        *            "xmlns": "http://ergast.com/mrd/1.5",
        *            "series": "f1",
        *            "url": "http://ergast.com/api/f1/current/constructorstandings.json",
        *            "limit": "30",
        *            "offset": "0",
        *            "total": "10",
        *            "StandingsTable": {
                        "season": "2024",
                        "StandingsLists": [
                            {
                                "season": "2024",
                                "round": "14",
                                "ConstructorStandings": [
                                    {
                                        "position": "1",
                                        "positionText": "1",
                                        "points": "408",
                                        "wins": "7",
                                        "Constructor": {
                                            "constructorId": "red_bull",
                                            "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                                            "name": "Red Bull",
                                            "nationality": "Austrian"
                                        }
                                    },
        * 
        *   this.driverPoints = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        */

        async getErgastDriverStandings() {
            try {
                const response = await axios.get(`${this.ergastApi}${this.ergastApiSeason}/driverStandings.json`);
                return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            } catch (error) {
                console.error('Failed to load data:', error.message);
                return [];
            }
        },

        showCurrentDriver(clickedIndex) {
            this.activeDriver = clickedIndex;
            this.activeInfo = this.drivers[clickedIndex];
            console.log(this.activeDriver, this.activeInfo);
        },
    }
});
