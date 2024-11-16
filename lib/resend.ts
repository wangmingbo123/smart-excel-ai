import {CreateEmailResponse, Resend} from 'resend';

const resend = new Resend('re_WjGjSVRQ_HwtSbqJZKWdft8sBgjfjZCLT');
const text =
    "尊敬的用户：\n" +
    "您好！\n" +
    "我们很高兴与您分享一个宝贵的求职资源 ——[求职咨询网站名称]。这个网站致力于为您提供全方位的求职支持和专业的咨询服务。\n" +
    "无论您是正在寻找新的职业机会，还是希望提升自己在求职市场中的竞争力，我们的求职咨询网站都能满足您的需求。\n" +
    "在这里，您可以：\n" +
    "浏览丰富的职位信息，精准匹配您的技能和兴趣。\n" +
    "获得专业的求职建议和技巧，从简历撰写到面试准备，一应俱全。\n" +
    "与行业专家交流，获取最新的行业动态和职业发展趋势。\n" +
    "访问我们的求职咨询网站，开启您的求职成功之旅吧！\n" +
    "网址：http://localhost:3000\n" +
    "祝您求职顺利，事业有成！"



// const websiteUrl ="http://localhost:3000";
const websiteUrl =`${process.env.NEXT_PUBLIC_APP_URL}`?? "http://localhost:3000";

console.log(websiteUrl);

//      from: 'anyone@interviewer.site',
//      这里需要绑定域名才可以 在resend 平台

const resendM = async (to:string,name:string) => {
    // 邮件内容
    const emailContent = `
            <h1>Hello ${name},</h1>
            <p>Thank you for visiting our website: <a href="${websiteUrl}">${websiteUrl}</a>.</p>
            <p>Best regards,<br>Your Company</p>
        `;

    const  createEmailResponse = await  resend.emails.send({
        // from: 'onboarding@resend.dev',
        from: 'anyone@interviewer.site',
        // to: '1445260526@qq.com',
        to: to,
        subject: 'Hello World',
        // html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        // text: text,
        html: emailContent,
    });
    console.log("createEmailResponse")
    console.log(createEmailResponse)
}

// resendM("1445260526@qq.com","wang")
// resendM("118804637910@163.com")
export default resendM