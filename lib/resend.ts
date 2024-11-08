import {Resend} from 'resend';

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


const resendM = (to:string) => {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        // to: '1445260526@qq.com',
        to: to,
        subject: 'Hello World',
        // html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        text: text,
    });

}

// resendM("1445260526@qq.com")
export default resendM