import path  from 'path';

const __dirname = path.resolve();

export const Home = (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
}

export const About = (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
}

export const Contact = (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
}