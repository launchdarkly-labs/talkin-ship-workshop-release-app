import {
    BedrockRuntimeClient,
    InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerClient } from '@/utils/ld-server';
import { getCookie } from "cookies-next";

export default async function bedrockCall(req: NextApiRequest, res: NextApiResponse) {
    const client = new BedrockRuntimeClient({ region: "us-west-2" });

    // We need to update this prompt with the code from 04-exploring-different-flag-variations
    let prompt = "Tell the user that they still needs to make some changes to the API for this to work. Give them a nice message letting them know that you are happy to assist once they make the right changes in their application and then you can give them financial advice. Hard constraint on a maximum of 50 words." 
    // update between these two comment blocks. 


// Debug jurassic another time 
    const input2 = {
        modelId: "ai21.j2-ultra-v1",
        contentType: "application/json",
        accept: "application/json",
        body: JSON.stringify({"prompt":`\n${prompt}`,"maxTokens":200,"temperature":0.7,"topP":1,"stopSequences":[],"countPenalty":{"scale":0},"presencePenalty":{"scale":0},"frequencyPenalty":{"scale":0}})
    }
//

    const input = {
        modelId: "anthropic.claude-instant-v1",
        contentType: "application/json",
        accept: "application/json",
        body: JSON.stringify({
            prompt: `\n\nHuman:${prompt}\n\nAssistant:`,
            max_tokens_to_sample: 500,
            temperature: 0.9,
            top_p: 1,
        }),
    };
    const command = new InvokeModelCommand(input);
    try {
        const response = await client.send(command);
        let decoder = new TextDecoder();
        let jsontext = JSON.parse(decoder.decode(response.body));
        // jurassic return structure

        res.status(200).json(jsontext);
    } catch (error: any) {
      
        throw new Error(error.message);
    }
}
