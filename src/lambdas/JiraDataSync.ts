export const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'I\'m Jira Data Sync',
        }),
    };
};