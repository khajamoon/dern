import AWS from 'aws-sdk'

AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIAUTR5PQUJ3WYAU7SX",
    secretAccessKey: "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"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

export {
    db,
    Table
}