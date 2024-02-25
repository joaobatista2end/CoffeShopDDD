import express from 'express';
import CoffeController from './controllers/coffe.controller';

const router = express.Router();

router.get('/coffes', CoffeController.fetch.bind(CoffeController));
router.get('/coffes/:id', CoffeController.find);
router.post('/coffes/', CoffeController.store);
router.put('/coffes/:id', CoffeController.update);
router.delete('/coffes/:id', CoffeController.destroy);

export default router;
