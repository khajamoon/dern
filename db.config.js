import AWS from 'aws-sdk'

AWS.config.update({
    region: "",
    accessKeyId: "",
    secretAccessKey: ""
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

export {
    db,
    Table
}
