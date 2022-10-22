import { createClient } from "next-sanity";

export const client = createClient({
   projectId: "iac96shc",
   dataset: "production",
   useCdn: false,
   apiVersion: 'v2022-10-20',
   token: process.env.SANITY_Token
});

export default async function handler(req, res) {
   switch (req.method) {
      case "POST":
         //this JSON arrives as a string,
         //so we turn it into a JS object with JSON.parse()
         const newContact = await JSON.parse(req.body);
         //then use the Sanity client to create a new todo doc
         try {
            await client
               .create({
                  _type: "contact",
                  name: newContact.name,
                  email: newContact.email,
                  createdAt: new Date().toISOString(),
                  subject: newContact.subject,
                  message: newContact.message,
               })
               .then((res) => {
               });
            res
               .status(200)
               .json({ msg: `${res.name} Form Sent` });
         } catch (err) {
            console.error(err);
            res.status(500).json({ msg: err });
         }

         break;
   }
}