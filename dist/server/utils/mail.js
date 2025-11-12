"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = sendMail;
const node_mailjet_1 = __importDefault(require("node-mailjet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mailjet = node_mailjet_1.default.apiConnect("fdf84db346a484733b042a377120be64", "bcf3fcec9e830abda780c2d088c21d61");
async function sendMail({ to, subject, text, html }) {
    try {
        const result = await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [{
                    From: {
                        Email: process.env.Email,
                        Name: process.env.SENDER_NAME
                    },
                    To: [
                        {
                            email: to,
                        }
                    ],
                    subject: subject,
                    TextPart: text,
                    HTMLPART: html || `<p>${text}</p>`
                }]
        });
        console.log("✅ Email sent:");
        return result.body;
    }
    catch (error) {
        console.error("❌ Failed to send email:", error.message);
        throw new Error("Email sending failed");
    }
}
