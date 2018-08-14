const config = require('../config');
const dataSet = require('../getjson');

const appRouter = (app) => {
    // GET ALL ITEMS
    dataSet.getData((err, data) => {
        // GET DATA ARRAY
        let info = data.data;

        info.push({
             
        });

        app.get('/list', (req, res) => {
            if(info && info.length) {
                res.send({
                    status: config.STATUS.OK,
                    message: info,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'No concertroom found.',
                });
            }   
        });

        // GET ITEM DETAILS
        app.get('/list/:id', (req, res) => {
            let concertroom = null;
            console.log('Get concertroom', req.params.id);

            if(info && info.length) {
                concertroom = info.filter((concertroom) => ('' + concertroom.id) === req.params.id);
            }
            if(concertroom) {
                res.send({
                    status: config.STATUS.OK,
                    message: concertroom[0],
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'No concertroom found.',
                });
            }   
        });

        // ADD ITEM
        app.post('/list/add', (req, res) => {
            const maxIndex = Math.max.apply(Math,info.map((o) => o.id));
            console.log('Add concertroom', req.body, maxIndex);
            let concertroom = req.body;
            concertroom.id = maxIndex + 1;

            info.push(concertroom);

            if(info[info.length - 1] === concertroom) {
                res.send({
                    status: config.STATUS.OK,
                    message: concertroom,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: "Couldn't add a concertroom.",
                });
            }
        });

        // REMOVE ITEM
        app.delete('/list/:id', (req, res) => {
            console.log('Remove concertroom', req.params.id);
            info = info.filter((concertroom) => ('' + concertroom.id) !== req.params.id);
            res.send({
                status: config.STATUS.OK,
                message: 'Concertroom removed.',
            });
        });

        // UPDATE ITEM
        app.put('/list/:id', (req, res) => {
            let concertroom = null;
            console.log('update concertroom', req.body);

            if(info && info.length) {
                concertroom = info.filter((concertroom) => ('' + concertroom.id) === req.params.id);
            }
            if(concertroom[0]) {
                info = info.map((s) => {
                    return ('' + s.id) === req.params.id ? req.body : s;
                })

                res.send({
                    status: config.STATUS.OK,
                    message: req.body,
                });
            } else {
                res.send({
                    status: config.STATUS.ERROR,
                    message: 'No concertroom updated.',
                });
            }
        });
    });
}

module.exports = appRouter;