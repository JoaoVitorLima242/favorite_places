import * as SQLite from 'expo-sqlite'
import Place from '../models/Place';

const database = SQLite.openDatabase('places.db')

export const init = () => {
    const promise = new Promise<void>((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                )`,
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error)
                    return true
                }
            )
        }); 
    })

    return promise
}

export const insertPlace = ({title, imageUri, address, location}: Place) => {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `
                    INSERT INTO places (
                        title,
                        imageUri,
                        address,
                        lat,
                        lng
                    ) VALUES (?, ?, ?, ?, ?)`,
                [
                    title,
                    imageUri,
                    address,
                    location.latitude,
                    location.longitude
                ],
                (_, result) => {
                    console.log(result)
                    resolve(result)
                },
                (_, error) => {
                    reject(error)
                    return true
                }
            );
        })
    })

    return promise
}