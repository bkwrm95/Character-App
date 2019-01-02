import { Handler, Context, Callback } from 'aws-lambda';
import { CharacterService } from '../service/CharacterService';
import { Database } from "../utility/Database";

interface Response {
    statusCode: number;
    body: string;
}


export const handler: Handler = (event: any, context: Context, callback: Callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    let database = new Database();
    let service = new CharacterService();

    console.log('FUNCTION ENTER');

    database.getTables().then((results) => {

        console.log('FUNCTION EXIT');

        callback(null, {
            statusCode: 200,
            body: JSON.stringify(results, null, 2),
        });
    });

};

