import mongoose from "mongoose";

export const DrinkSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

export interface IDrink {
    name: String,
    price: Number,
    description: String
}
export const Drink = mongoose.model('Drink', DrinkSchema);

// CRUD Operations
export const createDrink = async (data: IDrink) => {
    const drink = new Drink(data)
    await drink.save();

    return drink

}

export const fetchDrinks = async () => {
    const drinks = await Drink.find({})

    return drinks
}

export const deleteDrink = async (id: string) => {
    const drink = await Drink.findById(id)
    await drink?.deleteOne()

    return drink
}

export const findDrinkByName = async (name: string) => {
    const drink = await Drink.find({ 
        name: { $regex: RegExp(name, 'i') }
     });

    return drink
}

export const updateDrink = async (id: string, drinkUpdateParams: Partial<IDrink>) => {
    const drink = await Drink.findById(id)
    
    return await drink?.updateOne(drinkUpdateParams)
}
