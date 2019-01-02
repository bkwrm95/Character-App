import { Handler, Context, Callback } from 'aws-lambda';

// process.env.DB_ENDPOINT

interface Response {
    statusCode: number;
    body: string;
}

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
    const response: Response = {
        statusCode: 200,
        body: JSON.stringify({event, context}, null, 2),
    };

    callback(null, response);
};