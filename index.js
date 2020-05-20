const {Client, MessageMedia} = require('whatsapp-web.js');
const client = new Client();
const pdf2base64 = require('pdf-to-base64');
const axios = require('axios')

var qrcode = require('qrcode-terminal');

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == "oi") {

        msg.reply("Oi, não é o Thiago que esta respondendo... Sim um BOT\n" +
            "\nO Thiago me ensinou fazer umas coisas muito legais como:\n" +
            "\nDigite !oisumido é irei te mandar uma mensagem super fofinha" +
            "\nMas se você for minha mãe basta digitar !uploc que irei te enviar minha localização\n" +
            "\nOu se quiser ver a lista de comandos completos basta digitar\n" +
            "\n!comandos");

    } else if (msg.body == '!ping') {

        msg.reply('pong');
    } else if (msg.body == "!comandos") {

        msg.reply("Eita! Parece que você quer mesmo falar comigo.\n" +
            "\nEntão vamos lá 😨\n" +
            "\nDigite: !segredo que irei te contar um segredo do Thiago\n" +
            "\nDigite: !callex se você for um ex meu, para ver uma coisa 😡\n" +
            "\nDigite: !callthi caso você queria falar com o Thiago verdadeiro 😭\n" +
            "\nDigite: !tindermax pra saber quantos matchs o Thiago já deu no Tinder 😏\n" +
            "\nDigite: !curriculo para ganhar uma copia do meu curriculo 😍\n" +
            "\nDigite: !jogos para jogar algo");
    } else if (msg.body == "!oisumido") {

        msg.reply("Oi lindo 😘");

    } else if (msg.body == "!segredo") {

        const secret = ["O Thiago já levou chifre 🐮",
            "O Thiago não bebe bebidas alcoolicas exceto Cerveja 🍺",
            "O Thiago nunca deu PT",
            "O Thiago ama cozinhar",
            "O Thiago já namorou secretamente",
            "O Thiago perdeu seu BV com 16 anos 😘",
            "O Thiago perdeu seu BV com uma pessoa do seu bairro 😷"
        ];
        const randomSecret = secret[Math.floor(Math.random() * secret.length)];

        msg.reply(randomSecret);
    } else if (msg.body == "!callex") {

        msg.reply("Te amo? 😍😨");

    } else if (msg.body == "!tindermax") {

        msg.reply("O Thiago já deu cerca de **1000** Matchs no tinder");
    } else if (msg.body == "!curriculo") {

        pdf2base64("public/pdf/curriculo.pdf")
            .then(
                (response) => {
                    const media = new MessageMedia('application/pdf', response);
                    msg.reply(media);
                    msg.reply("Espero que você goste 😥");
                }
            )
            .catch(
                (error) => {
                    msg.reply("EITA! Não consegui enviar meu curriculo 😭\n" +
                        "\nMas já vou avisar o Thiago sobre isso 😍");
                    console.log(error);
                }
            )

    } else if(msg.body == "!jogos") {
        msg.reply("Então vamos jogar\n" +
            "\nAdivinhe o animal:\n" +
            "\nSerá que você consegue advinhar o animal em que eu estou pensando em só 3 tentativas?\n" +
            "Para saber como jogar Advinhe o Animal, digite: !help game1\n" +
            "\nPedra Papel Tesoura (ppt):\n" +
            "\nNesse classico vou tentar te derrotar no Pedra Papel tesoura\n" +
            "\nPara saber como jogar Pedra Papel Tesoura, digite: !help game2");
    }
    else {

        msg.reply("Tente digitar: !comandos")

        // axios.post('http://127.0.0.1:5000/getresponse/', {
        //     msg_analytic: msg.body
        // }).then(function (response) {
        //     msg.reply(response.data.mensg);
        //     msg.reply("Desculpa se eu disse algo errado, é que ainda estou aprendendo a falar :c")
        // }).catch(function (error) {
        //     console.log(error);
        //     msg.reply("Parece que alguém desligou meu servidor...");
        // });

    }
});


client.initialize();

