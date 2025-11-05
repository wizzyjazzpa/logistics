import Mailjet from "node-mailjet";
import dotenv from "dotenv";


dotenv.config();

const mailjet = Mailjet.apiConnect("fdf84db346a484733b042a377120be64","bcf3fcec9e830abda780c2d088c21d61");

export interface MailOptions{
    to: string;
    subject:string;
    text?:string;
    html?:string
}


export async function sendMail({to, subject,text,html}:MailOptions){

    try{

        const result =await mailjet.post("send",{version:"v3.1"}).request({
            Messages:[{
                 From:{
                    Email:process.env.Email,
                    Name:process.env.SENDER_NAME
                 },
                 To:[
                    {
                      email:to,
                 }
                ],
                subject:subject,
                TextPart:text,
                HTMLPART: html||`<p>${text}</p>`
            }]

        });
         console.log("✅ Email sent:");
         return result.body;

    }catch(error:any){
              console.error("❌ Failed to send email:", error.message);
             throw new Error("Email sending failed");
    }
    
}