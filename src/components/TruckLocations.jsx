import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TruckLocations = () => {
    const [truckData, setTruckData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://menu.dining.ucla.edu/hours/');
                const truckData = parseTruckData(response.data);
                setTruckData(truckData);
                //
            } catch (error) {
                console.error('Error fetching content:', error);
            }

        }
        fetchData();
    }, []);

    const parseTruckData = (htmlContent) => {
        const regexRieber = /<td class="hours-head">\s*<span class="hours-location">Rieber Turnaround Food Trucks<\/span>[\s\S]*?<td class="hours-open(?:.*?)">\s*<span class="hours-range">(.*?)<\/span>\s*<span class="hours-additonal">(.*?)<\/span>[\s\S]*?<td class="hours-open(?:.*?)">\s*<span class="hours-range">(.*?)<\/span>\s*<span class="hours-additonal">(.*?)<\/span>/g;
        const regexSproul = /<td class="hours-head">\s*<span class="hours-location">Sproul Turnaround Food Trucks<\/span>[\s\S]*?<td class="hours-open(?:.*?)">\s*<span class="hours-range">(.*?)<\/span>(?:\s*<span class="hours-additonal">(.*?)<\/span>)?(?:\s*<span class="hours-additonal">(.*?)<\/span>)?[\s\S]*?<td class="hours-open(?:.*?)">\s*<span class="hours-range">(.*?)<\/span>(?:\s*<span class="hours-additonal">(.*?)<\/span>)?(?:\s*<span class="hours-additonal">(.*?)<\/span>)?/g;

        const truckData = [];

        let matchRieber = regexRieber.exec(htmlContent);
        while (matchRieber !== null) {
            const location = 'Rieber Turnaround Food Trucks';
            const hours1 = matchRieber[1];
            const truckName1 = matchRieber[2];
            const hours2 = matchRieber[3];
            const truckName2 = matchRieber[4];
            truckData.push({ location, hours: [hours1, hours2], truckNames: [truckName1, truckName2] });
            matchRieber = regexRieber.exec(htmlContent);
        }

        let matchSproul = regexSproul.exec(htmlContent);
        while (matchSproul !== null) {
            const location = 'Sproul Turnaround Food Trucks';
            const hours1 = matchSproul[1];
            const truckName1 = matchSproul[2];
            const truckName2 = matchSproul[3];
            const hours2 = matchSproul[4];
            const truckName3 = matchSproul[5];
            const truckName4 = matchSproul[6];
            truckData.push({ location, hours: [hours1, hours2], truckNames: [truckName1, truckName2, truckName3, truckName4] });
            matchSproul = regexSproul.exec(htmlContent);
        }

        return truckData;

    };
    const rieberInfo = truckData[0];
    const sproulInfo = truckData[1];
    //const locations = [rieberInfo?.location, sproulInfo?.location];
    //const times = rieberInfo?.hours || [];
    const howManyRieber = rieberInfo?.truckNames.length / rieberInfo?.hours.length || 0;
    let dinnerRieber = rieberInfo?.truckNames.slice(0, howManyRieber) || [];
    const extendedRieber = rieberInfo?.truckNames.slice(howManyRieber) || [];
    const howManySproul = sproulInfo?.truckNames.length / sproulInfo?.hours.length || 0;
    let dinnerSproul = sproulInfo?.truckNames.slice(0, howManySproul) || [];
    const extendedSproul = sproulInfo?.truckNames.slice(howManySproul) || [];

    //array filters (if unusual amount of food trucks are present then we have undefined values and need to remove)
    dinnerSproul = dinnerSproul.filter(item => item !== undefined);
    dinnerRieber = dinnerRieber.filter(item => item !== undefined);


    return (
        <div>
            {truckData.map(truck => (
                <div key={truck.location}>
                    <h3>{truck.location}</h3>
                    {truck.hours.map((hour, index) => (
                        <div key={index}>
                            <p>{hour}</p>
                            <ul>
                                {index === 0 ? (
                                    truck.location === 'Rieber Turnaround Food Trucks' ?
                                        dinnerRieber.map((truckName, idx) => (
                                            <li key={idx}>{truckName}</li>
                                        ))
                                        :
                                        dinnerSproul.map((truckName, idx) => (
                                            <li key={idx}>{truckName}</li>
                                        ))
                                ) : (
                                    truck.location === 'Rieber Turnaround Food Trucks' ?
                                        extendedRieber.map((truckName, idx) => (
                                            <li key={idx}>{truckName}</li>
                                        ))
                                        :
                                        extendedSproul.map((truckName, idx) => (
                                            <li key={idx}>{truckName}</li>
                                        ))
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TruckLocations;
