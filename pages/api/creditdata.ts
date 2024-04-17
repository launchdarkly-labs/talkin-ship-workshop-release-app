// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { drizzle } from 'drizzle-orm/postgres-js'
import { eq } from 'drizzle-orm';
import postgres from 'postgres'
import { transactions } from '@/schema/schema'
import { creditData } from '@/lib/creditInserts';
import { getServerClient } from '@/utils/ld-server';
import { getCookie } from 'cookies-next';
import * as ld from '@launchdarkly/node-server-sdk';
import {
  DynamoDBClient,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

type Data = {
    id: number,
    date: string | null,
    merchant: string | null,
    status: string | null,
    amount: number | null,
    accounttype: string | null,
    user: string | null
}[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {

  function delay(low: number, high: number) {
    const min = low * 1000;
    const max = high * 1000;
    const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log("Delay is: "+randomDelay)
    return new Promise(resolve => setTimeout(resolve, randomDelay));
  }

    const connectionString = process.env.DB_URL
    if (!connectionString) {
        throw new Error('DATABASE_URL is not set')
    }
    const client = postgres(connectionString)
    const db = drizzle(client);
    const ldClient = await getServerClient(process.env.LD_SDK_KEY || "");
    const clientContext: any = getCookie('ldcontext', { req, res })
    console.log(clientContext)
    const dynamoClient = new DynamoDBClient({
    region: process.env.REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    }
  });

const config: ld.LDMigrationOptions = {
      readOld: async(key?: string) => {
    async function getMyData() {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      //console.log("random failure number: " + randomNumber)
      if (randomNumber <= 20) {
        //console.log("Error caught -")
        throw new Error('Simulated failure');
      }
      // console.log("Waiting delay")
      await delay(1, 3)
      // console.log("Delay complete")
      let creditTransactions;
      creditTransactions = await db.select().from(transactions).where(eq(transactions.accounttype, 'credit'))
      return creditTransactions
    }

    const creditTransactions = await getMyData()

    if (creditTransactions) {

      return ld.LDMigrationSuccess(creditTransactions)
    } else {
      //@ts-ignore
      return ld.LDMigrationError(checkingTransactions.error as Error)
    }
  },

      readNew: async(key?: string) => {      
          let dynamoData = null;
          const Item = await dynamoClient.send(
            new ScanCommand({
              TableName: "talkin-ship-release-demo",
              ExpressionAttributeNames: {
                "#ID": "id",
                "#DT": "date",
                "#MR": "merchant",
                "#ST": "status",
                "#AM": "amount",
                "#AT": "account_type"
              },
              ExpressionAttributeValues:
              {
                ":ck": {
                  S: 'credit'
                }
              },
              FilterExpression: "account_type = :ck",
              ProjectionExpression: "#ID, #DT, #MR, #ST, #AM, #AT",
            })
          );
          try {
            const items = Item["Items"].map((item) => {
              return unmarshall(item);
            });
            dynamoData = {
              dynamo: items.map((item) => {
                return {
                  id: item.id,
                  date: item.date,
                  merchant: item.merchant,
                  status: item.status,
                  amount: item.amount
                };
              }),
            };
            return [
              ld.LDMigrationSuccess(dynamoData)
            ];
          } catch (error) {
            return ld.LDMigrationError(new Error("Migration Error with DynamoDB"))
          }
        },

      WriteOld: async(params?: {key: string, value: any}) => {
            res.status(200)

      },

      WriteNew: async(params?: {key: string, value: any}) => {
            res.status(200)
      },

      execution: new ld.LDConcurrentExecution(),
      latencyTracking: true,
      errorTracking: true,

    }

    //@ts-ignore
    const migration = new ld.createMigration(ldClient, config)
    let jsonObject

    if (clientContext == undefined) {
    jsonObject = {
      key: '12234',
      user: "Anonymous"
    }
  } else {
    const json = decodeURIComponent(clientContext);
    jsonObject = JSON.parse(json);
  }

  if (req.method === 'GET') {
    let creditData 
    creditData = await db.select().from(transactions).where(eq(transactions.accounttype, 'credit'))
    //@ts-ignore
    res.status(200).json(creditData);
  }
}
