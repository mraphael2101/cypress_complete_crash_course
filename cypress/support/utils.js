import {ENV} from "./constants";

/**
 * @function generateOAuthToken
 * @description Derives the prefix of the DynamoDB Table-Name based on the Environment variable
 * @returns void
 */
export const getDbTableNamePrefix = () => {
    let value = ENV().toLowerCase();
    return value.replace('env_', '');
}