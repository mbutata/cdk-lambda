// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
// import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
// import middy from "@middy/core";
// import { logger } from "../powertools/utilities";

// const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//   logger.appendKeys({
//     resource_path: event.requestContext.resourcePath
//   });
//   try {


//     logger.info('Product retrieved with ID ');

//     return {
//       statusCode: 200,
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(''),
//     };
//   } catch (error: any) {
//     logger.error('Unexpected error occurred while trying to retrieve a product', error);

//     return {
//       statusCode: 500,
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(error),
//     };
//   }
// };

// const handler = middy(lambdaHandler);

// export {
//   handler
// };

// module.exports.getmeasurement = async(event: any, context: any, callback: any) => {
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('I\'m Get Messaurement'),
//       };
//       callback(null, response);
// }

// export const handler = async () => {
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('I\'m Get Messaurement'),
//       };
//       log.debug(response);
//       callback(null, response);
// };

export const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'I\'m Get measurement',
        }),
    };
};

