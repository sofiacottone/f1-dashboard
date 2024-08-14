import { defineStore } from 'pinia';
import axios from 'axios';

export const useF1Store = defineStore('f1', {
    state: () => ({

        /* apis */

        openF1Api: 'https://api.openf1.org/v1/',
        ergastApi: 'http://ergast.com/api/f1/',
        ergastApiSeason: 2024,


        drivers: [],

        teamInfo: [],

        sessionKeys24: [],
        teams: {
            'Red Bull Racing':
            {
                teamId: 'red_bull',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing-logo.png',
                fullName: 'Oracle Red Bull Racing',
                base: 'Milton Keynes, United Kingdom',
                teamChief: 'Christian Horner',
                technicalChief: 'Pierre Waché',
                chassis: 'RB20',
                powerUnit: 'Honda RBPT',
                colorId: 'T1',
            },
            'Mercedes':
            {
                teamId: 'mercedes',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/mercedes-logo.png',
                fullName: 'Mercedes-AMG PETRONAS F1 Team',
                base: 'Brackley, United Kingdom',
                teamChief: 'Toto Wolff',
                technicalChief: 'James Allison',
                chassis: 'W15',
                powerUnit: 'Mercedes',
                colorId: 'T2',
            },
            'Ferrari':
            {
                teamId: 'ferrari',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/ferrari-logo.png',
                fullName: 'Scuderia Ferrari',
                base: 'Maranello, Italy',
                teamChief: 'Frédéric Vasseur',
                technicalChief: 'Enrico Gualtieri',
                chassis: 'SF-24',
                powerUnit: 'Ferrari',
                colorId: 'T3',
            },
            'McLaren':
            {
                teamId: 'mclaren',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/mclaren-logo.png',
                fullName: 'McLaren Formula 1 Team',
                base: 'Woking, United Kingdom',
                teamChief: 'Andrea Stella',
                technicalChief: 'Neil Houldey',
                chassis: 'MCL38',
                powerUnit: 'Mercedes',
                colorId: 'T4',
            },
            'Aston Martin':
            {
                teamId: 'aston_martin',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/aston-martin-logo.png',
                fullName: 'Aston Martin Aramco F1 Team',
                base: 'Silverstone, United Kingdom',
                teamChief: 'Mike Krack',
                technicalChief: 'Dan Fallows',
                chassis: 'AMR24',
                powerUnit: 'Mercedes',
                colorId: 'T5',
            },
            'Alpine':
            {
                teamId: 'alpine',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/alpine-logo.png',
                fullName: 'BWT Alpine F1 Team',
                base: 'Enstone, United Kingdom',
                teamChief: 'Bruno Famin',
                technicalChief: 'David Sanchez',
                chassis: 'A524',
                powerUnit: 'Renault',
                colorId: 'T6',
            },
            'RB':
            {
                teamId: 'rb',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/rb-logo.png',
                fullName: 'Visa Cash App RB Formula One Team',
                base: 'Faenza, Italy',
                teamChief: 'Laurent Mekies',
                technicalChief: 'Jody Egginton',
                chassis: 'VCARB 01',
                powerUnit: 'Honda RBPT',
                colorId: 'T7',
            },
            'Kick Sauber':
            {
                teamId: 'sauber',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/kick-sauber-logo.png',
                fullName: 'Stake F1 Team Kick Sauber',
                base: 'Hinwil, Switzerland',
                teamChief: 'Alessandro Alunni Bravi',
                technicalChief: 'James Key',
                chassis: 'C44',
                powerUnit: 'Ferrari',
                colorId: 'T8'
            },
            'Haas F1 Team':
            {
                teamId: 'haas',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/haas-logo.png',
                fullName: 'MoneyGram Haas F1 Team',
                base: 'Kannapolis, United States',
                teamChief: 'Ayao Komatsu ',
                technicalChief: 'Andrea De Zordo',
                chassis: 'VF-24',
                powerUnit: 'Ferrari',
                colorId: 'T9'
            },
            'Williams':
            {
                teamId: 'williams',
                carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams.png',
                teamLogo: 'https://media.formula1.com/content/dam/fom-website/teams/2024/williams-logo.png',
                fullName: 'Williams Racing',
                base: 'Grove, United Kingdom',
                teamChief: 'James Vowles',
                technicalChief: 'Pat Fry',
                chassis: 'FW46',
                powerUnit: 'Mercedes',
                colorId: 'T10'
            },
        },
    }),

    actions: {

        // function to get drivers data
        async getDriversData() {

            // check whether driver and session data are already in the localStorage
            const driversData = localStorage.getItem('driversData');
            const sessionsData = localStorage.getItem('sessionsData');

            if (driversData && sessionsData) {
                // if the data are in the localStorage, load data
                this.drivers = JSON.parse(driversData);
                this.sessionKeys24 = JSON.parse(sessionsData);
                console.log('openF1 data uploaded from localStorage');
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
                    // Ergast calls
                    this.getErgastDriverStandings(),
                    // this.getErgastDriverResults(),
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
                        // carImage: teamInfo.carImage || '',
                        team_logo: teamInfo.teamLogo || '',
                        colour_id: teamInfo.colorId || '',
                        team_id: teamInfo.teamId,
                        points: ergastDriver ? ergastDriver.points : 0,  // add points or 0 if not found
                        results: {
                            // !TODO
                        },
                    };
                });
                localStorage.setItem('driversData', JSON.stringify(this.drivers));

            } catch (error) {
                console.error("Failed to load openF1 data:", error);
            }
        },

        // function to get driver standings
        async getErgastDriverStandings() {
            try {
                const response = await axios.get(`${this.ergastApi}${this.ergastApiSeason}/driverStandings.json`);
                return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            } catch (error) {
                console.error('Failed to load ergast driver data:', error.message);
                return [];
            }
        },


        /* function to get constructor standings  */
        async getErgastConstructorStandings() {
            try {

                const response = await axios.get(`${this.ergastApi}${this.ergastApiSeason}/constructorStandings.json`);
                const constructorStandings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

                // add additional details to teams
                this.teamInfo = constructorStandings.map((team) => {
                    const teamId = Object.values(this.teams).find(t => t.teamId === team.Constructor.constructorId) || {};

                    return {
                        ...team,
                        carImage: teamId.carImage || '',
                        teamLogo: teamId.teamLogo || '',
                        carDetails: {
                            fullName: teamId.fullName || 'N/A',
                            base: teamId.base || 'N/A',
                            teamChief: teamId.teamChief || 'N/A',
                            technicalChief: teamId.technicalChief || 'N/A',
                            chassis: teamId.chassis || 'N/A',
                            powerUnit: teamId.powerUnit || 'N/A',
                        }
                    }

                })

                console.log(this.teamInfo);

            } catch (error) {
                console.error('Failed to load ergast constructor data:', error.message);
                return [];

            }
        },

        /* #TODO race schedule - array con i dati dei circuiti (img etc) */

        showCurrentDriver(clickedIndex) {
            this.activeDriver = clickedIndex;
            this.activeInfo = this.drivers[clickedIndex];
            console.log(this.activeDriver, this.activeInfo);
        },
    }
});
