import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Функция для отправки сообщения в Telegram
const sendMessageToTelegram = async (message) => {
    try {
        const telegramBotToken = '6638677813:AAEI6EhlQh55DODQNOIe8xkY-7ws8gDOHiQ';
        const chatId = '879142804';

        const apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        const data = await response.json();

        if (data.ok) {
            console.log('Message sent successfully to Telegram');
        } else {
            console.error('Error sending message to Telegram:', data);
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
};

// Обработчик маршрута для отправки данных на сервер
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Отправка сообщения в Telegram
        const telegramMessage = `
            New Client:
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Message: ${message}
        `;
        await sendMessageToTelegram(telegramMessage);

        // Добавьте ваш код для отправки электронного письма
        // ...

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

