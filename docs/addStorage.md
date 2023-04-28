# Add DynamoDB NoSQL database

```
(base) ➜  amplify-crypto-portfolio git:(master) ✗ sudo amplify add storage
Password:
? Select from one of the below mentioned services: NoSQL Database

Welcome to the NoSQL DynamoDB database wizard
This wizard asks you a series of questions to help determine how to set up your NoSQL database table.

✔ Provide a friendly name · cryptofolio22
✔ Provide table name · cryptofolio22table

You can now add columns to the table.

✔ What would you like to name this column · id
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · yes
✔ What would you like to name this column · assetName
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · yes
✔ What would you like to name this column · assetSymbol
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · yes
✔ What would you like to name this column · buyPrice
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · yes
✔ What would you like to name this column · currentPrice
✔ Choose the data type · string
✔ Would you like to add another column? (Y/n) · no

Before you create the database, you must specify how items in your table are uniquely organized. You do this by specifying a primary key. The primary key uniquely identifies each item in the table so that no two items can have the same key. This can be an individual column, or a combination that includes a primary key and a sort key.

To learn more about primary keys, see:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey

✔ Choose partition key for the table · id
✔ Do you want to add a sort key to your table? (Y/n) · no

You can optionally add global secondary indexes for this table. These are useful when you run queries defined in a different column than the primary key.
To learn more about indexes, see:
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.SecondaryIndexes

✔ Do you want to add global secondary indexes to your table? (Y/n) · no
✔ Do you want to add a Lambda Trigger for your Table? (y/N) · no
✅ Successfully added resource cryptofolio22 locally

⚠️ If a user is part of a user pool group, run "amplify update storage" to enable IAM group policies for CRUD operations
✅ Some next steps:
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud

(base) ➜  amplify-crypto-portfolio git:(master) ✗
```

## Push changes

````
(base) ➜  amplify-crypto-portfolio git:(master) ✗ sudo amplify push
Password:
⠧ Fetching updates to backend environment: develop from the cloud.⠋ Building resource auth/amplifyc
✔ Successfully pulled backend environment develop from the cloud.

    Current Environment: develop

┌──────────┬────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name              │ Operation │ Provider plugin   │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Storage  │ cryptofolio22              │ Create    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ amplifycryptofolio7ae87080 │ No Change │ awscloudformation │
└──────────┴────────────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes

Deployment completed.
Deployed root stack amplifycryptofolio [ ======================================== ] 3/3
        amplify-amplifycryptofolio-de… AWS::CloudFormation::Stack     UPDATE_COMPLETE
        storagecryptofolio22           AWS::CloudFormation::Stack     CREATE_COMPLETE
        authamplifycryptofolio7ae87080 AWS::CloudFormation::Stack     UPDATE_COMPLETE
Deployed storage cryptofolio22 [ ======================================== ] 1/1
        DynamoDBTable                  AWS::DynamoDB::Table           CREATE_COMPLETE
        ```

````
